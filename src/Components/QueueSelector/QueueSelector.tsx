import React, { useEffect, useState } from "react";
import { fetchNextMessage, fetchQueues } from "../../utils/api";

interface Queue {
  name: string;
  count: number;
}

export const QueueSelector: React.FC = () => {
  const [queues, setQueues] = useState<Queue[]>([]);
  const [selectedQueue, setSelectedQueue] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadQueues = async () => {
      const data = await fetchQueues();
      setQueues(data);
      if (data.length > 0) {
        setSelectedQueue(data[0].name);
      }
    };
    loadQueues();
  }, []);

  const handleFetchMessage = async () => {
    if (selectedQueue) {
      const message = await fetchNextMessage(selectedQueue);
      setMessage(
        message ? JSON.stringify(message, null, 2) : "No message available."
      );
    }
  };

  return (
    <div>
      <h2>Select a Queue</h2>
      <select
        value={selectedQueue}
        onChange={(e) => setSelectedQueue(e.target.value)}
      >
        {queues.map((queue) => (
          <option key={queue.name} value={queue.name}>
            {queue.name}
          </option>
        ))}
      </select>
      <button onClick={handleFetchMessage}>Go</button>
      <div>
        <h3>Message:</h3>
        <pre>{message}</pre>
      </div>
    </div>
  );
};

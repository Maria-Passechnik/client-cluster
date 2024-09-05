import React, { useEffect, useState } from 'react';
import { fetchQueues } from '../../utils/api';

interface Queue {
  name: string;
  count: number;
}

export const QueueList: React.FC = () => {
  const [queues, setQueues] = useState<Queue[]>([]);

  useEffect(() => {
    const loadQueues = async () => {
      const data = await fetchQueues();
      setQueues(data);
    };
    loadQueues();
  }, []);

  return (
    <div>
      <h2>Available Queues</h2>
      <ul>
        {queues.map((queue) => (
          <li key={queue.name}>
            {queue.name} - {queue.count} messages
          </li>
        ))}
      </ul>
    </div>
  );
};
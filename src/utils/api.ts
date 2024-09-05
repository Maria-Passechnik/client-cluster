import axios from 'axios';

const queuesUrl = 'http://localhost:4000/api/queue';

// Fetch all queues and their message counts
export const fetchQueues = async () => {
  const response = await axios.get(`${queuesUrl}/`);
  return response.data;
};

// Fetch the next message from a specific queue
export const fetchNextMessage = async (queueName: string, timeout: number = 10000) => {
  const response = await axios.get(`${queuesUrl}/${queueName}?timeout=${timeout}`);
  return response.status === 200 ? response.data : null;
};
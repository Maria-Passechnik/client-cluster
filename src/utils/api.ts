import axios from "axios";

const queuesUrl = "http://localhost:4000/api/queue";

export const fetchQueues = async () => {
  const response = await axios.get(`${queuesUrl}/`);
  return response.data;
};

export const fetchNextMessage = async (
  queueName: string,
  timeout: number = 10000
) => {
  const response = await axios.get(
    `${queuesUrl}/${queueName}?timeout=${timeout}`
  );
  return response.status === 200 ? response.data : null;
};

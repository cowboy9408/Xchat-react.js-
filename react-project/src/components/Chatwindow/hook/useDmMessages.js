import { useState, useEffect } from 'react';

export const useDmMessages = (dmId) => {
  const [dmMessages, setDmMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/dms/${dmId}/messages`);
        const data = await response.json();
        setDmMessages(data);
      } catch (error) {
        console.error('Error fetching DM messages:', error);
      }
    };

    fetchMessages();
  }, [dmId]);

  return dmMessages;
};

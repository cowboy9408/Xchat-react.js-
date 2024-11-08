import { useState, useEffect } from 'react';

export const useChannelMessages = (channelId) => {
  const [channelMessages, setChannelMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/channels/${channelId}/messages`);
        const data = await response.json();
        setChannelMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [channelId]);

  return channelMessages;
};

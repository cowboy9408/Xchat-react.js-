import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from './ChatWindow'; 
import { useChannelMessages } from './hook/useChannelMessages'; // 커스텀 훅 import

const ChannelSpace = () => {
  const { channelId } = useParams(); 
  const channelMessages = useChannelMessages(channelId); // 커스텀 훅 사용

  return (
    <div>
      <h1>{channelId} 채널</h1>
      <ChatWindow messages={channelMessages} /> {/* 채널 메시지 전달 */}
    </div>
  );
};

export default ChannelSpace;

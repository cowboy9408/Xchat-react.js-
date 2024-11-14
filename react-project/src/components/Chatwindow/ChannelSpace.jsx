import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from './ChatWindow'; 
import { useChannelMessages } from './hook/useChannelMessages'; // 커스텀 훅 import

const ChannelSpace = () => {
  const { channelId } = useParams(); // URL의 파라미터에서 channelId를 추출
  const channelMessages = useChannelMessages(channelId); // channelId를 이용해 해당 채널의 메시지를 가져옴

  return (
    <div>
      <h1>{channelId} 채널</h1> {/* 현재 채널의 ID를 화면에 표시 */}
      <ChatWindow messages={channelMessages} /> {/* 채널 메시지 리스트를 ChatWindow 컴포넌트에 전달 */}
    </div>
  );
};

export default ChannelSpace;

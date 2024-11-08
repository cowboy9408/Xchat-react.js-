import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from './ChatWindow'; 
import { useDmMessages } from './hook/useDmMessages'; // 커스텀 훅 import

const DmSpace = () => {
  const { dmId } = useParams(); 
  const dmMessages = useDmMessages(dmId); // 커스텀 훅 사용

  return (
    <div>
      <h1>{dmId}와의 DM</h1>
      <ChatWindow messages={dmMessages} /> {/* DM 메시지 전달 */}
    </div>
  );
};

export default DmSpace;

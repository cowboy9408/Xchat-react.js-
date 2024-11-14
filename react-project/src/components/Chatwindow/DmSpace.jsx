import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from './ChatWindow'; 
import { useDmMessages } from './hook/useDmMessages'; 

const DmSpace = () => {
  const { dmId } = useParams(); // URL의 파라미터에서 dmId를 추출
  const dmMessages = useDmMessages(dmId); // dmId를 이용해 해당 사용자의 DM 메시지를 가져옴

  return (
    <div>
      <h1>{dmId}와의 DM</h1> 
      <ChatWindow messages={dmMessages} /> {/* DM 메시지 리스트를 ChatWindow 컴포넌트에 전달 */}
    </div>
  );
};

export default DmSpace;

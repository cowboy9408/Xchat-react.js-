import React, { useState } from 'react';
import MessageCardComponent from './Message/MessageCardComponent';
import MessageInput from './MessageInputContainer';
import { useChatMessages } from './hook/useChatMessages'; // 커스텀 훅 import
import { ChatContainer, MessageList } from './style/ChatWindowStyle'; // 스타일 import

const ChatWindow = ({ activeChannel, activeDM }) => { // activeChannel과 activeDM을 props로 받아옴
  const [input, setInput] = useState(''); // 입력된 텍스트 상태 관리
  const [files, setFiles] = useState([]); // 첨부 파일 상태 관리
  const {
    messages, 
    sendMessage, 
    handleEditMessage, 
    handleDeleteMessage, 
    messagesEndRef 
  } = useChatMessages(activeChannel, activeDM); // 커스텀 훅 사용으로 메시지 관련 기능 가져옴

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((message, index) => ( // 메시지 배열을 반복하여 렌더링
          <MessageCardComponent 
            key={message.id} 
            message={message} 
            previous_message={messages[index - 1]} // 이전 메시지 전달
            next_message={messages[index + 1]} // 다음 메시지 전달
            on_edit={handleEditMessage}  // 메시지 수정 핸들러 전달
            on_delete={handleDeleteMessage}  // 메시지 삭제 핸들러 전달
          />
        ))}
        <div ref={messagesEndRef} /> 
      </MessageList>
      <MessageInput
        input={input} // 현재 입력 텍스트 전달
        setInput={setInput} // 입력 상태 업데이트 함수 전달
        sendMessage={sendMessage} // 메시지 전송 함수 전달
        setFiles={setFiles} // 파일 상태 업데이트 함수 전달
      />
    </ChatContainer>
  );
};


export default ChatWindow;

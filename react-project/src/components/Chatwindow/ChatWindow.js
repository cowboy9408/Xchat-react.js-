import React, { useState } from 'react';
import MessageCardComponent from './Message/MessageCardComponent';
import MessageInput from './MessageInputContainer';
import { useChatMessages } from './hook/useChatMessages'; // 커스텀 훅 import
import { ChatContainer, MessageList } from './style/ChatWindowStyle'; // 스타일 import

const ChatWindow = ({ activeChannel, activeDM }) => {
  const [input, setInput] = useState('');
  const [files, setFiles] = useState([]);
  const {
    messages,
    sendMessage,
    handleEditMessage,
    handleDeleteMessage,
    messagesEndRef
  } = useChatMessages(activeChannel, activeDM); // 커스텀 훅 사용

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((message, index) => (
          <MessageCardComponent 
            key={message.id} 
            message={message} 
            previous_message={messages[index - 1]} 
            next_message={messages[index + 1]} 
            on_edit={handleEditMessage}  // 수정 핸들러 전달
            on_delete={handleDeleteMessage}  // 삭제 핸들러 전달
          />
        ))}
        <div ref={messagesEndRef} />  {/* 마지막 메시지 위치 */}
      </MessageList>
      <MessageInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        setFiles={setFiles}
      />
    </ChatContainer>
  );
};

export default ChatWindow;

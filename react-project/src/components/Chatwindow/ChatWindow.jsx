import React, { useState } from 'react';
import MessageCardComponent from './Message/MessageCardComponent';
import MessageInput from './MessageInputContainer';
import { useChatMessages } from './hook/useChatMessages'; // 커스텀 훅 import
import { ChatContainer, MessageList, DateDivider } from './style/ChatWindowStyle'; // 스타일 import

const ChatWindow = ({ activeChannel, activeDM }) => {
  const [input, setInput] = useState(''); // 입력된 텍스트 상태 관리
  const [files, setFiles] = useState([]); // 첨부 파일 상태 관리
  const {
    messages, 
    sendMessage, 
    handleEditMessage, 
    handleDeleteMessage, 
    messagesEndRef 
  } = useChatMessages(activeChannel, activeDM); // 커스텀 훅 사용으로 메시지 관련 기능 가져옴

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // 유효하지 않은 날짜일 경우 현재 날짜를 반환
      const now = new Date();
      return `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
    }
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  let lastDate = null; // 마지막으로 처리된 날짜

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((message, index) => {
          const messageDate = formatDate(message.timestamp); // 메시지의 날짜 형식화
          const showDateDivider = messageDate !== lastDate; // 날짜가 변경되었는지 확인
          lastDate = messageDate; // 마지막 처리 날짜 업데이트

          return (
            <React.Fragment key={message.id}>
              {/* 날짜 구분선 */}
              {showDateDivider && <DateDivider>{messageDate}</DateDivider>}

              {/* 메시지 */}
              <MessageCardComponent 
                message={message}
                previous_message={messages[index - 1]} // 이전 메시지 전달
                next_message={messages[index + 1]} // 다음 메시지 전달
                on_edit={handleEditMessage}  // 메시지 수정 핸들러 전달
                on_delete={handleDeleteMessage}  // 메시지 삭제 핸들러 전달
              />
            </React.Fragment>
          );
        })}
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

import { useState, useEffect, useRef } from 'react';

export const useChatMessages = (activeChannel, activeDM) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeChannel) {
      setMessages([
        { id: 1, userName: 'User1', text: `${activeChannel} 채널 메시지입니다.` },
        { id: 2, userName: 'User2', text: '여기에 메시지를 추가하세요.' }
      ]);
    } else if (activeDM) {
      setMessages([
        { id: 1, userName: 'User1', text: `${activeDM} DM 메시지입니다.` },
        { id: 2, userName: 'User3', text: '여기에 메시지를 추가하세요.' }
      ]);
    }
    scrollToBottom();
  }, [activeChannel, activeDM]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (content, attachedFiles) => {
    const newMessage = {
      id: Date.now(),
      userName: 'User3',
      text: content || '',
      status: 'online',
      time: new Date(),
      isRead: false,
      files: attachedFiles || []
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleEditMessage = (messageId, newText) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId ? { ...message, text: newText } : message
      )
    );
  };

  const handleDeleteMessage = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  return {
    messages,
    sendMessage,
    handleEditMessage,
    handleDeleteMessage,
    messagesEndRef
  };
};

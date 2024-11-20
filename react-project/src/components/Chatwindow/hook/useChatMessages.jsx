import { useState, useEffect, useRef } from 'react'; // React에서 상태 관리와 사이드 이펙트 처리를 위한 Hook

// useChatMessages: 채팅 메시지 관리와 관련된 커스텀 훅
export const useChatMessages = (activeChannel, activeDM) => {
  const [messages, setMessages] = useState([]); // 메시지 목록을 관리하는 상태 변수
  const messagesEndRef = useRef(null); // 채팅 목록의 끝 요소를 참조하는 useRef

  // 스크롤을 채팅 창의 마지막 메시지로 이동시키는 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); // smooth 옵션으로 부드럽게 스크롤
  };

  // activeChannel 또는 activeDM이 변경될 때 메시지 목록 업데이트
  useEffect(() => {
    if (activeChannel) {
      // 활성 채널이 있을 때의 더미 메시지
      setMessages([
        { id: 1, userName: 'User1', text: `${activeChannel} 채널 메시지입니다.` },
        { id: 2, userName: 'User2', text: '여기에 메시지를 추가하세요.' }
      ]);
    } else if (activeDM) {
      // 활성 다이렉트 메시지가 있을 때의 더미 메시지
      setMessages([
        { id: 1, userName: 'User1', text: `${activeDM} DM 메시지입니다.` },
        { id: 2, userName: 'User3', text: '여기에 메시지를 추가하세요.' }
      ]);
    }
    scrollToBottom(); // 메시지를 업데이트한 후 스크롤 이동
  }, [activeChannel, activeDM]); // activeChannel 또는 activeDM이 변경될 때 실행

  // 메시지 상태가 변경될 때마다 스크롤을 마지막 메시지로 이동
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // messages 상태가 업데이트될 때 실행

  // 메시지를 전송하는 함수
  const sendMessage = (content, attachedFiles) => {
    const newMessage = {
      id: Date.now(), // 고유 메시지 ID로 현재 시간 사용
      userName: 'User3', // 메시지를 보낸 사용자 이름
      text: content || '', // 메시지 텍스트
      status: 'online', // 상태 (기본값: online)
      time: new Date(), // 현재 시간을 메시지의 전송 시간으로 사용
      isRead: false, // 메시지 읽음 여부
      files: attachedFiles || [] // 첨부된 파일 목록 (기본값: 빈 배열)
    };

    // 이전 메시지 목록에 새 메시지를 추가
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // 특정 메시지를 편집하는 함수
  const handleEditMessage = (messageId, newText) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId ? { ...message, text: newText } : message
      )
    );
  };

  // 특정 메시지를 삭제하는 함수
  const handleDeleteMessage = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  // 반환값: 메시지 데이터, 메시지 관련 함수들, 메시지 끝 참조
  return {
    messages, // 메시지 목록
    sendMessage, // 메시지 전송 함수
    handleEditMessage, // 메시지 편집 함수
    handleDeleteMessage, // 메시지 삭제 함수
    messagesEndRef // 마지막 메시지 참조
  };
};
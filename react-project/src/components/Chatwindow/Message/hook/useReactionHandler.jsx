import { useState } from 'react'; // React의 상태 관리를 위한 useState Hook

// useReactionHandler: 메시지에 대한 리액션 상태를 관리하는 커스텀 훅
export const useReactionHandler = (initialReactions, onReaction, messageId) => {
  const [reactions, setReactions] = useState(initialReactions || {}); // 리액션 데이터를 관리하는 상태

  // 리액션 버튼 클릭 시 실행되는 함수
  const handleReactionClick = (reaction) => {
    const updatedReactions = { ...reactions }; // 기존 리액션 상태 복사
    updatedReactions[reaction] = (updatedReactions[reaction] || 0) + 1; // 해당 리액션 카운트 증가
    setReactions(updatedReactions); // 상태 업데이트

    // 콜백 함수가 전달되었을 경우 실행
    if (onReaction) onReaction(messageId, updatedReactions);
  };

  // 반환값: 리액션 상태와 리액션 클릭 핸들러
  return { reactions, handleReactionClick };
};

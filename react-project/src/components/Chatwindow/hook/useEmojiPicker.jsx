import { useState, useRef } from 'react'; // React의 상태 관리와 DOM 참조를 위한 Hook
import { useClickOutside } from './useClickOutside'; // 외부 클릭 감지를 위한 커스텀 훅

export const useEmojiPicker = (setInput) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // 이모지 선택기 표시 여부를 관리하는 상태
  const emojiPickerRef = useRef(null); // 이모지 선택기 DOM 요소를 참조하기 위한 ref

  // 이모지 선택기 표시/숨기기 상태를 토글하는 함수
  const toggleEmojiPicker = () => setShowEmojiPicker((prev) => !prev);

  // 이모지를 입력에 추가하는 함수
  const addEmoji = (emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setInput((prev) => prev + emojiObject.emoji); // 선택된 이모지를 기존 입력에 추가
    }
  };

  // 이모지 선택기 외부를 클릭했을 때 닫히도록 useClickOutside 훅 사용
  useClickOutside(emojiPickerRef, () => setShowEmojiPicker(false));

  // 반환값: 이모지 선택기 상태 및 제어 함수들
  return {
    showEmojiPicker, // 이모지 선택기 표시 상태
    toggleEmojiPicker, // 이모지 선택기 토글 함수
    addEmoji, // 이모지 추가 함수
    emojiPickerRef // 이모지 선택기 DOM 참조
  };
};
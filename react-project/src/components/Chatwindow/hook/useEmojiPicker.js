import { useState, useRef } from 'react';
import { useClickOutside } from './useClickOutside'; // 이미 존재하는 훅 사용

export const useEmojiPicker = (setInput) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const toggleEmojiPicker = () => setShowEmojiPicker((prev) => !prev);

  const addEmoji = (emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setInput((prev) => prev + emojiObject.emoji);
    }
  };

  useClickOutside(emojiPickerRef, () => setShowEmojiPicker(false));

  return { showEmojiPicker, toggleEmojiPicker, addEmoji, emojiPickerRef };
};

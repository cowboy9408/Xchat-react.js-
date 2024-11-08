import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiTestComponent = () => {
  const [input, setInput] = useState('');

  const handleEmojiClick = (event, emojiObject) => {
    console.log("선택된 이모티콘:", emojiObject);  // 선택된 이모티콘 값 확인
    setInput(input + emojiObject.emoji);  // 이모티콘을 입력창에 추가
  };

  return (
    <div>
      <h3>이모티콘 선택 테스트</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="이모티콘을 선택하세요"
      />
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
};

export default EmojiTestComponent;

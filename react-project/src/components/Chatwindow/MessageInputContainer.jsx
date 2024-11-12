import React from 'react';
import { FaPaperclip, FaSmile, FaPaperPlane, FaTimes } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import { useEmojiPicker } from './hook/useEmojiPicker';
import { useFileUpload } from './hook/useFileUpload';
import {
  MessageInputContainer,
  InputWrapper,
  TextInput,
  IconWrapper,
  IconButton,
  SendButton,
  FileInput,
  PreviewContainer,
  PreviewImage,
  PreviewWrapper,
  RemovePreview
} from './style/MessageInputContainerStyle';

const MessageInput = ({ input, setInput, sendMessage, setFiles }) => {
  const { showEmojiPicker, toggleEmojiPicker, addEmoji, emojiPickerRef } = useEmojiPicker(setInput);
  const { files, handleFileChange, removePreview, getFileIcon, resetFilePreviews } = useFileUpload(setFiles);

  const handleSendMessage = () => {
    if (!input.trim() && files.length === 0) return;
    sendMessage(input, files);
    setInput('');  // 입력창 초기화
    setFiles([]);  // 파일 리스트 초기화
    resetFilePreviews();  // 미리보기 초기화
  };

  return (
    <div>
      {files.length > 0 && (
        <PreviewContainer>
          {files.map((file, index) => (
            <PreviewWrapper key={index}>
              {file.type === 'image' ? (
                <PreviewImage src={file.url} alt="Image preview" />
              ) : (
                <img src={getFileIcon(file.name)} alt={file.name} style={{ width: '50px', height: '50px' }} />
              )}
              <RemovePreview onClick={() => removePreview(index)}>
                <FaTimes />
              </RemovePreview>
            </PreviewWrapper>
          ))}
        </PreviewContainer>
      )}

      {showEmojiPicker && (
        <div ref={emojiPickerRef}>
          <EmojiPicker onEmojiClick={addEmoji} />
        </div>
      )}

      <MessageInputContainer>
        <InputWrapper>
          <IconWrapper>
            <IconButton onClick={toggleEmojiPicker}>
              <FaSmile />
            </IconButton>
            <IconButton as="label" htmlFor="file-upload">
              <FaPaperclip />
            </IconButton>
            <FileInput
              id="file-upload"
              type="file"
              accept="image/*, .pdf, .docx, .xlsx, .txt"
              multiple
              onChange={handleFileChange}
            />
          </IconWrapper>
          <TextInput
            type="text"
            placeholder="메시지를 입력하세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage}>
            <FaPaperPlane />
          </SendButton>
        </InputWrapper>
      </MessageInputContainer>
    </div>
  );
};

export default MessageInput;

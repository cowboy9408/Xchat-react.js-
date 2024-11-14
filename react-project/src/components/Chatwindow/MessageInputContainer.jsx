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
  // 이모지 선택기 관련 상태와 기능을 커스텀 훅에서 가져옴
  const { showEmojiPicker, toggleEmojiPicker, addEmoji, emojiPickerRef } = useEmojiPicker(setInput);
  // 파일 업로드 관련 상태와 기능을 커스텀 훅에서 가져옴
  const { files, handleFileChange, removePreview, getFileIcon, resetFilePreviews } = useFileUpload(setFiles);

  const handleSendMessage = () => {
    // 입력된 메시지나 첨부 파일이 없을 경우 전송하지 않음
    if (!input.trim() && files.length === 0) return;
    sendMessage(input, files); // 메시지와 파일을 전송
    setInput('');  // 입력창 초기화
    setFiles([]);  // 파일 리스트 초기화
    resetFilePreviews();  // 미리보기 초기화
  };

  return (
    <div>
      {files.length > 0 && ( // 첨부 파일이 있을 경우 미리보기 렌더링
        <PreviewContainer>
          {files.map((file, index) => (
            <PreviewWrapper key={index}>
              {file.type === 'image' ? ( // 이미지 파일인 경우 미리보기 이미지 표시
                <PreviewImage src={file.url} alt="Image preview" />
              ) : ( // 이미지가 아닌 파일은 파일 아이콘 표시
                <img src={getFileIcon(file.name)} alt={file.name} style={{ width: '50px', height: '50px' }} />
              )}
              <RemovePreview onClick={() => removePreview(index)}> 
                <FaTimes />
              </RemovePreview>
            </PreviewWrapper>
          ))}
        </PreviewContainer>
      )}

      {showEmojiPicker && ( // 이모지 선택기 표시 여부
        <div ref={emojiPickerRef}>
          <EmojiPicker onEmojiClick={addEmoji} /> {/* 이모지 선택 시 addEmoji 함수 호출 */}
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
              onChange={handleFileChange} // 파일 변경 시 handleFileChange 함수 호출
            />
          </IconWrapper>
          <TextInput
            type="text"
            placeholder="메시지를 입력하세요."
            value={input} // 현재 입력 값을 표시
            onChange={(e) => setInput(e.target.value)} // 입력값 변경 시 setInput 함수 호출
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // 엔터키로 메시지 전송
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

import React from 'react';
import { TextContent, ImageContent, Link } from './style/MessageContentStyle';

// 파일 아이콘 매핑
const fileIcons = {
  pdf: "../assets/icons/free-icon-pdf-4726010.png",
  docx: "../assets/icons/docx-file.png",
  xlsx: "../assets/icons/free-icon-xls-4726040.png",
  txt: "../assets/icons/free-icon-txt-4726030.png",
  default: "../assets/icons/docx-file.png",
  ppt: "../assets/icons/free-icon-ppt-4726016.png"
};

const getFileIcon = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();
  return fileIcons[extension] || fileIcons.default;
};

// 링크를 자동으로 감지하는 함수
const convertLinks = (text) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part, index) =>
    urlPattern.test(part) ? (
      <Link key={index} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </Link>
    ) : (
      part
    )
  );
};

const MessageContent = ({ text, imageUrl, files }) => {
  return (
    <div>
      {text && <TextContent>{convertLinks(text)}</TextContent>}  {/* 텍스트 렌더링 */}
      {imageUrl && <ImageContent src={imageUrl} alt="Sent image" />}  {/* 이미지 렌더링 */}

      {files && files.length > 0 && (
        <>
          {files.map((file, index) => (
            <div key={index}>
              {file.type === 'image' ? (
                <ImageContent src={file.url} alt={file.name} /> 
              ) : (
                <div>
                  <img src={getFileIcon(file.name)} alt={file.name} style={{ width: '50px', height: '50px' }} />
                  <p>{file.name}</p>  {/* 파일 이름 표시 */}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MessageContent;
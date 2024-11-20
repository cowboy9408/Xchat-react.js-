import { useState } from 'react'; // React의 상태 관리를 위한 useState Hook

export const useFileUpload = (setFiles) => {
  const [files, setFilePreviews] = useState([]); // 파일 목록 및 미리보기를 관리하는 상태

  // 파일이 이미지인지 확인하는 함수
  const isImageFile = (file) => {
    const extension = file.name.split('.').pop().toLowerCase(); // 파일 확장자를 추출
    return (
      file.type.startsWith('image/') || // MIME 타입으로 이미지 파일인지 확인
      ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extension) // 확장자로 이미지 여부 확인
    );
  };

  // 파일 이름에 따라 적절한 아이콘 경로를 반환하는 함수
  const getFileIcon = (fileName) => {
    const fileIcons = {
      pdf: "../assets/icons/free-icon-pdf-4726010.png",
      docx: "../assets/icons/docx-file.png",
      xlsx: "../assets/icons/free-icon-xls-4726040.png",
      txt: "../assets/icons/free-icon-txt-4726030.png",
      ppt: "../assets/icons/free-icon-ppt-4726016.png",
      default: "../assets/icons/docx-file.png", // 기본 아이콘
    };

    const extension = fileName.split('.').pop().toLowerCase(); // 파일 확장자를 추출
    return fileIcons[extension] || fileIcons.default; // 확장자에 맞는 아이콘 또는 기본 아이콘 반환
  };

  // 파일이 변경되었을 때 실행되는 핸들러
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // 업로드된 파일을 배열로 변환
    const newPreviews = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file), // 미리보기 URL 생성
      type: isImageFile(file) ? 'image' : 'file', // 파일 타입: 이미지 또는 일반 파일
      name: file.name, // 파일 이름
    }));

    setFilePreviews((prev) => [...prev, ...newPreviews]); // 내부 상태 업데이트
    setFiles((prev) => [...prev, ...selectedFiles]); // 외부 상태 업데이트
    e.target.value = null; // 파일 입력 필드 초기화
  };

  // 특정 파일 미리보기를 삭제하는 함수
  const removePreview = (index) => {
    const updatedPreviews = files.filter((_, i) => i !== index); // 지정된 인덱스를 제외한 파일 목록 생성
    setFilePreviews(updatedPreviews); // 내부 상태 업데이트
    setFiles(updatedPreviews); // 외부 상태 업데이트
  };

  // 파일 미리보기를 초기화하는 함수
  const resetFilePreviews = () => {
    setFilePreviews([]); // 미리보기 상태 초기화
  };

  // 반환값: 파일 상태와 제어 함수들
  return {
    files, // 업로드된 파일 목록
    handleFileChange, // 파일 변경 핸들러
    removePreview, // 미리보기 삭제 함수
    getFileIcon, // 파일 아이콘 반환 함수
    resetFilePreviews, // 미리보기 초기화 함수
  };
};
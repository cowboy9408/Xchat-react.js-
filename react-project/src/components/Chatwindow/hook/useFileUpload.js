import { useState } from 'react';

export const useFileUpload = (setFiles) => {
  const [files, setFilePreviews] = useState([]);

  const isImageFile = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    return file.type.startsWith('image/') || ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extension);
  };

  const getFileIcon = (fileName) => {
    const fileIcons = {
      pdf: "../assets/icons/free-icon-pdf-4726010.png",
      docx: "../assets/icons/docx-file.png",
      xlsx: "../assets/icons/free-icon-xls-4726040.png",
      txt: "../assets/icons/free-icon-txt-4726030.png",
      ppt: "../assets/icons/free-icon-ppt-4726016.png",
      default: "../assets/icons/docx-file.png"
    };
    const extension = fileName.split('.').pop().toLowerCase();
    return fileIcons[extension] || fileIcons.default;
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newPreviews = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      type: isImageFile(file) ? 'image' : 'file',
      name: file.name
    }));
    setFilePreviews((prev) => [...prev, ...newPreviews]);
    setFiles((prev) => [...prev, ...selectedFiles]);
    e.target.value = null;
  };

  const removePreview = (index) => {
    const updatedPreviews = files.filter((_, i) => i !== index);
    setFilePreviews(updatedPreviews);
    setFiles(updatedPreviews);
  };

  // 미리보기를 초기화하는 함수
  const resetFilePreviews = () => {
    setFilePreviews([]);
  };

  return { files, handleFileChange, removePreview, getFileIcon, resetFilePreviews };
};

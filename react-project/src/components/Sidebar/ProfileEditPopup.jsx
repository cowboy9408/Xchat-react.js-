import React, { useState } from 'react';
import axios from 'axios';  // 서버와 통신하기 위해 추가
import {
  PopupContainer,
  PopupHeader,
  PopupContent,
  PopupInput,
  SaveButton,
  CancelButton,
  AvatarWrapper,
  AvatarImage,
  CameraIcon,
  DropdownSelect
} from './style/ProfileEditPopupStyle';
import { useUserStatus } from './hooks/useUserStatus';  // 상태 변경 훅 사용

// ProfileEditPopup 컴포넌트: 사용자 프로필 편집을 위한 팝업창 제공
const ProfileEditPopup = ({ username, userTag, avatarUrl, onClose }) => {
  const [newUsername, setNewUsername] = useState(username);  // 사용자 이름 상태
  const [newAvatarUrl, setNewAvatarUrl] = useState(avatarUrl);  // 아바타 URL 상태
  const { status, handleStatusChange } = useUserStatus();  // 사용자 상태 관리

  // 프로필 저장 함수: 변경 사항을 서버에 전송
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('username', newUsername);
      formData.append('avatarUrl', newAvatarUrl);  // 파일일 경우 서버에서 처리 필요
      formData.append('status', status);
      
      await axios.post('/api/profile/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      console.log('프로필 저장:', newUsername, newAvatarUrl, status);
      onClose();  // 저장 후 팝업 닫기
    } catch (error) {
      console.error("프로필 저장 오류:", error);
      alert("프로필 저장 중 문제가 발생했습니다.");
    }
  };

  return (
    <PopupContainer>
      <PopupHeader>프로필 편집</PopupHeader>
      <PopupContent>
        {/* 프로필 사진 변경 기능 */}
        <AvatarWrapper>
          <AvatarImage src={newAvatarUrl} alt="프로필 사진" />
          <CameraIcon />
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => setNewAvatarUrl(URL.createObjectURL(e.target.files[0]))}  // 파일 선택 후 미리보기 업데이트
            id="avatar-upload"
          />
        </AvatarWrapper>
        
        {/* 사용자 이름 입력란 */}
        <PopupInput
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="사용자 이름"
        />

        {/* 사용자 태그 표시: 수정 불가 */}
        <PopupInput
          type="text"
          value={`#${userTag}`}
          disabled
        />

        {/* 상태 선택 드롭다운 메뉴 */}
        <DropdownSelect value={status} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="online">온라인</option>
          <option value="away">자리비움</option>
          <option value="offline">오프라인</option>
        </DropdownSelect>
      </PopupContent>
      <div>
        <SaveButton onClick={handleSave}>저장</SaveButton>
        <CancelButton onClick={onClose}>취소</CancelButton>
      </div>
    </PopupContainer>
  );
};

export default ProfileEditPopup;

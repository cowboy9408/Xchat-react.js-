import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { useDropdown } from './hooks/useDropdown';
import { useUserStatus } from './hooks/useUserStatus';
import {
  ProfileContainer,
  Avatar,
  StatusIcon,
  UserInfo,
  Username,
  UserTag,
  InteractionIcons,
  IconButton,
  DropdownMenu,
  DropdownItem,
} from './style/ProfileSectionStyle';

import ProfileEditPopup from './ProfileEditPopup';  // 프로필 편집 팝업 컴포넌트

// ProfileSection 컴포넌트: 사용자 프로필 섹션을 표시하며 상태 변경과 편집 기능 제공
const ProfileSection = ({ avatarUrl, username, userTag }) => {
  const { dropdownVisible, toggleDropdown, dropdownRef } = useDropdown();  // 드롭다운 표시 상태 및 함수
  const { status, handleStatusChange, handleLogout } = useUserStatus();  // 사용자 상태 및 로그아웃 관리
  const [isEditing, setIsEditing] = useState(false);  // 프로필 편집 상태 관리

  // 프로필 편집 창 열기
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  // 프로필 편집 창 닫기
  const handleClosePopup = () => {
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      {/* 아바타 클릭 시 프로필 편집 창을 열기 */}
      <Avatar avatarUrl={avatarUrl} onClick={handleEditProfile}>
        <StatusIcon status={status} />  {/* 현재 상태를 나타내는 아이콘 */}
      </Avatar>
      <UserInfo>
        <Username>{username}</Username>
        <UserTag>#{userTag}</UserTag>
      </UserInfo>
      <InteractionIcons>
        {/* 설정 아이콘 클릭 시 드롭다운 표시 */}
        <IconButton onClick={toggleDropdown}>
          <FaCog />
        </IconButton>
        {dropdownVisible && (
          <DropdownMenu ref={dropdownRef}>
            <DropdownItem onClick={() => handleStatusChange('online')}>온라인</DropdownItem>
            <DropdownItem onClick={() => handleStatusChange('away')}>자리비움</DropdownItem>
            <DropdownItem onClick={() => handleStatusChange('offline')}>오프라인</DropdownItem>
            <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
            <DropdownItem onClick={handleEditProfile}>프로필 편집</DropdownItem>  {/* 프로필 편집 옵션 */}
          </DropdownMenu>
        )}
      </InteractionIcons>

      {/* 프로필 편집 팝업: isEditing이 true일 때만 표시 */}
      {isEditing && (
        <ProfileEditPopup
          username={username}
          userTag={userTag}
          avatarUrl={avatarUrl}
          onClose={handleClosePopup}  // 팝업 닫기 함수 전달
        />
      )}
    </ProfileContainer>
  );
};

export default ProfileSection;

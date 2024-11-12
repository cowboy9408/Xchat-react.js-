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

const ProfileSection = ({ avatarUrl, username, userTag }) => {
  const { dropdownVisible, toggleDropdown, dropdownRef } = useDropdown();
  const { status, handleStatusChange, handleLogout } = useUserStatus();
  const [isEditing, setIsEditing] = useState(false);  // 프로필 편집 상태 관리

  const handleEditProfile = () => {
    setIsEditing(true);  // 프로필 편집 팝업 열기
  };

  const handleClosePopup = () => {
    setIsEditing(false);  // 프로필 편집 팝업 닫기
  };

  return (
    <ProfileContainer>
      {/* 아바타 클릭 시 프로필 편집 창 열기 */}
      <Avatar avatarUrl={avatarUrl} onClick={handleEditProfile}>
        <StatusIcon status={status} />
      </Avatar>
      <UserInfo>
        <Username>{username}</Username>
        <UserTag>#{userTag}</UserTag>
      </UserInfo>
      <InteractionIcons>
        <IconButton onClick={toggleDropdown}>
          <FaCog />
        </IconButton>
        {dropdownVisible && (
          <DropdownMenu ref={dropdownRef}>
            <DropdownItem onClick={() => handleStatusChange('online')}>온라인</DropdownItem>
            <DropdownItem onClick={() => handleStatusChange('away')}>자리비움</DropdownItem>
            <DropdownItem onClick={() => handleStatusChange('offline')}>오프라인</DropdownItem>
            <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
            <DropdownItem onClick={handleEditProfile}>프로필 편집</DropdownItem>  {/* 기존 프로필 편집 */}
          </DropdownMenu>
        )}
      </InteractionIcons>

      {/* 프로필 편집 팝업 */}
      {isEditing && (
        <ProfileEditPopup
          username={username}
          userTag={userTag}
          avatarUrl={avatarUrl}
          onClose={handleClosePopup}
        />
      )}
    </ProfileContainer>
  );
};

export default ProfileSection;

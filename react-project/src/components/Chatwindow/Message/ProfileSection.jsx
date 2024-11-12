import React from 'react';
import styled from 'styled-components';


const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row; /* 가로로 정렬 */
  width: auto; /* 너비 자동 조정 */
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-size: cover;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === 'online' ? '#43B581' :
    status === 'offline' ? '#747F8D' :
    '#F39C12'};
  border: 2px solid white;
`;

const UserName = styled.span`
  margin-left: 10px; /* 프로필 이미지와 이름 간격 조정 */
  font-size: 12px;
  color: #f0f0f0;
`;

const ProfileSection = ({ avatarUrl, userName, status }) => {
  return (
    <ProfileContainer>
      <Avatar avatarUrl={avatarUrl}>
        <StatusIndicator status={status} />
      </Avatar>
      <UserName>{userName}</UserName>
    </ProfileContainer>
  );
};

export default ProfileSection;

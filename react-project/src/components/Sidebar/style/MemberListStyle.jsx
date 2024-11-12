import styled from 'styled-components';

export const MemberListContainer = styled.div`
  margin-top: 10px;
`;

export const SectionTitle = styled.h4`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const MemberAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  margin-right: 8px;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-size: cover;
  background-position: center;
`;

export const RoleLabel = styled.div`
  background-color: ${({ isAdmin }) => (isAdmin ? '#FFD700' : '#B0C4DE')};
  color: black;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.7rem;
  margin-left: 10px;
`;

export const ProfilePopup = styled.div`
  position: fixed;
  top: ${({ top }) => top}px;
  left: 300px;
  width: 250px;
  background-color: #2C2F33;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 100;
  color: white;
`;

export const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PopupOption = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  color: #FFFFFF;

  &:hover {
    background-color: #7289DA;
  }
`;
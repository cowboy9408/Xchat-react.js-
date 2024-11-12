import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  position: relative;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-size: cover;
  border-radius: 50%;
  position: relative;
  cursor: pointer;  // 아바타에 커서를 올렸을 때 클릭 가능한 표시 추가
`;

export const StatusIcon = styled(FaCircle)`
  position: absolute;
  right: -5px;
  bottom: -5px;
  font-size: 0.9rem;
  color: ${({ status, theme }) => 
    status === 'online' ? theme.statusColors.online : 
    status === 'offline' ? theme.statusColors.offline : 
    status === 'away' ? theme.statusColors.away : 
    theme.statusColors.offline};
  background-color: white;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.cardBackground};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;

export const Username = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const UserTag = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.mutedText};
`;

export const InteractionIcons = styled.div`
  margin-left: auto;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.mutedText};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  bottom: 50px;
  right: 15px;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 8px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
  }
`;

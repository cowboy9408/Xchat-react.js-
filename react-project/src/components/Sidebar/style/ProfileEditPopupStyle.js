import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 25px;  // 패딩을 줄여 크기를 축소
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);  // 그림자를 약간 줄임
  width: 360px;  // 전체 너비 축소
  z-index: 1000;
`;

export const PopupHeader = styled.h2`
  margin-bottom: 15px;  // 간격 축소
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 1.25rem;  // 폰트 크기 축소
  font-weight: bold;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;  // 요소 사이의 간격 축소
  align-items: center;
`;

export const PopupInput = styled.input`
  width: 100%;
  padding: 10px;  // 패딩 축소
  border: 1px solid ${({ theme }) => theme.mutedText};
  border-radius: 6px;  // 둥글기를 조금 줄임
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;  // 폰트 크기 축소
  transition: border-color 0.2s ease;

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const SaveButton = styled.button`
  width: 50%;
  padding: 10px;  // 버튼 패딩 축소
  background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 6px;  // 둥글기 조정
  font-size: 0.9rem;  // 폰트 크기 축소
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.accentHover}, ${({ theme }) => theme.accent});
  }
`;

export const CancelButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: ${({ theme }) => theme.mutedText};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;  // 폰트 크기 축소
  cursor: pointer;
  margin-top: 15px;  // 간격 축소

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 90px;  // 크기 축소
  height: 90px;
  margin-bottom: 15px;  // 간격 축소
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);  // 그림자 축소
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CameraIcon = styled(FaCamera)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 50%;
  padding: 5px;  // 패딩 축소
  font-size: 1rem;  // 아이콘 크기 축소
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;

export const DropdownSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 6px;  // 둥글기 조정
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.mutedText};
  font-size: 0.9rem;  // 폰트 크기 축소
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
  }
`;

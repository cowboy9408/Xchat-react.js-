import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SidebarLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  margin-right: 0;  // 사이드바와 탭 사이의 여백을 없앰
`;

export const SidebarTabs = styled.div`
  display: flex;
  flex-direction: column;  // 탭 버튼들이 수직으로 나열되도록 설정
  align-items: center;  // 가로 중앙 정렬
  width: 80px;  // 탭의 너비
  background-color: ${({ theme }) => theme.sidebarBackground};
  margin-right: -10px;  // 사이드바와 탭 간의 간격 조정
  padding-top: 10px;  // 상단에 고정된 상태로 여백을 추가
  height: auto;  // 높이를 자동으로 설정하여 더 이상 세로 중앙 정렬을 강제하지 않음
`;

export const SidebarContainer = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.body};  // 사이드바 배경색
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: none;  // box-shadow 제거
  border: none;  // 경계선 제거
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.mutedText};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 8px ${({ theme }) => theme.accent};
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
  }
`;
export const EmptyStateMessage = styled.div`
  color: #a0a0a0; /* 회색 톤 */
  font-size: 14px;
  text-align: center;
  margin: 20px 0;
`;


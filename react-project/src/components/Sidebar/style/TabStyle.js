import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.sidebarBackground};
`;

export const TabButton = styled.button`
  background-color: ${({ isActive, theme }) => (isActive ? theme.accent : theme.body)};
  border: none;
  cursor: pointer;
  width: 60px;  // 버튼 크기를 줄여 아이콘만 들어가게 조정
  height: 60px;  // 동일한 높이로 설정해 버튼을 정사각형으로 만듦
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  position:relative;
  bottom:20px;
  font-size: 1.8rem;
  border-radius: 10px;  // 둥근 모서리로 고급스러움 추가
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;  // 부드러운 전환 효과 추가

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);  // hover 시 살짝 떠오르는 느낌 추가
  }

  &:active {
    transform: translateY(0);  // 클릭 시 다시 제자리로 돌아옴
  }

  /* 그림자 효과 추가 */
  box-shadow: ${({ isActive }) => (isActive ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none')};
`;


export const Badge = styled.div`
  background-color: red;
  color: white;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 3px 6px;
  font-weight: bold;
  position: absolute;
  bottom:65px;
  right: 5px;
  display: ${({ unread }) => (unread > 0 ? 'inline-block' : 'none')};
`;
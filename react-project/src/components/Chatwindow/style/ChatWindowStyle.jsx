import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.body};
  height: 100vh;
  overflow: hidden;
`;

export const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.accent} ${({ theme }) => theme.body};
`;
export const DateDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 부모 컨테이너의 전체 폭 */
  margin: 20px 0; /* 위아래 간격 */
  font-size: 12px; /* 텍스트 크기 */
  font-weight: 500; /* Slack 유사 텍스트 두께 */
  color: #6b7280; /* 중간 회색 */

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #d1d5db; /* 구분선 색상 */
    margin: 0 10px; /* 텍스트와 구분선 간격 */
  }
`;
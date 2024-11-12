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

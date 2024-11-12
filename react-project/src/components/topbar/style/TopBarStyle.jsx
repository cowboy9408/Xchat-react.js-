import styled, { createGlobalStyle } from 'styled-components';  // createGlobalStyle 추가

export const TopBarContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

export const ChannelTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
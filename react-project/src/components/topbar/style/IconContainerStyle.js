import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
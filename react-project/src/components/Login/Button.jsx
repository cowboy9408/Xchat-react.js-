import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

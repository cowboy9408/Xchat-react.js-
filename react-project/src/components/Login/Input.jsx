import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 8px ${({ theme }) => theme.accent};
    outline: none;
  }
`;

const Input = ({ type, placeholder, value, onChange }) => (
  <StyledInput
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;

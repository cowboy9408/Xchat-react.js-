import React from 'react';
import styled, { css } from 'styled-components';
import { slideIn, slideOut } from './style/animations'; // 애니메이션을 분리

const FormContainer = styled.div`
  ${({ isActive }) => isActive && css`
    animation: ${slideIn} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    position: relative;
  `}
  ${({ isActive }) => !isActive && css`
    animation: ${slideOut} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    position: absolute;
    z-index: -1;
  `}
`;

const Form = ({ children, isActive }) => (
  <FormContainer isActive={isActive}>{children}</FormContainer>
);

export default Form;

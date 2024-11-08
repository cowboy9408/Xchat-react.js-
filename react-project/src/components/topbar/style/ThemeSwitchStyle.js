import styled from 'styled-components';

// 스위치 스타일
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 18px;
  margin-left: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.accent};
    transition: 0.4s;
    border-radius: 20px;

    &:before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.accent};

    &:before {
      transform: translateX(16px);
    }
  }
`;
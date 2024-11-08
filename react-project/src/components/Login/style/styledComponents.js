import styled from 'styled-components';
import { BackgroundAnimation, fadeIn } from './animations';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/5096160.jpg') no-repeat center center fixed;
  background-size: cover;
  animation: ${BackgroundAnimation} 30s linear infinite;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 60px 50px;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  backdrop-filter: blur(20px) saturate(150%);
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  animation: ${fadeIn} 1.2s ease-out;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
`;

export const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SwitchLabel = styled.label`
  width: 40px;
  height: 20px;
  background-color: ${({ checked, theme }) => (checked ? theme.accent : theme.mutedText)};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  top:-10px;
  transition: background-color 0.3s ease;
`;

export const SwitchButton = styled.span`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '20px' : '2px')};
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
`;

export const ToggleTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;

import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.9);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0);
  }
`;

export const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%) scale(0.9);
    filter: blur(8px);
  }
`;

export const BackgroundAnimation = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

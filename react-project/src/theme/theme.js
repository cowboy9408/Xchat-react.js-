import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#1e1e1e',  // 배경 색상
  text: '#ffffff',  // 텍스트 색상
  accent: '#7289da',  // 포커스 및 강조 색상
  accentHover: '#677bc4',  // 마우스 호버 시 색상
  mutedText: '#b9bbbe',  // 보조 텍스트 색상
  cardBackground: '#2f3136',  // 카드의 배경 색상
  statusColors: {
    online: '#43B581',
    offline: '#747F8D',
    away: '#F39C12',
  }
};

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; // 레이아웃 깨짐 방지
}

 body {
   background: ${({ theme }) => theme.body};
    console.log('Current theme:', theme); // 디버깅 로그 추가
   color: ${({ theme }) => theme.text};
   transition: all 0.50s linear;
   font-family: 'Montserrat', sans-serif;
   /* 스크롤바 스타일 추가 */
   overflow-y: auto;
 }

 ::-webkit-scrollbar {
   width: 8px;
 }

 ::-webkit-scrollbar-track {
   background: ${({ theme }) => theme.body}; /* 스크롤바 트랙 색상 */
 }

 ::-webkit-scrollbar-thumb {
   background-color: ${({ theme }) => theme.accent}; /* 스크롤바 색상 */
   border-radius: 10px;
   border: 2px solid ${({ theme }) => theme.body}; /* 테두리와 간격 */
 }

 ::-webkit-scrollbar-thumb:hover {
   background-color: ${({ theme }) => theme.accentHover}; /* 호버 시 색상 변경 */
 }
`;

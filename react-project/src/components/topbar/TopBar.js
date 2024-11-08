import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { TopBarContainer, ChannelTitle, GlobalStyle } from './style/TopBarStyle';  // 분리한 스타일 불러오기
import IconContainer from './IconContainer';  // 아이콘 컨테이너
import ThemeSwitch from './ThemeSwitch';  // 테마 스위치

// 라이트 테마와 다크 테마 설정
const lightTheme = {
  background: '#ffffff',
  text: '#2d2d2d',
  accent: '#007BFF',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  background: '#1e1e1e',
  text: '#f5f5f5',
  accent: '#f39c12',
  shadow: 'rgba(0, 0, 0, 0.3)',
};

// TopBar 컴포넌트 (동적 채널 및 DM 이름 표시)
const TopBar = ({ title }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle /> {/* 전체 애플리케이션에 테마 적용 */}
        <TopBarContainer>
          {/* 선택된 채널 또는 DM의 이름을 동적으로 표시 */}
          <ChannelTitle>{title}</ChannelTitle>
          
          {/* 알림 및 설정 아이콘 */}
          <IconContainer>
            <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
          </IconContainer>
        </TopBarContainer>
      </>
    </ThemeProvider>
  );
};

export default TopBar;
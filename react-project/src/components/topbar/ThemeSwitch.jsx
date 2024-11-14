import React from 'react';
import { Switch } from './style/ThemeSwitchStyle';  // 분리된 스타일 불러오기

const ThemeSwitch = ({ toggleTheme, theme }) => {
  return (
    <Switch>
      {/* 체크박스: 선택 시 toggleTheme 함수를 호출하여 테마 전환 */}
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      {/* 스위치 스타일을 위해 빈 span 요소 사용 */}
      <span />
    </Switch>
  );
};

export default ThemeSwitch;
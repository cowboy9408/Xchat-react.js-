import React from 'react';
import { Switch } from './style/ThemeSwitchStyle';  // 분리된 스타일 불러오기

const ThemeSwitch = ({ toggleTheme, theme }) => {
  return (
    <Switch>
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span />
    </Switch>
  );
};

export default ThemeSwitch;
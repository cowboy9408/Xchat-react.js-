import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles } from '../../theme/theme';
import useAuth from '../../components/Login/hooks/useAuth';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import {
  LoginContainer,
  FormWrapper,
  Title,
  ToggleSwitchContainer,
  SwitchLabel,
  SwitchButton,
  ToggleTextContainer
} from './style/styledComponents';

const LoginComponent = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const { handleLogin, handleSignup } = useAuth();  // 서버와 통신할 훅 사용

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <LoginContainer>
        <FormWrapper>
          <Title>{isSignup ? 'Sign Up' : 'Log In'}</Title>

          {/* 로그인 폼 */}
          {!isSignup && (
            <Form isActive={!isSignup}>
              <Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={() => handleLogin(email, password)}>Log In</Button>
            </Form>
          )}

          {/* 회원가입 폼 */}
          {isSignup && (
            <Form isActive={isSignup}>
              <Input
                type="text"
                placeholder="이름"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={() => handleSignup(email, password, fullName)}>Sign Up</Button>
            </Form>
          )}

          {/* 폼 전환 스위치 */}
          <ToggleTextContainer>
            <div style={{ marginRight: '10px', verticalAlign: 'middle' }}>
              {isSignup ? '이미 회원이신가요? →' : '계정이 없으신가요? →'}
            </div>
            <ToggleSwitchContainer>
              <SwitchLabel checked={isSignup} onClick={toggleForm}>
                <SwitchButton checked={isSignup} />
              </SwitchLabel>
            </ToggleSwitchContainer>
          </ToggleTextContainer>
        </FormWrapper>
      </LoginContainer>
    </ThemeProvider>
  );
};

export default LoginComponent;

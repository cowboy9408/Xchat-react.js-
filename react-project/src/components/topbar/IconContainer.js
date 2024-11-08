import React from 'react';
import { Container, Icon } from './style/IconContainerStyle';  // 분리된 스타일 불러오기

const IconContainer = ({ children, notificationCount }) => {
  return (
    <Container>
      <Icon>🔔</Icon>
      {notificationCount > 0 && <span>{notificationCount}</span>}  {/* 알림 개수 표시 */}
      <Icon>⚙️</Icon>
      {children}
    </Container>
  );
};

export default IconContainer;
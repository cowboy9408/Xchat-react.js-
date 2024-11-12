import React from 'react';
import styled from 'styled-components';

const Status = styled.span`
  font-size: 0.75rem;
  color: ${({ isRead }) => (isRead ? 'green' : 'gray')};
`;

const ReadStatus = ({ isRead }) => {
  return <Status>{isRead ? '읽음' : '안읽음'}</Status>;
};

export default ReadStatus;

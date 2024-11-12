import React from 'react';
import styled from 'styled-components';

const Time = styled.span`
  font-size: 0.75rem;
  color: gray;
`;

const MessageTime = ({ time }) => {
  // 시간을 시간:분 형식으로 변환
  const formattedTime = new Date(time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return <Time>{formattedTime}</Time>;
};

export default MessageTime;

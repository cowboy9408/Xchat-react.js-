import { useState, useEffect } from 'react';

// 커스텀 훅 useChannelMessages: 특정 채널의 메시지를 가져오고 관리하는 기능을 제공
export const useChannelMessages = (channelId) => {
  // 상태 변수: 채널 메시지 데이터를 저장
  const [channelMessages, setChannelMessages] = useState([]);

  useEffect(() => {
    // 비동기 함수: 채널 메시지를 서버에서 가져오는 역할
    const fetchMessages = async () => {
      try {
        // 서버 API 호출: 주어진 channelId를 사용하여 메시지 가져오기
        const response = await fetch(`/api/channels/${channelId}/messages`);
        // API에서 반환된 데이터를 JSON 형식으로 파싱
        const data = await response.json();
        // 상태 변수 업데이트: 가져온 메시지 데이터를 설정
        setChannelMessages(data);
      } catch (error) {
        // 에러 처리: 메시지를 가져오는 도중 발생한 에러를 콘솔에 출력
        console.error('Error fetching messages:', error);
      }
    };

    // 메시지 가져오기 함수 호출
    fetchMessages();
  }, [channelId]); // channelId가 변경될 때마다 useEffect 재실행

  // 현재 상태로 유지된 채널 메시지 데이터를 반환
  return channelMessages;
};

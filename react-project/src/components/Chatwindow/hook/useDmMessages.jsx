import { useState, useEffect } from 'react';

export const useDmMessages = (dmId) => {
  const [dmMessages, setDmMessages] = useState([]); // DM 메시지를 저장하는 상태 변수

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // 서버로부터 DM 메시지를 가져옴
        const response = await fetch(`/api/dms/${dmId}/messages`);
        const data = await response.json();
        setDmMessages(data); // 가져온 메시지를 상태에 저장
      } catch (error) {
        console.error('Error fetching DM messages:', error); // 에러 발생 시 콘솔에 출력
      }
    };

    fetchMessages(); // 메시지 가져오기 함수 실행
  }, [dmId]); // dmId가 변경될 때마다 useEffect 재실행

  return dmMessages; // 현재 DM 메시지를 반환
};

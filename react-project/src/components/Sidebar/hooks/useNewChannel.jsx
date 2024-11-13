import { useState } from 'react';
import axios from 'axios';  // 서버와 통신하기 위해 추가

export const useNewChannel = (onAddChannel) => {
  const [newChannelName, setNewChannelName] = useState('');  // 새 채널 이름 상태
  const [isAddingChannel, setIsAddingChannel] = useState(false);  // 채널 추가 모드 상태

  // 채널 추가 요청 함수
  const handleAddChannel = async () => {
    if (newChannelName.trim()) {  // 채널 이름이 공백이 아닌지 확인
      try {
        // 서버에 새 채널 생성 요청
        await axios.post('/api/channels', { name: newChannelName });
        onAddChannel(newChannelName);  // 상위 컴포넌트에서 제공한 콜백 함수 호출
        setNewChannelName('');  // 입력 필드 초기화
        setIsAddingChannel(false);  // 추가 모드 종료
      } catch (error) {
        console.error("채널 추가 오류:", error);
        alert("채널을 추가하는 중 문제가 발생했습니다.");  // 오류 발생 시 사용자에게 알림
      }
    }
  };

  // 채널 추가 모드 전환 함수
  const toggleAddingChannel = () => {
    setIsAddingChannel(!isAddingChannel);
  };

  return {
    newChannelName,          // 새 채널 이름 상태
    setNewChannelName,       // 새 채널 이름 설정 함수
    isAddingChannel,         // 채널 추가 모드 상태
    toggleAddingChannel,     // 채널 추가 모드 전환 함수
    handleAddChannel,        // 채널 추가 함수
  };
};
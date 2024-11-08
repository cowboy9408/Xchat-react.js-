import { useState } from 'react';
import axios from 'axios';  // 서버와 통신하기 위해 추가

export const useNewChannel = (onAddChannel) => {
  const [newChannelName, setNewChannelName] = useState('');
  const [isAddingChannel, setIsAddingChannel] = useState(false);

  const handleAddChannel = async () => {
    if (newChannelName.trim()) {
      try {
        // 서버에 새로운 채널 생성 요청
        await axios.post('/api/channels', { name: newChannelName });
        onAddChannel(newChannelName);
        setNewChannelName('');  // 입력 필드 초기화
        setIsAddingChannel(false);  // 추가 모드 종료
      } catch (error) {
        console.error("채널 추가 오류:", error);
        alert("채널을 추가하는 중 문제가 발생했습니다.");
      }
    }
  };

  const toggleAddingChannel = () => {
    setIsAddingChannel(!isAddingChannel);
  };

  return {
    newChannelName,
    setNewChannelName,
    isAddingChannel,
    toggleAddingChannel,
    handleAddChannel,
  };
};
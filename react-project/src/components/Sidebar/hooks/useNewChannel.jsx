import { useState } from 'react';
import axiosInstance from '../../../axiosConfig';

export const useNewChannel = (onAddChannel, existingChannels) => {
  const [newChannelName, setNewChannelName] = useState(''); // 새 채널 이름 상태
  const [isAddingChannel, setIsAddingChannel] = useState(false); // 채널 추가 모드 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [isSuccess, setIsSuccess] = useState(false); // 성공 여부 상태

  // 채널 추가 요청 함수
  const handleAddChannel = async () => {
    if (!newChannelName.trim()) {
      setErrorMessage('채널 이름은 공백일 수 없습니다.');
      return;
    }

    const isDuplicate = existingChannels.some(channel => channel.name === newChannelName);
    if (isDuplicate) {
      setErrorMessage('이미 존재하는 채널 이름입니다.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post('/api/channels', { name: newChannelName });
      if (response.status === 201) { // 서버가 채널 생성을 성공적으로 처리했을 경우
        onAddChannel(response.data); // 생성된 채널 데이터를 상위 컴포넌트에 전달
        setNewChannelName('');
        setErrorMessage('');
        setIsSuccess(true); // 성공 상태 설정
        setTimeout(() => setIsSuccess(false), 3000); // 3초 후 성공 메시지 제거
        setIsAddingChannel(false); // 입력창 닫기
      } else {
        setErrorMessage('채널 추가 중 문제가 발생했습니다.');
      }
    } catch (error) {
      console.error('채널 추가 오류:', error);
      setErrorMessage(error.response?.data?.message || '서버와의 통신 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAddingChannel = () => {
    setErrorMessage('');
    setIsAddingChannel(!isAddingChannel);
  };

  return {
    newChannelName,
    setNewChannelName,
    isAddingChannel,
    toggleAddingChannel,
    handleAddChannel,
    errorMessage,
    isLoading,
    isSuccess, // 성공 상태 반환
  };
};

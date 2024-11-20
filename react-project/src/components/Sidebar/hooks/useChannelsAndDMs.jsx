import { useState, useEffect } from 'react';
import axiosInstance from '../../../axiosConfig';

export const useChannelsAndDMs = (onSelectChannel, onSelectDM) => {
  const [selectedChannel, setSelectedChannel] = useState(''); // 기본 채널
  const [channels, setChannels] = useState([]); // 채널 리스트
  const [dms, setDms] = useState([]); // DM 리스트
  const [isChannelCollapsed, setIsChannelCollapsed] = useState(false); // 채널 접힘 상태
  const [isDmCollapsed, setIsDmCollapsed] = useState(false); // DM 접힘 상태
  const [currentChannelMembers, setCurrentChannelMembers] = useState([]); // 선택된 채널의 멤버 리스트
  const [error, setError] = useState(null); // 에러 상태

  const CURRENT_USER = 'user1'; // 현재 로그인한 사용자 (예시)

  // 서버에서 채널 및 DM 데이터를 불러오는 함수
  useEffect(() => {
    const fetchChannelsAndDms = async () => {
      setError(null);
      try {
        const channelsResponse = await axiosInstance.get('/api/channels'); // API 요청
        const dmsResponse = await axiosInstance.get('/api/dms');

        // 사용자가 속한 채널 필터링
        const userChannels = channelsResponse.data.filter((channel) =>
          channel.members.includes(CURRENT_USER)
        );
        const userDms = dmsResponse.data.filter((dm) =>
          dm.participants.includes(CURRENT_USER)
        );

        setChannels(userChannels || []);
        setDms(userDms || []);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
        setError('데이터를 가져오는 중 문제가 발생했습니다.');
      }
    };

    fetchChannelsAndDms();
  }, []);

  // 선택된 채널의 멤버 리스트 업데이트
  useEffect(() => {
    const selected = channels.find((channel) => channel.name === selectedChannel);
    if (selected) {
      setCurrentChannelMembers(selected.members || []); // 선택된 채널 멤버
    } else {
      setCurrentChannelMembers([]); // 빈 리스트
    }
  }, [selectedChannel, channels]);

  // 채널 클릭 처리
  const handleChannelClick = (channelName) => {
    setSelectedChannel(channelName); // 선택된 채널 업데이트
    const selected = channels.find((channel) => channel.name === channelName);
    setCurrentChannelMembers(selected ? selected.members : []); // 선택된 채널의 멤버 업데이트
    onSelectChannel(channelName); // 부모 컴포넌트에 선택된 채널 전달
  };

  // DM 클릭 처리
  const handleDmClick = (dmName) => {
    setSelectedChannel(dmName);
    onSelectDM(dmName);
  };

  // 새 채널 추가
  const addChannel = async (channelName) => {
    try {
      await axiosInstance.post('/api/channels', { name: channelName }); // API 요청
      setChannels([...channels, { name: channelName, unread: 0, members: [CURRENT_USER] }]);
    } catch (error) {
      console.error('채널 추가 중 오류 발생:', error);
      setError('채널 추가 중 문제가 발생했습니다.');
    }
  };

  return {
    selectedChannel,
    channels,
    dms,
    isChannelCollapsed,
    isDmCollapsed,
    currentChannelMembers,
    error,
    handleChannelClick,
    handleDmClick,
    addChannel,
    setIsChannelCollapsed,
    setIsDmCollapsed,
  };
};

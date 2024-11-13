import { useState, useEffect } from 'react';
import axios from 'axios';  // 서버 통신을 위해 추가

// useChannelsAndDMs 훅: 채널과 DM 데이터를 관리하고, 선택 및 추가 기능
export const useChannelsAndDMs = (onSelectChannel, onSelectDM) => {
  const [selectedChannel, setSelectedChannel] = useState('일반');  // 기본 채널 설정
  const [channels, setChannels] = useState([]);  // 채널 리스트 상태
  const [dms, setDms] = useState([]);  // DM 리스트 상태
  const [isChannelCollapsed, setIsChannelCollapsed] = useState(false);  // 채널 접힘 상태
  const [isDmCollapsed, setIsDmCollapsed] = useState(false);  // DM 접힘 상태
  const [currentChannelMembers, setCurrentChannelMembers] = useState([]);  // 선택된 채널의 멤버 리스트

  // 서버에서 채널 및 DM 데이터를 불러오는 함수
  useEffect(() => {
    const fetchChannelsAndDms = async () => {
      try {
        const channelsResponse = await axios.get('/api/channels');  // 채널 데이터 요청
        const dmsResponse = await axios.get('/api/dms');  // DM 데이터 요청
        setChannels(channelsResponse.data);
        setDms(dmsResponse.data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchChannelsAndDms();
  }, []);

  // 선택된 채널의 멤버 리스트 업데이트
  useEffect(() => {
    const selected = channels.find(channel => channel.name === selectedChannel);
    if (selected) {
      setCurrentChannelMembers(selected.members || []);  // 선택된 채널에 멤버가 있으면 설정
    } else {
      setCurrentChannelMembers([]);  // 선택된 채널이 없으면 빈 리스트 설정
    }
  }, [selectedChannel, channels]);

  // 채널 클릭 시 선택된 채널 설정
  const handleChannelClick = (channelName) => {
    setSelectedChannel(channelName);
    onSelectChannel(channelName);
  };

  // DM 클릭 시 선택된 DM 설정
  const handleDmClick = (dmName) => {
    setSelectedChannel(dmName);
    onSelectDM(dmName);
  };

  // 새 채널 추가 함수
  const addChannel = async (channelName) => {
    try {
      await axios.post('/api/channels', { name: channelName });  // 서버에 채널 추가 요청
      setChannels([...channels, { name: channelName, unread: 0, members: [] }]);  // 채널 리스트에 새 채널 추가
    } catch (error) {
      console.error("채널 추가 중 오류 발생:", error);
    }
  };

  return {
    selectedChannel,
    channels,
    dms,
    isChannelCollapsed,
    isDmCollapsed,
    handleChannelClick,
    handleDmClick,
    addChannel,
    setIsChannelCollapsed,
    setIsDmCollapsed,
    currentChannelMembers,  // 현재 선택된 채널의 멤버 리스트
  };
};

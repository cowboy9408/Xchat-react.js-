import { useState, useEffect } from 'react';
import axios from 'axios';  // 서버 통신을 위해 추가

export const useChannelsAndDMs = (onSelectChannel, onSelectDM) => {
  const [selectedChannel, setSelectedChannel] = useState('일반');
  const [channels, setChannels] = useState([]);
  const [dms, setDms] = useState([]);
  const [isChannelCollapsed, setIsChannelCollapsed] = useState(false);
  const [isDmCollapsed, setIsDmCollapsed] = useState(false);
  const [currentChannelMembers, setCurrentChannelMembers] = useState([]);

  // 서버에서 채널 및 DM 데이터 불러오기
  useEffect(() => {
    const fetchChannelsAndDms = async () => {
      try {
        const channelsResponse = await axios.get('/api/channels');
        const dmsResponse = await axios.get('/api/dms');
        setChannels(channelsResponse.data);
        setDms(dmsResponse.data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchChannelsAndDms();
  }, []);

  // 선택된 채널에 맞는 멤버 업데이트
  useEffect(() => {
    const selected = channels.find(channel => channel.name === selectedChannel);
    if (selected) {
      setCurrentChannelMembers(selected.members || []);
    } else {
      setCurrentChannelMembers([]);
    }
  }, [selectedChannel, channels]);

  const handleChannelClick = (channelName) => {
    setSelectedChannel(channelName);
    onSelectChannel(channelName);
  };

  const handleDmClick = (dmName) => {
    setSelectedChannel(dmName);
    onSelectDM(dmName);
  };

  const addChannel = async (channelName) => {
    try {
      // 서버에 새 채널 생성 요청
      await axios.post('/api/channels', { name: channelName });
      setChannels([...channels, { name: channelName, unread: 0, members: [] }]);
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
    currentChannelMembers,  // 선택된 채널 멤버
  };
};

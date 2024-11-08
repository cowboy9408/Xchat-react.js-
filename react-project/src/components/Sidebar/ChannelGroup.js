import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNewChannel } from './hooks/useNewChannel'; // Custom Hook import
import {
  ChannelCard,
  ChannelName,
  Badge,
  AddChannelButton,
  AddChannelInput,
  SectionHeader
} from './style/ChannelGroupStyle';

const ChannelGroup = ({ title, channels, selectedChannel, onSelectChannel, onAddChannel, isCollapsed, onToggleCollapse }) => {
  const {
    newChannelName,
    setNewChannelName,
    isAddingChannel,
    toggleAddingChannel,
    handleAddChannel,
  } = useNewChannel(onAddChannel);

  const handleChannelClick = (channelName) => {
    onSelectChannel(channelName);  // 채널 선택 시 호출
  };

  return (
    <div>
      <SectionHeader onClick={onToggleCollapse}>
        <span>{title}</span>
        <AddChannelButton onClick={(e) => { e.stopPropagation(); toggleAddingChannel(); }}>
          <FaPlus />
        </AddChannelButton>
      </SectionHeader>

      {isAddingChannel && (
        <AddChannelInput
          type="text"
          placeholder="새 채널 이름"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddChannel()}  // 새 채널 추가
        />
      )}

      {!isCollapsed && channels.map((channel) => (
        <ChannelCard 
          key={channel.name} 
          isSelected={selectedChannel === channel.name}
          onClick={() => handleChannelClick(channel.name)}
        >
          <ChannelName>{channel.name}</ChannelName>
          <Badge unread={channel.unread}>{channel.unread}</Badge>  {/* 읽지 않은 메시지 배지 */}
        </ChannelCard>
      ))}
    </div>
  );
};

export default ChannelGroup;

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNewChannel } from './hooks/useNewChannel'; 
import {
  ChannelCard,
  ChannelName,
  Badge,
  AddChannelButton,
  AddChannelInput,
  SectionHeader,
  ErrorPopup,
  SuccessMessage, // 성공 메시지 스타일 추가
  Spinner, // 로딩 스피너 스타일 추가
} from './style/ChannelGroupStyle';

const ChannelGroup = ({ title, channels, selectedChannel, onSelectChannel, onAddChannel, isCollapsed, onToggleCollapse }) => {
  const {
    newChannelName,
    setNewChannelName,
    isAddingChannel,
    toggleAddingChannel,
    handleAddChannel,
    errorMessage,
    isLoading,
    isSuccess,
  } = useNewChannel(onAddChannel, channels);

  const handleChannelClick = (channelName) => {
    onSelectChannel(channelName);
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
        <div>
          <AddChannelInput
            type="text"
            placeholder="새 채널 이름"
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddChannel()}
          />
          {isLoading && <Spinner />}
          {errorMessage && <ErrorPopup>{errorMessage}</ErrorPopup>}
        </div>
      )}

      {isSuccess && (
        <SuccessMessage>채널이 성공적으로 추가되었습니다!</SuccessMessage>
      )}

      {!isCollapsed && channels.map((channel) => (
        <ChannelCard
          key={channel.name}
          isSelected={selectedChannel === channel.name}
          onClick={() => handleChannelClick(channel.name)}
        >
          <ChannelName>{channel.name}</ChannelName>
          <Badge unread={channel.unread}>{channel.unread}</Badge>
        </ChannelCard>
      ))}
    </div>
  );
};

export default ChannelGroup;

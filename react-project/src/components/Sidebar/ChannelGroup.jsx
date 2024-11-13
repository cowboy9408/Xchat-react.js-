import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNewChannel } from './hooks/useNewChannel'; 
import {
  ChannelCard,
  ChannelName,
  Badge,
  AddChannelButton,
  AddChannelInput,
  SectionHeader
} from './style/ChannelGroupStyle';

// ChannelGroup 컴포넌트: 채널 리스트 표시 및 새 채널 추가 기능 제공
const ChannelGroup = ({ title, channels, selectedChannel, onSelectChannel, onAddChannel, isCollapsed, onToggleCollapse }) => {
  const {
    newChannelName,
    setNewChannelName,
    isAddingChannel,
    toggleAddingChannel,
    handleAddChannel,
  } = useNewChannel(onAddChannel);  // 커스텀 훅을 사용해 새 채널 관련 상태 및 함수 제공

  // 채널 클릭 시 호출되는 함수, 선택된 채널을 설정
  const handleChannelClick = (channelName) => {
    onSelectChannel(channelName);
  };

  return (
    <div>
      {/* 섹션 헤더: 채널 그룹 제목과 새 채널 추가 버튼 포함 */}
      <SectionHeader onClick={onToggleCollapse}>
        <span>{title}</span>
        <AddChannelButton onClick={(e) => { e.stopPropagation(); toggleAddingChannel(); }}>
          <FaPlus />
        </AddChannelButton>
      </SectionHeader>

      {/* 새 채널 추가 입력창: isAddingChannel 상태에 따라 표시 */}
      {isAddingChannel && (
        <AddChannelInput
          type="text"
          placeholder="새 채널 이름"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddChannel()}  // Enter 키를 누르면 새 채널 추가
        />
      )}

      {/* 채널 목록 표시: isCollapsed가 false일 때만 채널 리스트를 표시 */}
      {!isCollapsed && channels.map((channel) => (
        <ChannelCard 
          key={channel.name} 
          isSelected={selectedChannel === channel.name}  // 선택된 채널 스타일 지정
          onClick={() => handleChannelClick(channel.name)}
        >
          <ChannelName>{channel.name}</ChannelName>
          {/* 읽지 않은 메시지가 있을 경우 배지로 표시 */}
          <Badge unread={channel.unread}>{channel.unread}</Badge>
        </ChannelCard>
      ))}
    </div>
  );
};

export default ChannelGroup;

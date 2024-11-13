import React from 'react';
import ChannelGroup from './ChannelGroup';
import DmGroup from './DmGroup';
import ProfileSection from './ProfileSection';
import Tabs from './Tabs';
import MemberList from './MemberList';
import { useTabs } from './hooks/useTab'; // Custom Hook import
import { useChannelsAndDMs } from './hooks/useChannelsAndDMs'; // Custom Hook import
import { useSearchTerm } from './hooks/useSearchTerm'; // Custom Hook import
import {
  SidebarLayout,
  SidebarTabs,
  SidebarContainer,
  SearchContainer,
  SearchIcon,
  SearchInput
} from './style/SidebarStyle';

// Sidebar 컴포넌트: 채널, DM, 검색, 프로필 등을 표시하는 사이드바 구성
const Sidebar = ({ onSelectChannel, onSelectDM, activeChannel, activeDM }) => {
  const { activeTab, setActiveTab } = useTabs();  // 현재 활성 탭 상태
  const { searchTerm, setSearchTerm } = useSearchTerm();  // 검색어 상태
  const {
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
    currentChannelMembers,
  } = useChannelsAndDMs(onSelectChannel, onSelectDM);  // 채널 및 DM 데이터를 서버에서 불러오고 관리하는 커스텀 훅

  // 검색어에 맞는 채널과 DM을 필터링
  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDms = dms.filter(dm =>
    dm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 채널과 DM에서 읽지 않은 메시지 개수 계산
  const unreadChannels = channels.reduce((acc, channel) => acc + channel.unread, 0);
  const unreadDms = filteredDms.reduce((acc, dm) => acc + dm.unread, 0);

  return (
    <SidebarLayout>
      {/* 사이드바 상단 탭: 채널과 DM의 탭을 전환 */}
      <SidebarTabs>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          unreadChannels={unreadChannels}
          unreadDms={unreadDms}
        />
      </SidebarTabs>

      <SidebarContainer>
        {/* 채널 또는 DM 검색을 위한 검색창 */}
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="채널 또는 DM 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        {/* 채널 그룹: activeTab이 'channels'일 때 표시 */}
        {activeTab === 'channels' && (
          <ChannelGroup
            title="채널"
            channels={filteredChannels}
            selectedChannel={selectedChannel}
            onSelectChannel={handleChannelClick}
            onAddChannel={addChannel}
            isCollapsed={isChannelCollapsed}
            onToggleCollapse={() => setIsChannelCollapsed(!isChannelCollapsed)}
          />
        )}

        {/* DM 그룹: activeTab이 'dms'일 때 표시 */}
        {activeTab === 'dms' && (
          <DmGroup
            title="다이렉트 메시지"
            dms={filteredDms}
            selectedChannel={selectedChannel}
            onSelectChannel={handleDmClick}
            isCollapsed={isDmCollapsed}
            onToggleCollapse={() => setIsDmCollapsed(!isDmCollapsed)}
          />
        )}

        {/* 멤버 리스트: activeTab이 'channels'일 때만 표시 */}
        {activeTab === 'channels' && <MemberList members={currentChannelMembers || []} searchTerm={searchTerm} />}

        {/* 사용자 프로필 섹션 */}
        <ProfileSection 
          avatarUrl="/path/to/avatar.png" 
          status="online" 
          username="강아지" 
          userTag="1234" 
        />
      </SidebarContainer>
    </SidebarLayout>
  );
};

export default Sidebar;

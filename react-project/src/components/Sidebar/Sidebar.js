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

const Sidebar = ({ onSelectChannel, onSelectDM, activeChannel, activeDM }) => {
  const { activeTab, setActiveTab } = useTabs();  // Custom Hook 사용
  const { searchTerm, setSearchTerm } = useSearchTerm();  // Custom Hook 사용
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
  } = useChannelsAndDMs(onSelectChannel, onSelectDM);  // 서버에서 데이터를 받아오는 로직이 이 안에 있음

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDms = dms.filter(dm =>
    dm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadChannels = channels.reduce((acc, channel) => acc + channel.unread, 0);
  const unreadDms = filteredDms.reduce((acc, dm) => acc + dm.unread, 0);

  return (
    <SidebarLayout>
      <SidebarTabs>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          unreadChannels={unreadChannels}
          unreadDms={unreadDms}
        />
      </SidebarTabs>

      <SidebarContainer>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="채널 또는 DM 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

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

        {activeTab === 'channels' && <MemberList members={currentChannelMembers || []} searchTerm={searchTerm} />}
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

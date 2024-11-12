import React from 'react';
import { FaHashtag, FaEnvelope } from 'react-icons/fa';
import { TabsContainer, TabButton, Badge } from './style/TabStyle';

const Tabs = ({ activeTab, setActiveTab, unreadChannels, unreadDms }) => {
  return (
    <TabsContainer>
      <div style={{ position: 'relative' }}>
        <TabButton isActive={activeTab === 'channels'} onClick={() => setActiveTab('channels')}>
          <FaHashtag />
        </TabButton>
        <Badge unread={unreadChannels}>{unreadChannels}</Badge> {/* 서버에서 받은 데이터로 표시 */}
      </div>

      <div style={{ position: 'relative' }}>
        <TabButton isActive={activeTab === 'dms'} onClick={() => setActiveTab('dms')}>
          <FaEnvelope />
        </TabButton>
        <Badge unread={unreadDms}>{unreadDms}</Badge> {/* 서버에서 받은 데이터로 표시 */}
      </div>
    </TabsContainer>
  );
};

export default Tabs;

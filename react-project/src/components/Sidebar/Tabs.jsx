import React from 'react';
import { FaHashtag, FaEnvelope } from 'react-icons/fa';
import { TabsContainer, TabButton, Badge } from './style/TabStyle';

// Tabs 컴포넌트: 채널과 DM을 전환할 수 있는 탭과 읽지 않은 메시지 수 배지를 표시
const Tabs = ({ activeTab, setActiveTab, unreadChannels, unreadDms }) => {
  return (
    <TabsContainer>
      {/* 채널 탭 버튼 */}
      <div style={{ position: 'relative' }}>
        <TabButton isActive={activeTab === 'channels'} onClick={() => setActiveTab('channels')}>
          <FaHashtag />  {/* 채널 탭에 해시태그 아이콘 표시 */}
        </TabButton>
        <Badge unread={unreadChannels}>{unreadChannels}</Badge>  {/* 읽지 않은 채널 메시지 수 표시 */}
      </div>

      {/* DM 탭 버튼 */}
      <div style={{ position: 'relative' }}>
        <TabButton isActive={activeTab === 'dms'} onClick={() => setActiveTab('dms')}>
          <FaEnvelope />  {/* DM 탭에 봉투 아이콘 표시 */}
        </TabButton>
        <Badge unread={unreadDms}>{unreadDms}</Badge>  {/* 읽지 않은 DM 메시지 수 표시 */}
      </div>
    </TabsContainer>
  );
};


export default Tabs;

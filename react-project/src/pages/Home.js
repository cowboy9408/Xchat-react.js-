import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/topbar/TopBar';
import ChatWindow from '../components/Chatwindow/ChatWindow';  // 분리된 ChatWindow 컴포넌트 사용

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;  // 전체 화면에서 스크롤 방지
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;  // 채팅창을 위한 스크롤만 허용
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;  // 채팅창 내부에서만 스크롤 가능하게 설정
  display: flex;
  flex-direction: column;
`;

const Home = ({ channels, dms, onSelectChannel, onSelectDM, activeChannel, activeDM }) => {
  return (
    <HomeContainer>
      <Sidebar 
        channels={channels}  // 서버에서 받은 채널 데이터 전달
        dms={dms}  // 서버에서 받은 DM 데이터 전달
        onSelectChannel={onSelectChannel} 
        onSelectDM={onSelectDM} 
        activeChannel={activeChannel} 
        activeDM={activeDM}
      />  {/* 사이드바는 고정된 너비로 설정 */}
      <MainContent>
        <TopBar title={activeChannel || activeDM || "채팅"} />  {/* 상단바는 고정된 높이로 설정 */}
        <ContentWrapper>  {/* 이 영역에서만 스크롤 */}
          <ChatWindow 
            activeChannel={activeChannel} 
            activeDM={activeDM} 
          />  {/* 채팅창 */}
        </ContentWrapper>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;

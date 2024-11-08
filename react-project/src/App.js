import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';  // Route 관련 추가
import { darkTheme, GlobalStyles } from './theme/theme';
import Sidebar from './components/Sidebar/Sidebar';
import ChatWindow from './components/Chatwindow/ChatWindow';
import TopBar from './components/topbar/TopBar';
import axios from './axiosConfig';  // Axios 설정 유지
import LoginComponent from './components/Login/LoginComponent';  // 로그인 컴포넌트 추가

const App = () => {
  const [activeChannel, setActiveChannel] = useState('일반');
  const [activeDM, setActiveDM] = useState(null);
  const [channels, setChannels] = useState([]);  // 서버에서 가져올 채널 리스트
  const [dms, setDms] = useState([]);  // 서버에서 가져올 DM 리스트

  // 더미 데이터 설정
  const dummyChannels = [
    { name: '일반', unread: 2 },
    { name: '개발', unread: 5 },
    { name: '디자인', unread: 0 }
  ];

  const dummyDms = [
    { name: '김철수', unread: 1 },
    { name: '이영희', unread: 0 }
  ];

  // 서버에서 채널과 DM 데이터를 가져오는 함수
  const fetchChannelsAndDms = async () => {
    try {
      const channelsResponse = await axios.get('/channels');  // 서버에서 채널 리스트 가져오기
      const dmsResponse = await axios.get('/dms');  // 서버에서 DM 리스트 가져오기
      setChannels(channelsResponse.data);  // 가져온 채널 리스트 설정
      setDms(dmsResponse.data);  // 가져온 DM 리스트 설정
    } catch (error) {
      console.error('서버에서 데이터를 가져오는 중 오류 발생. 더미 데이터를 사용합니다:', error);
      // 서버에서 데이터를 가져오지 못했을 경우 더미 데이터로 대체
      setChannels(dummyChannels);
      setDms(dummyDms);
    }
  };

  // 컴포넌트가 마운트될 때 서버에서 채널과 DM 리스트를 가져옴
  useEffect(() => {
    fetchChannelsAndDms();
  }, []);

  const getTitle = () => {
    if (activeChannel) {
      return activeChannel;
    } else if (activeDM) {
      return activeDM;
    }
    return '채팅';
  };

  const handleChannelSelect = (channelName) => {
    setActiveChannel(channelName);
    setActiveDM(null);
  };

  const handleDMSelect = (dmName) => {
    setActiveDM(dmName);
    setActiveChannel(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Routes>
        {/* 로그인 페이지를 기본 경로로 설정 */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginComponent />} />

        {/* 로그인이 안 되어도 /home 경로로 접근 가능 */}
        <Route 
          path="/home" 
          element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <Sidebar
                onSelectChannel={handleChannelSelect}
                onSelectDM={handleDMSelect}
                activeChannel={activeChannel}
                activeDM={activeDM}
                channels={channels}  // 서버에서 가져온 채널 리스트 전달
                dms={dms}  // 서버에서 가져온 DM 리스트 전달
              />
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <TopBar title={getTitle()} />
                <ChatWindow activeChannel={activeChannel} activeDM={activeDM} />
              </div>
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

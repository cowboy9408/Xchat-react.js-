import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

export const useUserStatus = () => {
  const [status, setStatus] = useState('online');  // 기본 상태를 'online'으로 설정
  const navigate = useNavigate();

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);  // 상태를 로컬에서 업데이트
    try {
      // 서버에 상태 변경 요청 전송
      await axiosInstance.post('/api/user/status', { status: newStatus });
    } catch (error) {
      console.error("상태 변경 오류:", error);
      alert("상태 변경 중 문제가 발생했습니다.");
    }
  };

  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청
      await axiosInstance.post('/api/auth/logout');
      localStorage.removeItem('authToken');
      navigate('/login');
    } catch (error) {
      console.error("로그아웃 오류:", error);
      alert("로그아웃 중 문제가 발생했습니다.");
    }
  };

  return {
    status,
    handleStatusChange,
    handleLogout,
  };
};

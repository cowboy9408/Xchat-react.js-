import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

const useAuth = () => {
  const navigate = useNavigate();

  const nameRegex = /^[a-zA-Z가-힣]{2,}$/;  // 이름: 최소 2자 이상, 영문/한글
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // 이메일 형식
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;  // 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함

  const handleSignup = async (userId, userPwd, userName) => {
    if (!nameRegex.test(userName)) {
      alert("이름은 최소 2자 이상이어야 하며, 특수문자 없이 입력해주세요.");
      return;
    }
    if (!emailRegex.test(userId)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (!passwordRegex.test(userPwd)) {
      alert("비밀번호는 최소 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/signup', {
        userId,
        userPwd,
        userName,
      });
      alert(response.data); // "회원가입이 완료되었습니다." 메시지
      navigate('/'); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 문제가 발생했습니다.");
    }
  };

  const handleLogin = async (userId, userPwd) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        userId,
        userPwd,
      });
      alert(response.data.message || "로그인 성공");
      navigate('/home'); // 로그인 후 홈으로 이동
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 정보가 올바르지 않습니다.");
    }
  };

  return { handleLogin, handleSignup };
};

export default useAuth;

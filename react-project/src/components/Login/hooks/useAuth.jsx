import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  // 정규식 정의
  const nameRegex = /^[a-zA-Z가-힣]{2,}$/;  // 이름: 최소 2자 이상, 영문/한글
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // 이메일 형식
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;  // 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함

  const handleSignup = async (email, password, fullName) => {
    // 입력 값 검증
    if (!nameRegex.test(fullName)) {
      alert("이름은 최소 2자 이상이어야 하며, 특수문자 없이 입력해주세요.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (!passwordRegex.test(password)) {
      alert("비밀번호는 최소 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    try {
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
        fullName,
      });
      alert(response.data); // "회원가입이 완료되었습니다." 메시지
      navigate('/'); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 문제가 발생했습니다.");
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token); // JWT 토큰을 로컬 스토리지에 저장
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/home'); // 로그인 후 홈으로 이동
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 정보가 올바르지 않습니다.");
    }
  };

  return { handleLogin, handleSignup };
};

export default useAuth;

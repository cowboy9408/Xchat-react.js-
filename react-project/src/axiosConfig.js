import axios from 'axios';

// 기본 Axios 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',  // Spring Boot 서버의 API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
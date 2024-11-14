import { useState } from 'react';

export const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');  // 검색어 상태 초기화

  return {
    searchTerm,      // 현재 검색어 상태
    setSearchTerm,   // 검색어 상태를 설정하는 함수
  };
};

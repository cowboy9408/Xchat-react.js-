import { useState, useEffect, useRef } from 'react';

export const useDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);  // 드롭다운 표시 여부 상태
  const dropdownRef = useRef(null);  // 드롭다운 요소의 참조 저장

  // 드롭다운 표시/숨기기 전환 함수
  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  // 드롭다운 외부 클릭 시 드롭다운을 닫음
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 드롭다운 요소 외부 클릭을 감지하여 닫기
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);  // 마우스 클릭 이벤트 리스너 추가
    return () => document.removeEventListener('mousedown', handleClickOutside);  // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, []);

  return {
    dropdownVisible,  // 드롭다운 표시 상태
    toggleDropdown,   // 드롭다운 표시 전환 함수
    dropdownRef,      // 드롭다운 참조
  };
};

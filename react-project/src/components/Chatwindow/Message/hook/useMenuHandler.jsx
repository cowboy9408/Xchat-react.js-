import { useState, useEffect, useRef } from 'react'; // React의 상태 관리 및 DOM 참조를 위한 Hook

// useMenuHandler: 메뉴의 열림/닫힘 상태를 관리하는 커스텀 훅
export const useMenuHandler = () => {
  const [showMenu, setShowMenu] = useState(false); // 메뉴의 표시 여부를 관리하는 상태
  const menuRef = useRef(null); // 메뉴 DOM 요소를 참조하는 useRef

  useEffect(() => {
    // 메뉴 외부를 클릭했을 때 메뉴를 닫는 함수
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false); // 메뉴를 닫음
      }
    };

    // 마우스 클릭 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]); // menuRef를 의존성 배열로 설정

  // 반환값: 메뉴 상태, 메뉴 상태 변경 함수, 메뉴 참조
  return { showMenu, setShowMenu, menuRef };
};

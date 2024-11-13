import { useState, useEffect, useRef } from 'react';

export const useMemberPopup = () => {
  const [selectedMember, setSelectedMember] = useState(null);  // 선택된 멤버 정보 상태
  const [popupPosition, setPopupPosition] = useState({ top: 0 });  // 팝업 위치 상태
  const popupRef = useRef(null);  // 팝업 요소의 참조

  // 멤버 클릭 시 팝업 표시 위치를 설정하고 선택된 멤버를 지정
  const handleMemberClick = (member, event) => {
    setSelectedMember(member);
    const rect = event.target.getBoundingClientRect();
    let top = rect.top + window.scrollY - 150 / 2 + rect.height / 2;  // 팝업이 화면 중앙에 위치하도록 계산

    // 팝업이 화면 경계를 넘지 않도록 위치 조정
    if (top + 150 > window.innerHeight) {
      top = window.innerHeight - 150 - 20;
    } else if (top < 20) {
      top = 20;
    }

    setPopupPosition({ top });
  };

  // 팝업 외부 클릭 시 팝업을 닫음
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);  // 외부 클릭 감지를 위한 이벤트 리스너 추가
    return () => document.removeEventListener('mousedown', handleClickOutside);  // 컴포넌트 언마운트 시 리스너 제거
  }, []);

  return {
    selectedMember,  // 현재 선택된 멤버 정보
    popupPosition,   // 팝업 위치 정보
    popupRef,        // 팝업 참조
    handleMemberClick,  // 멤버 클릭 핸들러
  };
};

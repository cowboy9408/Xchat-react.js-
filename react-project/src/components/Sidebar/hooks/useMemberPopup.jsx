import { useState, useEffect, useRef } from 'react';

export const useMemberPopup = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0 });
  const popupRef = useRef(null);

  const handleMemberClick = (member, event) => {
    setSelectedMember(member);
    const rect = event.target.getBoundingClientRect();
    let top = rect.top + window.scrollY - 150 / 2 + rect.height / 2;

    if (top + 150 > window.innerHeight) {
      top = window.innerHeight - 150 - 20;
    } else if (top < 20) {
      top = 20;
    }

    setPopupPosition({ top });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    selectedMember,
    popupPosition,
    popupRef,
    handleMemberClick,
  };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // ref가 없거나, 클릭이 ref 내부에서 발생한 경우 아무 동작도 하지 않음
      if (!ref.current || ref.current.contains(event.target)) return;

      // ref 외부에서 클릭이 발생한 경우 handler 실행
      handler();
    };

    // 클릭 이벤트 리스너 추가
    document.addEventListener('mousedown', listener);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]); // ref와 handler가 변경될 때마다 useEffect 재실행
};
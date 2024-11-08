import { useState } from 'react';

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState('channels');

  return {
    activeTab,
    setActiveTab,
  };
};

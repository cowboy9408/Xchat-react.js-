import { useState } from 'react';

export const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return {
    searchTerm,
    setSearchTerm,
  };
};

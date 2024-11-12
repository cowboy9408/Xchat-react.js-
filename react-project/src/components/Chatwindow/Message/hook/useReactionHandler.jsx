import { useState } from 'react';

export const useReactionHandler = (initialReactions, onReaction, messageId) => {
  const [reactions, setReactions] = useState(initialReactions || {});

  const handleReactionClick = (reaction) => {
    const updatedReactions = { ...reactions };
    updatedReactions[reaction] = (updatedReactions[reaction] || 0) + 1;
    setReactions(updatedReactions);
    if (onReaction) onReaction(messageId, updatedReactions);
  };

  return { reactions, handleReactionClick };
};

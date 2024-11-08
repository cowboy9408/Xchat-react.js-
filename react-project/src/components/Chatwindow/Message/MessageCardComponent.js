import React, { useState } from 'react';
import { FaEllipsisV, FaDownload } from 'react-icons/fa';
import ProfileSection from './ProfileSection';
import MessageContent from './MessageContent';
import MessageTime from './MessageTime';
import ReadStatus from './ReadStatus';
import { useMenuHandler } from './hook/useMenuHandler';
import { useReactionHandler } from './hook/useReactionHandler';
import {
  MoreButton,
  MessageCardContainer,
  ProfileWrapper,
  MessageWrapper,
  UserName,
  MessageInfoWrapper,
  Menu,
  MenuItem,
  MessageFooterWrapper,
  ReactionWrapper,
  FileDownloadLink,
} from './style/MessageCardComponentStyle';

const MessageCardComponent = ({ message, isGrouped, previous_message, next_message, on_delete, on_edit, on_reaction }) => {
  const { showMenu, setShowMenu, menuRef } = useMenuHandler();
  const { reactions, handleReactionClick } = useReactionHandler(message.reactions, on_reaction, message.id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(message.text);

  const handleEditClick = () => {
    setIsEditing(true);
    setShowMenu(false);
  };

  const handleDeleteClick = () => {
    on_delete(message.id);
    setShowMenu(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      on_edit(message.id, editedText);
    }
  };

  const isSameMinute = (prev, curr) => {
    const prevTime = new Date(prev.time);
    const currTime = new Date(curr.time);
    return prevTime.getMinutes() === currTime.getMinutes() && prevTime.getHours() === currTime.getHours();
  };

  const shouldHideProfileAndTime = previous_message && previous_message.userName === message.userName && isSameMinute(previous_message, message);
  const shouldShowTimeAndProfile = !next_message || next_message.userName !== message.userName || !isSameMinute(next_message, message);

  return (
    <MessageCardContainer>
      <MoreButton onClick={() => setShowMenu(!showMenu)}>
        <FaEllipsisV />
      </MoreButton>

      <div ref={menuRef}>
        <Menu show={showMenu}>
          <MenuItem onClick={handleEditClick}>수정</MenuItem>
          <MenuItem onClick={handleDeleteClick}>삭제</MenuItem>
          <MenuItem onClick={() => handleReactionClick('👍')}>👍</MenuItem>
        </Menu>
      </div>

      <ProfileWrapper show={!shouldHideProfileAndTime}>
        <ProfileSection avatar_url={message.avatarUrl} status={message.status} />
      </ProfileWrapper>

      <MessageWrapper>
        {!shouldHideProfileAndTime && <UserName>{message.userName}</UserName>}

        <MessageInfoWrapper>
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <MessageContent text={message.text} image_url={message.imageUrl} files={message.files} />
          )}
        </MessageInfoWrapper>

        <MessageFooterWrapper>
          {shouldShowTimeAndProfile && (
            <>
              <MessageTime time={message.time} />
              <ReadStatus is_read={message.isRead} />
            </>
          )}
          {Object.keys(reactions).length > 0 && (
            <ReactionWrapper>
              {Object.entries(reactions).map(([emoji, count]) => (
                <span key={emoji}>
                  {emoji} {count}
                </span>
              ))}
            </ReactionWrapper>
          )}
        </MessageFooterWrapper>

        {message.files && message.files.length > 0 && (
          <FileDownloadLink href={message.files[0].url} download={message.files[0].name}>
            <FaDownload size={20} />
          </FileDownloadLink>
        )}
      </MessageWrapper>
    </MessageCardContainer>
  );
};

export default MessageCardComponent;

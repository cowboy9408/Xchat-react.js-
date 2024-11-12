import styled from 'styled-components';

export const MoreButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: -20px;
  font-size: 10px;
  color: #bbb;
  padding: 3px;
  border-radius: 50%;
  visibility: hidden;
  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
  }
  transition: all 0.2s ease;
`;

export const MessageCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  max-width: 80%;
  position: relative;
  &:hover ${MoreButton} {
    visibility: visible;
  }
`;

export const ProfileWrapper = styled.div`
  width: 40px;
  margin-right: 10px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

export const UserName = styled.span`
  font-size: 14px;
  color: #f0f0f0;
  margin-bottom: 5px;
`;

export const MessageInfoWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  color: white;
  max-width: 100%;
  word-wrap: break-word;
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0px;
  left: 100%;
  background: #333;
  padding: 5px 10px;
  border-radius: 5px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 100;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  ${({ show }) =>
    show &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;

export const MenuItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  &:hover {
    background-color: #444;
  }
`;

export const MessageFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.75rem;
  color: gray;
  margin-top: 5px;
`;

export const ReactionWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 10px;
  color: yellow;
  font-size: 14px;
`;

export const FileDownloadLink = styled.a`
  display: inline-block;
  color: #3a8fff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: -30px;
  &:hover {
    color: #1a5fcc;
  }
`;

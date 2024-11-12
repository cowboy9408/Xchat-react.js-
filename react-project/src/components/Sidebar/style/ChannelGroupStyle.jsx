import styled from 'styled-components';

export const ChannelCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.accent : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }
  ${({ isSelected }) => isSelected && `
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  `}
`;

export const ChannelName = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;

  &::before {
    content: '#';
    margin-right: 6px;
    color: ${({ theme }) => theme.text};
  }
`;

export const Badge = styled.div`
  background-color: red;
  color: white;
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 3px 7px;
  font-weight: bold;
  display: ${({ unread }) => (unread > 0 ? 'inline-block' : 'none')};
`;

export const AddChannelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const AddChannelInput = styled.input`
  padding: 6px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
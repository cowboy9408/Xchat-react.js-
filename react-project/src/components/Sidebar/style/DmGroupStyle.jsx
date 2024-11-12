import styled from 'styled-components';

export const DmCard = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.accent : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }
`;

export const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${({ iconUrl }) => iconUrl});
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 2px solid ${({ theme }) => theme.text};
`;

export const DmName = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 10px;
`;

export const Badge = styled.div`
  background-color: red;
  color: white;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 3px 6px;
  font-weight: bold;
  margin-left: auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
import styled from 'styled-components';

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2d31;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1550px;
  gap: 15px;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  background-color: #40444b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;

  &:focus {
    background-color: #484c52;
    outline: none;
  }

  &::placeholder {
    color: #b9bbbe;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconButton = styled.div`
  font-size: 1.4em;
  color: #b9bbbe;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #7289da;
  }
`;

export const SendButton = styled.button`
  background-color: #7289da;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 7px 17px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  overflow-x: auto;
  gap: 10px;
`;

export const PreviewImage = styled.img`
  max-width: 80px;
  max-height: 80px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const PreviewWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 80px;
  max-height: 80px;
  overflow: hidden;
  border-radius: 8px;
`;

export const RemovePreview = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 0, 0, 0.7);
  }
`;
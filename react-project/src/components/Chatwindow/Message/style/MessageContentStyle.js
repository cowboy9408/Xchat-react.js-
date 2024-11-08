import styled from 'styled-components';

export const TextContent = styled.p`
  font-size: 14px;
  color: white;
  margin: 0;
  white-space: pre-wrap;
`;

export const ImageContent = styled.img`
  max-width: 100%;
  max-height: 250px;
  margin-top: 10px;
  border-radius: 10px;
  object-fit: contain;
`;

export const Link = styled.a`
  color: #3a8fff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1a5fcc;
  }
`;

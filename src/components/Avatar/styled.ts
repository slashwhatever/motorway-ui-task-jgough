import styled from "styled-components";

export const StyledAvatar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  flex: 1 0 auto;
  background: white;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5000px;
`;

export const StyledMetaData = styled.div`
  display: flex;
  flex-direction: column;
`;

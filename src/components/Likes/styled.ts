import styled from "styled-components";

export const StyledLikes = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 0.5rem;
  background: white;
  padding: 0 0.75rem 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;

export const StyledHeartIcon = styled.span`
  color: red;
`;

export const IconWrapper = styled.span<{ color?: string }>`
  background-color: ${(props) => props.color};
  padding: 0.5rem;
`;

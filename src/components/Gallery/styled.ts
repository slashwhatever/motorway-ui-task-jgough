import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;

  @container (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: 400px;
    grid-gap: 1rem;
    grid-auto-flow: dense;

    & li:nth-child(4n) {
      grid-column: span 2;
      grid-row: span 2;
    }

    & li:nth-child(8n) {
      grid-column: span 3;
      grid-row: span 1;
    }
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #ccc;
  position: relative;
  box-shadow: 0 0 0px 0px rgba(151, 151, 151, 0);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  & > figure > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 0 10px 5px rgba(151, 151, 151, 0.3);
  }
`;

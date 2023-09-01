import { styled } from "styled-components";

export const StyledModal = styled.div<{ $isVisible?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background: rgb(10 10 10 / 60%);
  z-index: 999;
`;

export const ModalInner = styled.div`
  position: relative;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: white;
  overflow: hidden;
`;

export const StyledSidebar = styled.div`
  padding: 1rem;
  height: 100%;
  width: 400px;
  background-color: rgb(10 10 10 / 90%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledContent = styled.div`
  height: 100%;
  flex-grow: 1;
  position: relative;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & .error {
    border-color: red;
  }

  & [role="alert"] {
    color: red;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid white;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
`;

import { ImageFile } from "../../types";
import { StyledModal, ModalInner } from "./styled";
import Content from "./Content";
import Sidebar from "./Sidebar";

type ModalProps = {
  file?: ImageFile;
  isVisible: boolean;
  onClose: () => void;
};

const Modal = ({ file, isVisible, onClose }: ModalProps): JSX.Element => {
  return (
    <StyledModal $isVisible={isVisible} role="dialog">
      <ModalInner>
        <Content file={file} onClick={onClose} />
        <Sidebar user={file?.user} />
      </ModalInner>
    </StyledModal>
  );
};

export default Modal;

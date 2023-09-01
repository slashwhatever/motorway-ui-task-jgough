import { ImageFile } from "../../types";
import { StyledContent, StyledButton } from "./styled";
import { Image } from "../index";

type ContentProps = {
  file?: ImageFile;
  onClick: () => void;
};

const Content = ({ file, onClick }: ContentProps): JSX.Element => {
  return (
    <StyledContent>
      <StyledButton onClick={onClick}>Close</StyledButton>
      {file && <Image alt={file?.alt_description} src={`${file?.url}.jpg`} />}
    </StyledContent>
  );
};

export default Content;

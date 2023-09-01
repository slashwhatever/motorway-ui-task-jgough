import { ScrollPosition } from "react-lazy-load-image-component";
import { StyledLazyImage } from "./styled";
import { ImageFile } from "../../types";

type ImageProps = {
  alt?: ImageFile["alt_description"];
  height?: string;
  src?: ImageFile["url"];
  width?: string;
  scrollPosition?: ScrollPosition;
  onClick?: () => void;
};

const Image = ({
  alt,
  height = "1000px",
  src,
  width = "1000px",
  scrollPosition,
  onClick,
}: ImageProps): JSX.Element => {
  return (
    <StyledLazyImage
      src={src}
      alt={alt}
      onClick={onClick}
      height={height}
      width={width}
      scrollPosition={scrollPosition}
      placeholder={
        <span
          style={{
            height: 200,
            width: 200,
          }}
        >
          Loading image...
        </span>
      }
    />
  );
};

export default Image;

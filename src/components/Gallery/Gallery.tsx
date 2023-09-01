import {
  ScrollPosition,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { Avatar, Image, Likes, Modal } from "../index";
import { StyledList, StyledListItem } from "./styled";
import { ImageFile } from "../../types";
import { useModal } from "../../hooks/useModal";
import { useRef, useState } from "react";
import { useInfiniteScroll } from "../../hooks";

type GalleryProps = {
  images?: ImageFile[];
  scrollPosition: ScrollPosition;
};

const Gallery = ({ images, scrollPosition }: GalleryProps): JSX.Element => {
  const bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef);

  const [fullSizeFile, setFullSizeFile] = useState<ImageFile | undefined>();

  const { isVisible, show, hide } = useModal();

  const handleClick = (file: ImageFile) => {
    setFullSizeFile(file);
    show();
  };

  const handleClose = () => {
    setFullSizeFile(undefined);
    hide();
  };

  return (
    <>
      <Modal isVisible={isVisible} file={fullSizeFile} onClose={handleClose} />
      <StyledList>
        {images &&
          images.map((img) => (
            <StyledListItem key={img.id}>
              <Image
                onClick={() => handleClick(img)}
                src={`${img.url}.jpg`}
                alt={img.alt_description}
                scrollPosition={scrollPosition}
              />
              <Likes likes={img.likes} color={img.color} />
              <Avatar user={img.user} />
            </StyledListItem>
          ))}
      </StyledList>
      <div id="page-boundary" ref={bottomBoundaryRef} />
    </>
  );
};

export default trackWindowScroll(Gallery);

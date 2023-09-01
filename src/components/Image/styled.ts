import { styled } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const StyledLazyImage = styled(LazyLoadImage)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

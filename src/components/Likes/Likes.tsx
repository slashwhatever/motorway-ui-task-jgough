import { StyledHeartIcon, StyledLikes, IconWrapper } from "./styled";
import { ImageFile } from "../../types";

type LikesProps = {
  likes: ImageFile["likes"];
  color: ImageFile["color"];
};

const Likes = ({ likes, color }: LikesProps): JSX.Element => {
  return (
    <StyledLikes>
      <IconWrapper color={color}>
        <StyledHeartIcon
          className="fa-solid fa-heart"
          role="img"
          aria-label="Like"
        />
      </IconWrapper>
      {likes}
    </StyledLikes>
  );
};

export default Likes;

import { User } from "../../types";
import { StyledAvatar, StyledImage, StyledMetaData } from "./styled";

type AvatarProps = {
  user: User;
};

const Avatar = ({ user }: AvatarProps): JSX.Element => {
  return (
    <StyledAvatar>
      <StyledImage src={`${user.profile_image}.webp`} alt={`${user.name}`} />
      <StyledMetaData>
        <p>Author: {user.name}</p>
        {user.location && <p>Location: {user.location}</p>}
      </StyledMetaData>
    </StyledAvatar>
  );
};

export default Avatar;

import { User } from "../../types";
import { StyledSidebar } from "./styled";
import Form from "./Form";

type SidebarProps = {
  user?: User;
};

const Sidebar = ({ user }: SidebarProps): JSX.Element => {
  return (
    <StyledSidebar>
      <div>
        <h1>{user?.name}</h1>
        <h2>{user?.location}</h2>
        <p>{user?.bio}</p>
      </div>
      <Form />
    </StyledSidebar>
  );
};

export default Sidebar;

import { StyledButton } from "./styled";

type ButtonProps = {
  text: string;
  className: string;
  onClick: () => void;
};

const Button = ({ text, className, onClick }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {text}
    </StyledButton>
  );
};

export default Button;

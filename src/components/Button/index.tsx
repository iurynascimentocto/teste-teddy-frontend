import { ButtonContainer } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: number;
  outline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const ButtonMain = (props: IProps) => {
  const size = props.size ?? "md";

  return (
    <ButtonContainer {...props} size={size}>
      <span>{props.label}</span>
    </ButtonContainer>
  );
};

import { ButtonContainer } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: number
}

export const ButtonMain = (props: IProps) => {
  return (
    <ButtonContainer {...props} width={props.width}>
      <span>{props.label}</span>
    </ButtonContainer>
  );
};

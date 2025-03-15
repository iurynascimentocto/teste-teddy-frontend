import { InputContainer } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number;
}

export const InputMain = (props: IProps) => {
  return <InputContainer {...props} width={props.width} />;
};

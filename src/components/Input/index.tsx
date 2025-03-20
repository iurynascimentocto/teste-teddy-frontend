import { InputContainer } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  inputSize?: "sm" | "md" | "lg";
}

export const InputMain = (props: IProps) => {
  const size = props.inputSize ?? "md";

  return <InputContainer {...props} width={props.width} size={size} />;
};

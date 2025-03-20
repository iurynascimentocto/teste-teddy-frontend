import styled from "styled-components";

// Definindo as propriedades de tamanho e fonte
const inputHeight = {
  sm: 30,
  md: 40,
  lg: 60,
};

const fontSize = {
  sm: 12,
  md: 16,
  lg: 24,
};

const padding = {
  sm: 10,
  md: 14,
  lg: 20,
};

export const InputContainer = styled.input<{
  width?: number;
  size: "sm" | "md" | "lg";
}>`
  height: ${({ size }) => `${inputHeight[size]}px`};
  border-radius: 4px;

  background-color: transparent;
  border: 2px ${({ theme }) => theme.palette.grey[300]} solid;
  width: ${({ width }) => (width ? `${width}px` : "100%")};

  padding: 0 ${({ size }) => `${padding[size]}px`};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ size }) => `${fontSize[size]}px`};

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: ${({ size }) => `${fontSize[size]}px`};
  }

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    outline: none;
  }
`;

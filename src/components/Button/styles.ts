import styled from "styled-components";

// Definindo as propriedades de tamanho e fonte
const buttonHeight = {
  sm: 30,
  md: 40,
  lg: 60,
};

const fontSize = {
  sm: 12,
  md: 14,
  lg: 24,
};

// O ButtonContainer recebe a tipagem que define 'size', 'outline' e 'width'
export const ButtonContainer = styled.button<{
  width?: number;
  outline?: boolean;
  size: "sm" | "md" | "lg";
}>`
  /* Definindo a altura do botão de acordo com o tamanho */
  height: ${({ size }) => `${buttonHeight[size]}px`};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Background e borda de acordo com a propriedade 'outline' */
  background-color: ${({ theme, outline }) =>
    outline ? "transparent" : theme.palette.primary.main};

  border: 2px ${({ theme }) => theme.palette.primary.main} solid;

  /* Largura ajustável com base na propriedade 'width' */
  width: ${({ width }) => (width ? `${width}px` : "100%")};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    border: 2px ${({ theme }) => theme.palette.grey[300]} solid;

    /* Alteração de cor e fonte do texto ao passar o mouse */
    span {
      color: ${({ theme, outline }) =>
        outline ? theme.palette.text.primary : theme.palette.text.secondary};
      font-size: ${({ size }) => `${fontSize[size]}px`};
      font-weight: 700;
    }
  }

  /* Estilo inicial do texto dentro do botão */
  span {
    color: ${({ theme, outline }) =>
      outline ? theme.palette.primary.main : theme.palette.text.secondary};
    font-size: ${({ size }) => `${fontSize[size]}px`};
    font-weight: 700;
  }
`;

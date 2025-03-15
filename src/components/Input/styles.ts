import styled from "styled-components";

export const InputContainer = styled.input<{ width?: number }>`
  height: 60px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.palette.background.default};
  border: 2px ${({ theme }) => theme.palette.grey[300]} solid;
  width: ${({ width }) => (width ? `${width}px` : "100%")};

  padding: 0 20px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 24px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    outline: none;
  }
`;

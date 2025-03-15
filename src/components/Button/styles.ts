import styled from "styled-components";

export const ButtonContainer = styled.button<{ width?: number }>`
  height: 60px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  width: ${({ width }) => (width ? `${width}px` : "100%")};

  &:hover {
    border: 2px ${({ theme }) => theme.palette.grey[300]} solid;
  }

  span {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 24px;
    font-weight: 700;
  }
`;

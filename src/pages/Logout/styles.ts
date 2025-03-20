import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

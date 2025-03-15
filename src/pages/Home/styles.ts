import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};

  h1 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
  }
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 521px;
`;

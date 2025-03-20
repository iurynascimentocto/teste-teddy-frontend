import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
  border-radius: 4px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.palette.text.primary};

  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  svg {
    font-size: 20px;
    height: 20px;
    width: 20px;

    cursor: pointer;
  }
`;

export const BodyContainer = styled.div`
  margin-top: 15px;
`;

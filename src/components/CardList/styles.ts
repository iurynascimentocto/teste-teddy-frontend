import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  height: 138px;
  border-radius: 4px;

  box-shadow: 0px 0px 4px 0px #0000001a;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  color: ${({ theme }) => theme.palette.text.primary};

  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 7px;

  svg {
    font-size: 20px;
    height: 20px;
    width: 20px;

    cursor: pointer;
  }

  .delete {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;

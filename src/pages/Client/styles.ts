import styled from "styled-components";

export const ContainerPage = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  margin: 20px 0;
`;

export const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  margin-bottom: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const QtdFoundPerPage = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  font-weight: 400;
`;

export const ClientPerPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;

  span {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 18px;
    font-weight: 400;
  }

  .MuiInputBase-root {
    height: 25px;
    font-size: 12px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;

  .MuiPaginationItem-root {
    border-radius: 4px;
    width: 35px;
    height: 35px;

    font-size: 14px;
    font-weight: 700;
  }
  .MuiPaginationItem-root.Mui-selected {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 35px;
    height: 35px;
  }
  .MuiPaginationItem-ellipsis {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

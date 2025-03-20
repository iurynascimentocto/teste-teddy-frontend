import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

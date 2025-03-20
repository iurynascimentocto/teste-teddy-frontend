import styled from "styled-components";

export const BodyContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: ${({ theme }) => theme.palette.error.main};
    margin: 0;
    font-size: 12px;
    margin-top: 3px;
    font-weight: 600;
  }
`;

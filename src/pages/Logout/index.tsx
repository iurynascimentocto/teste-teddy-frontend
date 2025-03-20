import { useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";

import { useUserStore } from "../../store/userStore";

import { ContainerPage } from "./styles";

export const LogoutPage = () => {
  const { clearUser } = useUserStore();

  useEffect(() => {
    clearUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ContainerPage>
        <CircularProgress />
      </ContainerPage>
    </Container>
  );
};

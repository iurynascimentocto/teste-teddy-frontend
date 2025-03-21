import { useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { CircularProgress, Container } from "@mui/material";

import { useUserStore } from "../../store/userStore";

import { ContainerPage } from "./styles";

export const LogoutPage = () => {
  const { t } = useTranslation();

  const { clearUser } = useUserStore();

  useEffect(() => {
    clearUser();
    toast.success(t("logout_user_alert"));
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

import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export const ClientPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("client_message")}</h1>
    </Container>
  );
};

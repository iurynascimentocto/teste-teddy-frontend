import { useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ButtonMain } from "../../components/Button";

import { ContainerPage, ContentPage } from "./styles";
import { InputMain } from "../../components/Input";

export const HomePage = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name) {
      // Redireciona para a lista de clientes
      navigate("/clients");

      // TODO: Salva sessao como esse fosse login
    }
  };

  return (
    <Container>
      <ContainerPage>
        <ContentPage>
          <h1>{t("home_welcome_message")}</h1>

          <InputMain
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("home_input_placeholder")}
          />

          <ButtonMain
            label={t("home_button_label_open")}
            size="lg"
            onClick={handleSubmit}
          />
        </ContentPage>
      </ContainerPage>
    </Container>
  );
};

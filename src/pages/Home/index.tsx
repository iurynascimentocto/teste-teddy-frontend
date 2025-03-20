import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ButtonMain } from "../../components/Button";
import { InputMain } from "../../components/Input";

import { useUserStore } from "../../store/userStore";

import { ContainerPage, ContentPage } from "./styles";

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const { user, setUser } = useUserStore();

  const handleSubmit = () => {
    if (name.length > 1) {
      setUser({ name });
    }
  };

  useEffect(() => {
    if (user?.name.length > 1) {
      navigate("/clients");
    }
    // eslint-disable-next-line
  }, [user?.name]);

  return (
    <Container>
      <ContainerPage>
        <ContentPage>
          <h1>{t("home_welcome_message")}</h1>

          <InputMain
            type="text"
            inputSize="lg"
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

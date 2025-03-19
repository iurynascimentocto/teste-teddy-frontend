import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import {
  Header,
  HeaderContainer,
  Logo,
  NavItems,
  NavLink,
  UserLabel,
} from "./styles";

export const LayoutHeader = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const [pathCurrent, setPathCurrent] = useState<string>(location?.pathname);

  const userName = "Usuario";

  const items = [
    {
      name: t("nav_label_clients"),
      path: "clients",
    },
    {
      name: t("nav_label_clients_selected"),
      path: "clients/selected",
    },
    {
      name: t("nav_label_logout"),
      path: "logout",
    },
  ];

  useEffect(() => {
    setPathCurrent(location?.pathname);
  }, [location?.pathname]);

  return (
    <Header>
      <Container>
        <HeaderContainer>
          <Logo />

          <NavItems>
            {items.map((item, key) => {
              const isActive = pathCurrent === `/${item.path}`;

              return (
                <NavLink
                  key={key}
                  to={`/${item.path}`}
                  className={isActive ? "active" : ""}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </NavItems>

          <UserLabel>
            <span>{t("nav_user_hello")},</span> <strong>{userName}</strong>!
          </UserLabel>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

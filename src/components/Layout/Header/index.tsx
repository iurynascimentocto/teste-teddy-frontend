import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MenuHeader } from "./Menu";

import {
  Header,
  MenuIconContainer,
  HeaderContainer,
  Logo,
  NavItems,
  NavLink,
  UserLabel,
} from "./styles";

export const LayoutHeader = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const location = useLocation();

  const [pathCurrent, setPathCurrent] = useState<string>(location?.pathname);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    setPathCurrent(location?.pathname);
  }, [location?.pathname]);

  return (
    <>
      <MenuHeader isOpen={openMenu} onClose={handleMenu} pathCurrent={pathCurrent} />

      <Header>
        <Container
          disableGutters={isMobile}
          maxWidth="xl"
          className="container_main_header"
        >
          <MenuIconContainer>
            <MenuIcon onClick={handleMenu} />
          </MenuIconContainer>

          <Container>
            <HeaderContainer>
              <MenuIconContainer mobile>
                <MenuIcon onClick={handleMenu} />
              </MenuIconContainer>

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

          <MenuIconContainer />
        </Container>
      </Header>
    </>
  );
};

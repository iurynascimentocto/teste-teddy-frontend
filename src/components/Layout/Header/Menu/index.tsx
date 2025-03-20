import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  DrawerContainer,
  MenuContainer,
  LogoContainer,
  Logo,
  ListContainer,
  BtnClose,
} from "./styles";

interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
  pathCurrent?: string;
}

export const MenuHeader: React.FC<IProps> = ({
  isOpen,
  onClose,
  pathCurrent,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const items = [
    {
      icon: <PersonIcon />,
      name: t("nav_label_clients"),
      path: "clients",
    },
    {
      icon: <PersonAddIcon />,
      name: t("nav_label_clients_selected"),
      path: "clients/selected",
    },
    {
      icon: <LogoutIcon />,
      name: t("nav_label_logout"),
      path: "logout",
    },
  ];

  const goRouter = (path: string) => {
    navigate(path);

    if (onClose) {
      onClose();
    }
  };

  return (
    <DrawerContainer open={isOpen} onClose={onClose}>
      <MenuContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <ListContainer>
          <BtnClose onClick={onClose}>
            <ArrowCircleLeftIcon />
          </BtnClose>
          <List>
            {items.map((item, index) => {
              const isActive = pathCurrent === `/${item.path}`;

              return (
                <ListItem
                  key={index}
                  disablePadding
                  className={isActive ? "active_menu" : ""}
                  onClick={() => {
                    goRouter(`/${item.path}`);
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </ListContainer>
      </MenuContainer>
    </DrawerContainer>
  );
};

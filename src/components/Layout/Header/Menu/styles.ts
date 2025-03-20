import Drawer from "@mui/material/Drawer";
import styled from "styled-components";

export const DrawerContainer = styled(Drawer)`
  .MuiPaper-root {
    overflow: unset;
    border-top-right-radius: 25px;
  }
`;

export const MenuContainer = styled.div`
  width: 260px;
`;

export const LogoContainer = styled.div`
  background-color: #363636;
  border-top-right-radius: 25px;
  width: 100%;
  height: 128px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100px;
  height: 49px;
  background-image: url("/teddy-logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px 49px;
`;

export const ListContainer = styled.div`
  position: relative;
  padding-top: 48px;
  padding-left: 24px;

  ul {
    padding: 0px;
    .MuiButtonBase-root {
      padding: 14px;
      .MuiListItemIcon-root {
        min-width: 40px;
      }
      .MuiTypography-root {
        font-size: 14px;
        font-weight: 500;
      }
    }
    svg {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  .active_menu {
    .MuiTypography-root {
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    svg {
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    .MuiButtonBase-root {
      border-right: 2px ${({ theme }) => theme.palette.primary.main} solid;
    }
  }
`;

export const BtnClose = styled.div`
  position: absolute;
  z-index: 999;
  top: -21px;
  right: -21px;

  background-color: #1f1f1f;
  border-radius: 100px;
  height: 42px;
  width: 42px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 20px;
    height: 20px;
    width: 20px;
  }
`;

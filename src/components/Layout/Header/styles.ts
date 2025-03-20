import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  width: 100%;

  .container_main_header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuIconContainer = styled.div<{ mobile?: boolean }>`
  flex: 1;
  display: ${({ mobile }) => (mobile ? "none" : "flex")};
  flex-direction: row;
  justify-content: ${({ mobile }) => (mobile ? "flex-start" : " flex-end")};
  align-items: center;

  height: 100%;
  width: 30px;

  padding-right: 22px;

  svg {
    color: ${({ theme }) => theme.palette.text.primary};
    cursor: pointer;
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  @media (max-width: 1200px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    padding-right: 0;
    flex: none;
  }

  @media (max-width: 800px) {
    position: absolute;
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    padding-right: 0;
    flex: none;
  }

  @media (max-width: 480px) {
    position: absolute;
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    padding-right: 0;
    flex: none;
  }
`;

export const HeaderContainer = styled.div`
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  height: 49px;
  width: 100px;
  background-image: url("/teddy-logo.png");
  background-repeat: no-repeat;
  background-size: 100px 49px;
  cursor: pointer;

  @media (max-width: 1200px) {
    flex: 1;
  }

  @media (max-width: 800px) {
    flex: 1;
    background-position: center;
  }

  @media (max-width: 480px) {
    flex: 1;
    background-position: center;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
  }
`;

export const UserLabel = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 16px;

  @media (max-width: 1200px) {
    flex: 1;
    text-align: right;
  }

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

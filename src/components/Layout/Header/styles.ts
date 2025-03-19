import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
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
  background-position: center;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
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
`;

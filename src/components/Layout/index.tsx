import { useEffect } from "react";
import { Outlet } from "react-router-dom"; // Aqui vem a mudança importante
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../store/userStore";

import { LayoutHeader } from "./Header";

export const Layout = () => {
  const navigate = useNavigate();

  const { user } = useUserStore();

  useEffect(() => {
    if (!(user?.name.length > 1)) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [user?.name]);

  return (
    <div>
      {/* Componente Header */}
      <LayoutHeader />

      {/* Conteúdo da página */}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

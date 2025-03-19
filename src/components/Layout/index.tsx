import { Outlet } from "react-router-dom"; // Aqui vem a mudança importante
import { Container } from "@mui/material";
import { LayoutHeader } from "./Header";

export const Layout = () => {
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

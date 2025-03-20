import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";

import { HomePage } from "../pages/Home";
import { ClientPage } from "../pages/Client";
import { LogoutPage } from "../pages/Logout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<Layout />}>
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clients/selected" element={<>a</>} />
        <Route path="/logout" element={<LogoutPage />} />
      </Route>
    </Routes>
  );
}

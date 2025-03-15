import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { ClientPage } from "../pages/Client";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clients" element={<ClientPage />} />
    </Routes>
  );
}

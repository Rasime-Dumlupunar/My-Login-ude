import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../utils/pages";
import LoginPage from "../Login/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;

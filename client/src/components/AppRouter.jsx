import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Registration from "../pages/Registration/Registration";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={Component} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={Component} exact />;
      })}

      <Route path="*" element={<Registration />} />
    </Routes>
  );
};

export default AppRouter;

import { Routes, Route, useRoutes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import { retunLocarStoreString } from "../utils/LocalStore";
import { ProtectedRoute } from "./ProtectedRoute";

const Registration: Component = lazy(() => import("../components/form/form"));

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Login/Auth")),
  },
  {
    path: "/home",
    element: routerChildren,
  },
];

function routerChildren() {

  let profileExists:boolean = retunLocarStoreString("profile") != ""; 

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={profileExists} path={"/"}>
            <Registration />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function AppRouter() {
  const RouterUser = useRoutes(routes);

  return <RouterUser />;
}
export default AppRouter;

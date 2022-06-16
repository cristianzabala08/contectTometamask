import { Routes, Route, useRoutes, useNavigate } from "solid-app-router";
import { Component, createSignal, lazy } from "solid-js";
import { retunLocarStoreString } from "../utils/LocalStore";
import { ProtectedRoute } from "./ProtectedRoute";
import LangDrup from "../components/Lang/LangDrop";
import Home from "../pages/home/Home";
import Registration from "../components/form/form";
import Login from "../pages/Login/Auth";

function AppRouter(props: { clicks?: (e: string) => void }) {
  const navigate = useNavigate();
  let profileExists: boolean = retunLocarStoreString("profile") != "";
  
  function sendToHome() {
    profileExists = retunLocarStoreString("profile") != "";
    navigate("/home", { replace: true });
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <LangDrup
                click={(e) => {
                  props.clicks?.(e);
                }}
              />
              <Login click={() => sendToHome()} />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute path={"/"} user={profileExists}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <ProtectedRoute path={"/"} user={profileExists}>
              <Registration />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
export default AppRouter;

import { Routes, Route, useNavigate } from "solid-app-router";
import { retunLocarStoreString } from "../utils/LocalStore";
import { ProtectedRoute } from "./ProtectedRoute";
import LangDrup from "../components/Lang/LangDrop";
import Home from "../pages/home/Home";
import Registration from "../components/form/form";
import Login from "../pages/Login/Auth";
import  { Toaster } from 'solid-toast';

function AppRouter(props: { clicks?: (e: string) => void }) {
  const navigate = useNavigate();


  return (
      <Routes>
      <Route path="/" element={<div>asdasdasd</div>} outlet={() => null} />
{/*         <Route
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
        /> */}
      </Routes>
  );
}
export default AppRouter;

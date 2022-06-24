import {
  Component,
  createEffect,
  createSignal,
  Match,
  Switch,
} from "solid-js";
import NavHome from "../../components/dashboard/Navbar/NavHome";
import { NavBarHome } from "../../components/dashboard/Nav/NavBarHome";
import { Container, Toast } from "solid-bootstrap";
import { HomePages } from "../../components/dashboard/home/Home";
import { ProfileHome } from "../../components/dashboard/Profile/Profile";
import { getCurrentWalletConnected } from "../../utils/walletConnect";
import { useNavigate } from "solid-app-router";
import { getProfileSevices } from "../../utils/Query";
import { createLocaStrore } from "../../utils/LocalStore";
import { ToastServices } from "../../utils/Toasts";

const Home: Component = () => {
  const [viewSelected, setViewSelected] = createSignal("all");
  const [walletAddress, setWallet] = createSignal<string>("");
  const navigate = useNavigate();

  createEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    await profileExist(address);
    await addWalletListener();
    if (status.succes === false) {
      cleanLocalStorage();
    }
  });

  function cleanLocalStorage() {
    localStorage.removeItem("profile");
    navigate("/");
    ToastServices("success", "You are not logged in",);
  }

  async function profileExist(walletId: string) {
    try {
      const { data, error } = await getProfileSevices(walletId);
      if (data != null) {
        createLocaStrore("profile", walletId);
        setWallet(walletId);
      } else if (data == null) {
        cleanLocalStorage();
      }
    } catch (error: any) {
      ToastServices("error", error.message);
    }
  }

  async function addWalletListener() {
    window.ethereum.on("accountsChanged", async function (accounts: any) {
      if (accounts.length > 0) {
        await profileExist(accounts[0]);
      }
    });
  }

  return (
    <>
      <NavHome setView={setViewSelected} view={viewSelected}>
        <NavBarHome />
        <Container class="mt-5 pt-3">
          <Switch fallback={<HomePages />}>
            <Match when={viewSelected() === "profile"}>
              <ProfileHome walletId={walletAddress()} />
            </Match>
            <Match when={viewSelected() === "settings"}>
              <div>comple</div>
            </Match>
          </Switch>
        </Container>
      </NavHome>
    </>
  );
};

export default Home;

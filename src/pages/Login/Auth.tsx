import { createEffect, createSignal } from "solid-js";
import { useI18n } from "../../contexts/i18n/context";
import {
  createLocaStrore,
  retunLocarStoreString,
} from "../../utils/LocalStore";
import logo from "../../logo.svg";
import { useSearchParams } from "solid-app-router";
import { getProfileSevices, insertServices } from "../../utils/Query";
import { Button } from "solid-bootstrap";
import { connectWallet } from "../../utils/walletConnect";
import { Modals } from "../../components/modal/Modal";

const Account = (props: { click?: () => void }) => {
  const [show, setShow] = createSignal<boolean>(false);
  const [status, setStatus] = createSignal<any>();
  const [searchParams] = useSearchParams();
  const i18n: any = useI18n();
  const RefId = searchParams.ref;

  createEffect(() => {
    checkProfile();
    console.log("asdasdas");
  });

  function checkProfile(): void {
    let profile: string = retunLocarStoreString("profile");
    if (profile != "") {
      getProfile(profile);
    }
  }

  const getProfile = async (walletId: string) => {
    try {
      let { data, error } = await getProfileSevices(walletId);

      switch (data) {
        case null:
          {
            await saveUserWallet(walletId);
          }
          break;
        default:
          {
            createLocaStrore("profile", walletId);
            props.click?.();
          }
          break;
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const saveUserWallet = async (wallet: string) => {
    try {
      const userWallet = {
        walletId: wallet,
        updated_at: new Date(),
      };

      let { error } = await insertServices("userWallet", userWallet);

      await savesRefer(wallet);

      createLocaStrore("profile", wallet);

      if (RefId != null) {
        savesRefFromUser(wallet);
      }

      props.click?.();

      erros(error);
    } catch (error: any) {
      alert(error.message);
    }
  };

  async function savesRefer(wallet: string): Promise<void> {
    try {
      const userRef = { id: wallet, created_at: new Date() };

      let { error } = await insertServices("userRefer", userRef);

      erros(error);
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function savesRefFromUser(wallet: string): Promise<void> {
    try {
      const userRef = { userRefId: atob(RefId), walletRefId: wallet };

      let { error } = await insertServices("ref", userRef);

      erros(error);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function erros(error: any): void {
    if (error) {
      alert(error.message);
    }
  }

  function handleClose(): void {
    setShow(false);
  }

  async function onClick(): Promise<void> {
    let { data, status } = await connectWallet();
    if (status.succes) {
      getProfile(data);
    } else {
      setShow(true);
      setStatus(status.messege);
    }
  }

  return (
    <>
      <Modals
        title="error"
        body={status()}
        show={show()}
        handleClose={handleClose}
      />
      <div class=" container-fluid align-content-center d-flex justify-content-center flex-column ">
        <div class="align-content-center d-flex justify-content-center">
          <img src={logo} class="logo" alt="logo" />
        </div>
        <div class="align-content-center d-flex justify-content-center">
          <Button onclick={() => onClick()} variant="primary">
            {i18n.t("name")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Account;

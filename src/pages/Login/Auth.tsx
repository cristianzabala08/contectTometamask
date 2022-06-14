import { createEffect } from "solid-js";
import { useI18n } from "../../contexts/i18n/context";
import {
  createLocaStrore,
  retunLocarStoreString,
} from "../../utils/LocalStore";
import { supabase } from "../../utils/supabaseClient";
import logo from "../../logo.svg";
import { useNavigate } from "solid-app-router";

const Account = () => {
  const i18n: any = useI18n();
  const navigate = useNavigate();

  createEffect(() => {
    checkProfile();
  });

  function checkProfile(): void {
    let profile: string = retunLocarStoreString("profile");
    if (profile != "") {
      getProfile(profile);
    }
  }

  const getProfile = async (walletId: string) => {
    try {
      let { data, error, status } = await supabase
        .from("userWallet")
        .select(`id, walletId`)
        .eq("walletId", walletId)
        .single();

      switch (data) {
        case null:
          {
            await saveUserWallet(walletId);
          }
          break;
        default:
          {
            createLocaStrore("profile", walletId);
            navigate("/home", { replace: true });
          }
          break;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
    }
  };

  const saveUserWallet = async (wallet: string) => {
    try {
      const updates = {
        walletId: wallet,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("userWallet").insert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      await supabase.from("userRefer").insert(
        { id: wallet, created_at: new Date() },
        {
          returning: "minimal", // Don't return the value after inserting
        }
      );

      createLocaStrore("profile", wallet);

      navigate("/home", { replace: true });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
    }
  };

  async function onClick(): Promise<void> {
    if (window.ethereum) {
      if (window.ethereum.networkVersion === "56") {
        try {
          let data: any = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          getProfile(data[0]);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Please connect to Mainnet");
      }
    } else {
      alert("install metamask extension!!");
    }
  }

  return (
    <div class=" container-fluid align-content-center d-flex justify-content-center flex-column ">
      <div class="align-content-center d-flex justify-content-center">
        <img src={logo} class="logo" alt="logo" />
      </div>
      <div class="align-content-center d-flex justify-content-center">
        <button class="btn btn-primary" onclick={() => onClick()}>
          {i18n.t("name")}
        </button>
      </div>
    </div>
  );
};

export default Account;

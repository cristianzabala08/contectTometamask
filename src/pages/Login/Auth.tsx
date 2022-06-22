import { createEffect } from "solid-js";
import { useI18n } from "../../contexts/i18n/context";
import {
    createLocaStrore,
    retunLocarStoreString,
} from "../../utils/LocalStore";
import logo from "../../logo.svg";
import {  useSearchParams } from "solid-app-router";
import { getProfileSevices, insertServices } from "../../utils/Query";
import { Button } from "solid-bootstrap";

const Account = (props:{click?:()=>void}) => {
    const [searchParams] = useSearchParams();
    const i18n: any = useI18n();
    const RefId = searchParams.ref;

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
        console.log();
        
        try {
            const userWallet = {
                walletId: wallet,
                updated_at: new Date(),
            };

            let { error } = await insertServices("userWallet", userWallet);

            await savesRefer(wallet);

            createLocaStrore("profile", wallet);

            if(RefId != null){
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

   /*   const getCurrentWalletConnected = async()=>{
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                })
                console.log(addressArray);
                if(addressArray.length > 0){
                    return {
                        address: addressArray[0],
                        status:"Wallet Connected"
                    }
                }else{
                    return {
                        address: "",
                        status:"Wallet Disconnected"
                }
            }
            } catch (error) {
                
            }
    } */

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
            window.location.href  = "https://metamask.io/download/";
        }
    }

    return (
        <div class=" container-fluid align-content-center d-flex justify-content-center flex-column ">
       
            <div class="align-content-center d-flex justify-content-center">
                <img src={logo} class="logo" alt="logo" />
            </div>
            <div class="align-content-center d-flex justify-content-center">
                <Button  onclick={() => onClick()} variant="primary">{i18n.t("name")}</Button>
            </div>
            
        </div>
    );
};

export default Account;
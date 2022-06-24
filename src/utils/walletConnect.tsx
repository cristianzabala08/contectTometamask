import { JSX } from "solid-js";

async function connectWallet(): Promise<{
  data: string;
  status: { succes: boolean; messege: JSX.Element };
}> {
  if (window.ethereum) {
    if (window.ethereum.networkVersion === "56") {
      try {
        let addressArray: any = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return {
          data: addressArray[0],
          status: { succes: true, messege: " connected" },
        };
      } catch (error: any) {
        return {
          data: "",
          status: {
            succes: false,
            messege: (
              <div>
                <p>{error.message}</p>
              </div>
            ),
          },
        };
      }
    } else {
      return {
        data: "",
        status: {
          succes: false,
          messege: (
            <span>
              <p> 🦊 Please connect to BNB on your BNB</p>
            </span>
          ),
        },
      };
    }
  } else {
    return {
      data: "",
      status: {
        succes: false,
        messege: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={"https://metamask.io/download.html"}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      },
    };
  }
}

async function getCurrentWalletConnected(): Promise<{
  address: string;
  status: { succes: boolean; messege: JSX.Element };
}> {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: {
            succes: true,
            messege: "👆🏽 Write a message in the text-field above.",
          },
        };
      } else {
        return {
          address: "",
          status: {
            succes: false,
            messege: "🦊 Connect to Metamask using the top right button.",
          },
        };
      }
    } catch (err: any) {
      return {
        address: "",
        status: {
          succes: false,
          messege: "😥 " + err.message,
        },
      };
    }
  } else {
    return {
      address: "",
      status: {
        succes: false,
        messege: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      },
    };
  }
}

export { connectWallet,getCurrentWalletConnected };

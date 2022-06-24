import { Container } from "solid-bootstrap";
import { Component, createEffect, createSignal, useContext } from "solid-js";
import { getRefServices } from "../../../utils/Query";
import { ToastServices } from "../../../utils/Toasts";
import "./profile.css";

const Profile: Component<{ walletId: string }> = (props: {
  walletId: string;
}) => {
  const baseUrl = "http://localhost:3000/";
  const [refId, setRefId] = createSignal("");

  createEffect(() => {
    getProfile();
  });

  function copyToClipBoard() {
    navigator.clipboard.writeText(`${baseUrl}?ref=${refId()}`).then(() => {
      ToastServices("Success", "Copied to clipboard",);
    });
  }

  const getProfile = async () => {
    try {
      let { data, error } = await getRefServices(props.walletId);
      setRefId(btoa(data.userRefId));
    } catch (error: any) {
      ToastServices("Error", error.message);
    }
  };

  return (
    <div class="container rounded bg-greay mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold">Edogaru</span>
            <span class="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div>other information</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="justify-content-between align-items-center experience">
              <Container
                fluid
                class=" px-3 p-1 add-experience card bg-greay"
                onClick={copyToClipBoard}
              >
                <div class="d-flex">
                  <i class="fa fa-clone m-1" aria-hidden="true"></i>
                  <h5>link de referencia</h5>
                </div>
                <div id="textArea">{`${baseUrl}?ref=${refId()}`}</div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile as ProfileHome };

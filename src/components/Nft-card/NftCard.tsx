import "./nft-card.css";

/* import Modal from "../Modal/Modal"; */
import { createSignal } from "solid-js";
import { Link } from "solid-app-router";
import { Modal } from "../ModalBuy/Modal";

const NftCard = (props: any) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = createSignal(false);

  return (
    <div class="single__nft__card">
      <div class="nft__img">
        <img src={imgUrl} alt="" class="w-100" />
      </div>

      <div class="nft__content">
        <h5 class="nft__title">
          <Link href={`/market/${id}`}>{title}</Link>
        </h5>

        <div class="creator__info-wrapper d-flex gap-3">
          <div class="creator__img">
            <img src={creatorImg} alt="" class="w-100" />
          </div>

          <div class="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div class="mt-3 d-flex align-items-center justify-content-between">
          <div class="binDiv">
          <button
            class="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Place Bid
          </button>
          </div>
          {showModal() && <Modal setShowModal={setShowModal} />}

          <span class="history__link">
            <Link href="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export { NftCard };

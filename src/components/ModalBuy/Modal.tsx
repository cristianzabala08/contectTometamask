import "./modal.css";

const Modal = (props:any) => {

  return (
    <div class="modal__wrapper">
      <div class="single__modal">
        <span class="close__modal">
        <i class="fa fa-times-circle" onClick={() => props.setShowModal(false)} aria-hidden="true"></i>
        </span>
        <h6 class="text-center text-light">Place a Bid</h6>
        <p class="text-center text-light">
          You must bid at least <span class="money">5.89 ETH</span>
        </p>

        <div class="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div class="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div class=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span class="money">5.89 ETH</span>
        </div>

        <div class=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span class="money">0.89 ETH</span>
        </div>

        <div class=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span class="money">5.89 ETH</span>
        </div>

        <button class="place__bid-btn">Place a Bid</button>
      </div>
    </div>
  );
};

export  {Modal};

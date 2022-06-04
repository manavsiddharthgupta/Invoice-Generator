import React from "react";
import Button from "../Button";
import "./ReviewModal.css";
import ReviewModalInner from "./ReviewModalInner";

const Modal = (props) => {
  return (
    <div onClick={props.onClick} className="modal">
      {props.children}
    </div>
  );
};
const ReviewModal = (props) => {
  const generate = (e) => {
    e.preventDefault();
    console.log("start");
  };

  return (
    <React.Fragment>
      <Modal onClick={props.onSubmit}></Modal>
      <div className="ReviewModal_outer">
        <ReviewModalInner id="content" />
        <div className="generate_btn">
          <Button className="download_invoice" onClick={generate}>
            Download Invoice
          </Button>
          <Button className="send_invoice" onClick={generate}>
            Send Invoice
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ReviewModal;

import React, { useState } from "react";
import ReviewModal from "../ui/Modals/ReviewModal";
import "./Form.css";
import FormInvoice from "./FormInvoice";
import FormReview from "./FormReview";
const Form = () => {
  const [modalView, setModalView] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setModalView((val) => !val);
  };

  return (
    <form className="main_form" onSubmit={onSubmitHandler}>
      <FormInvoice />
      <FormReview />
      {modalView && <ReviewModal onSubmit={onSubmitHandler} />}
    </form>
  );
};
export default Form;

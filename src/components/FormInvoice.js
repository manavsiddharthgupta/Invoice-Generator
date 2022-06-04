import React from "react";
import Allitems from "./Items/Allitems";
import BillingDetails from "./BillingDetails/BillingDetails";
import "./FormInvoice.css";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import Notes from "./Notes/Notes";

const FormInvoice = () => {
  return (
    <div className="invoice_form">
      <InvoiceHeader />
      <BillingDetails />
      <Allitems />
      <Notes />
    </div>
  );
};
export default FormInvoice;

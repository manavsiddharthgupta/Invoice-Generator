import React, { Fragment, useContext } from "react";
import "./InvoiceHeader.css";
import Input from "../../ui/Input";
import AuthContext from "../../stores/AuthContext";

const InvoiceHeader = () => {
  const cntx = useContext(AuthContext);

  var todayDate = new Date().toISOString().slice(0, 10);

  return (
    <Fragment>
      <div className="date_inv">
        <div className="date">
          <h3>Current Date:</h3>
          <span>{todayDate}</span>
        </div>
        <div className="invoice">
          <h3>Invoice Number:</h3>
          <Input
            onChange={cntx.onAddInvnum}
            type="number"
            min="1"
            value={cntx.invHeadData.invNum}
          />
        </div>
      </div>
      <div className="due_date">
        <h3>Due Date:</h3>
        <Input
          onChange={cntx.onAddInvdueDate}
          value={cntx.invHeadData.dueDate}
          type="date"
        />
      </div>
    </Fragment>
  );
};
export default InvoiceHeader;

import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import Input from "../../ui/Input";
import "./BillingDetails.css";

const BillingDetails = () => {
  const cntx = useContext(AuthContext);

  return (
    <div className="billing_inf">
      <label className="billing_from">
        Bill to:
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "CUST_NAME",
              value: e.target.value,
            });
          }}
          value={BillingDetails.cust_name}
          type="text"
          placeholder="Who is this invoice to?"
        />
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "CUST_EMAIL",
              value: e.target.value,
            });
          }}
          value={BillingDetails.cust_email}
          type="email"
          placeholder="Email address"
        />
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "CUST_ADD",
              value: e.target.value,
            });
          }}
          value={BillingDetails.cust_add}
          type="text"
          placeholder="Billing address"
        />
      </label>
      <label className="billing_to">
        Bill from:
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "MY_NAME",
              value: e.target.value,
            });
          }}
          value={BillingDetails.my_name}
          type="text"
          placeholder="Who is this invoice from?"
        />
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "MY_EMAIL",
              value: e.target.value,
            });
          }}
          value={BillingDetails.my_email}
          type="email"
          placeholder="Email address"
        />
        <Input
          onChange={(e) => {
            cntx.dispatchingBillDetails({
              type: "MY_ADD",
              value: e.target.value,
            });
          }}
          value={BillingDetails.my_add}
          type="text"
          placeholder="Billing address"
        />
      </label>
    </div>
  );
};
export default BillingDetails;

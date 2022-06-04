import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import "./SubTotal.css";
const SubTotal = (props) => {
  const cntx = useContext(AuthContext);

  let currTax = (props.subtotal.toFixed(2) / (1 + cntx.taxData)) * cntx.taxData;
  currTax = +currTax.toFixed(2);
  let disc = (cntx.discountData * props.subtotal.toFixed(2)) / 100;
  let total = props.subtotal.toFixed(2) - disc;
  total = total + currTax;
  total = +total;

  return (
    <div className="amount_outer">
      <div className="amount_data">
        <div className="sub_total tt">
          <span className="th">Subtotal:</span>
          <span>
            {cntx.changeCurrency} {props.subtotal.toFixed(2)}
          </span>
        </div>
        <div className="discount tt">
          <span className="th">Discount:</span>
          <span>
            ({cntx.discountData}%){cntx.changeCurrency} {disc.toFixed(2)}
          </span>
        </div>
        <div className="tax tt">
          <span className="th">Tax:</span>
          <span>
            ({cntx.taxData}%){cntx.changeCurrency} {currTax}
          </span>
        </div>
        <div className="break"></div>
        <div className="total tt">
          <span className="total_h">Total:</span>
          <span className="total_h">
            {cntx.changeCurrency} {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SubTotal;

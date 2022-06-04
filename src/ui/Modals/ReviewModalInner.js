import "./ReviewModalInner.css";
import SubTotal from "../../components/Items/SubTotal";
import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";

const ReviewModalInner = (props) => {
  const cntx = useContext(AuthContext);
  return (
    <div id={props.id} className="ReviewModal_inner">
      <div className="invoice_head">
        <div className="Billed_from">
          <p>#Invoice: {cntx.invHeadData.invNum}</p>
          <h1>{cntx.allBillingDeatils.my_name}</h1>
          <h3>{cntx.allBillingDeatils.my_add}</h3>
        </div>
        <div className="date_amnt">
          <p>
            Date:
            <span className="curr_date">{cntx.invHeadData.dueDate}</span>
          </p>
          <p>Amount Due:</p>
          <span>
            {cntx.changeCurrency} {cntx.subTotalData}
          </span>
        </div>
      </div>
      <div className="Billed_to">
        <h3>Billed to:</h3>
        <p>{cntx.allBillingDeatils.cust_name}</p>
        <p>{cntx.allBillingDeatils.cust_add}</p>
        <p>{cntx.allBillingDeatils.cust_email}</p>
      </div>
      <table className="items">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Description</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cntx.allItems.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.qty}</td>
                <td>{data.desc}</td>
                <td>{data.rate}</td>
                <td>{data.amnt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubTotal subtotal={cntx.subTotalData} />
      <p className="inv_notes">{cntx.notesData}</p>
    </div>
  );
};

export default ReviewModalInner;

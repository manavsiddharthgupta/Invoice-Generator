import React, { useState, useReducer } from "react";

const AuthContext = React.createContext({});

export default AuthContext;

const initialState = {
  cust_name: "",
  cust_email: "",
  cust_add: "",
  my_name: "",
  my_email: "",
  my_add: "",
};
const reducerfun = (laststate, action) => {
  if (action.type === "CUST_NAME") {
    return {
      cust_name: action.value,
      cust_email: laststate.cust_email,
      cust_add: laststate.cust_add,
      my_name: laststate.my_name,
      my_email: laststate.my_email,
      my_add: laststate.my_add,
    };
  }
  if (action.type === "CUST_EMAIL") {
    return {
      cust_name: laststate.cust_name,
      cust_email: action.value,
      cust_add: laststate.cust_add,
      my_name: laststate.my_name,
      my_email: laststate.my_email,
      my_add: laststate.my_add,
    };
  }
  if (action.type === "CUST_ADD") {
    return {
      cust_name: laststate.cust_name,
      cust_email: laststate.cust_email,
      cust_add: action.value,
      my_name: laststate.my_name,
      my_email: laststate.my_email,
      my_add: laststate.my_add,
    };
  }
  if (action.type === "MY_NAME") {
    return {
      cust_name: laststate.cust_name,
      cust_email: laststate.cust_email,
      cust_add: laststate.cust_add,
      my_name: action.value,
      my_email: laststate.my_email,
      my_add: laststate.my_add,
    };
  }
  if (action.type === "MY_EMAIL") {
    return {
      cust_name: laststate.cust_name,
      cust_email: laststate.cust_email,
      cust_add: laststate.cust_add,
      my_name: laststate.my_name,
      my_email: action.value,
      my_add: laststate.my_add,
    };
  }
  if (action.type === "MY_ADD") {
    return {
      cust_name: laststate.cust_name,
      cust_email: laststate.cust_email,
      cust_add: laststate.cust_add,
      my_name: laststate.my_name,
      my_email: laststate.my_email,
      my_add: action.value,
    };
  }

  return initialState;
};

const initialVal = [{ desc: "", qty: "1", rate: "1.00", amnt: "1" }];

export const AuthContextProvider = (props) => {
  const [invoiceHeadData, setInvHeadData] = useState({
    invNum: "1",
    dueDate: "",
  });
  console.log(invoiceHeadData);

  const [BillingDetails, dispatchBillingDetails] = useReducer(
    reducerfun,
    initialState
  );
  console.log(BillingDetails);

  const [itemsState, setItemsState] = useState(initialVal);
  const [subTotal, setSubtotal] = useState(1);
  console.log(itemsState);
  console.log(subTotal);

  const [notes, setNotes] = useState("Thank you for your business!");
  console.log(notes);

  const [currency, setCurrency] = useState("$");
  console.log(currency);

  const [tax, setTax] = useState("0.00");
  console.log(tax);

  const [discount, setDiscount] = useState("0.00");
  console.log(discount);

  const onAdditemHandler = (e) => {
    e.preventDefault();
    let allItem = [...itemsState];
    allItem.push({ desc: "", qty: "1", rate: "1.00", amnt: "1" });
    setItemsState(allItem);
    setSubtotal((prev) => prev + 1);
  };

  const onDeleteItemHandler = (index) => {
    if (itemsState.length <= 1) {
      return;
    }
    let allItem = [...itemsState];
    let eachItem = allItem[index];
    let amount = eachItem.amnt;
    setSubtotal((prev) => prev - amount);
    allItem.splice(index, 1);
    setItemsState(allItem);
  };

  const onChangeItemdata = (e, index) => {
    let allItem = [...itemsState];
    let eachItem = allItem[index];
    eachItem[e.target.name] = e.target.value;
    allItem[index] = eachItem;
    setItemsState(allItem);

    if (e.target.name === "qty") {
      let allItem = [...itemsState];
      let eachItem = allItem[index];
      let prevamount = eachItem.amnt;
      prevamount = +prevamount;
      let tamount = e.target.value * eachItem.rate;
      tamount = tamount.toFixed(2);
      tamount = +tamount;
      eachItem.amnt = tamount;
      allItem[index] = eachItem;
      setItemsState(allItem);
      let updateSubTotal = tamount - prevamount;
      updateSubTotal = updateSubTotal.toFixed(2);
      updateSubTotal = +updateSubTotal;
      setSubtotal((prev) => prev + updateSubTotal);
    } else if (e.target.name === "rate") {
      let allItem = [...itemsState];
      let eachItem = allItem[index];
      let tamount = e.target.value * eachItem.qty;
      let prevamount = eachItem.amnt;
      prevamount = +prevamount;
      tamount = tamount.toFixed(2);
      tamount = +tamount;
      eachItem.amnt = tamount;
      allItem[index] = eachItem;
      setItemsState(allItem);
      let updateSubTotal = tamount - prevamount;
      updateSubTotal = updateSubTotal.toFixed(2);
      updateSubTotal = +updateSubTotal;
      setSubtotal((prev) => prev + updateSubTotal);
    }
  };

  const onSetInvnumHandler = (e) => {
    let invoice_Num = { invNum: e.target.value };
    setInvHeadData((lastdata) => ({
      ...lastdata,
      ...invoice_Num,
    }));
  };

  const onSetInvdueDateHandler = (e) => {
    let invoice_DueDate = { dueDate: e.target.value };
    setInvHeadData((lastdata) => ({
      ...lastdata,
      ...invoice_DueDate,
    }));
  };
  return (
    <AuthContext.Provider
      value={{
        onAddInvnum: onSetInvnumHandler,
        onAddInvdueDate: onSetInvdueDateHandler,
        invHeadData: invoiceHeadData,
        allBillingDeatils: BillingDetails,
        dispatchingBillDetails: dispatchBillingDetails,
        allItems: itemsState,
        addItemfun: onAdditemHandler,
        deleteItemfun: onDeleteItemHandler,
        changeItemFun: onChangeItemdata,
        subTotalData: subTotal,
        notesData: notes,
        setNotefun: setNotes,
        changeCurrency: currency,
        onSetCurrency: setCurrency,
        taxData: tax,
        onSetTax: setTax,
        discountData: discount,
        onSetDiscount: setDiscount
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

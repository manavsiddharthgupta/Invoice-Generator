import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import Button from "../../ui/Button";
import "./Allitems.css";
import EachItem from "./EachItem";
import ItemHead from "./ItemHead";
import SubTotal from "./SubTotal";

const Allitems = () => {
  const cntx = useContext(AuthContext);

  let items = cntx.allItems.map((data, index) => (
    <EachItem
      eachItemData={data}
      ind={index}
      addDataprop={cntx.changeItemFun}
      deleteDatahandler={cntx.deleteItemfun}
      key={index}
    />
  ));
  return (
    <div className="all_itemsdata">
      <ItemHead />
      {items}
      <Button onClick={cntx.addItemfun} className="add_item">
        Add Item
      </Button>
      <SubTotal subtotal={cntx.subTotalData} />
    </div>
  );
};
export default Allitems;

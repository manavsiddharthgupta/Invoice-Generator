import React, { useContext } from "react";
import "./EachItem.css";
import Input from "../../ui/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../stores/AuthContext";
import Button from "../../ui/Button";

const EachItem = (props) => {
  const cntx = useContext(AuthContext);
  const onChangeItemdata = (e) => {
    props.addDataprop(e, props.ind);
  };
  const onDeleteItem = (e) => {
    e.preventDefault();
    props.deleteDatahandler(props.ind);
  };
  return (
    <div className="each_item">
      <Input
        className="item_name"
        onChange={onChangeItemdata}
        name="desc"
        type="text"
        value={props.eachItemData.desc}
        placeholder="Item name"
      />
      <Input
        className="quantity"
        onChange={onChangeItemdata}
        name="qty"
        value={props.eachItemData.qty}
        type="number"
        min="1"
      />
      <div className="price">
        <Input
          type="number"
          onChange={onChangeItemdata}
          name="rate"
          value={props.eachItemData.rate}
          min="1.00"
          step="0.01"
        />
      </div>
      <span className="amount" name="amnt">
        {cntx.changeCurrency}
        {props.eachItemData.amnt}
      </span>
      <Button onClick={onDeleteItem} className="delete_act">
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  );
};
export default EachItem;

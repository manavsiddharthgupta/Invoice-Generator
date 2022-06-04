import "./ItemHead.css";
const ItemHead = () => {
  return (
    <div className="item_head">
      <span className="itm_h">ITEMS</span>
      <span className="qty_h">QTY</span>
      <span className="prc_h">PRICE/RATE</span>
      <span className="amnt_h">AMOUNT</span>
      <span className="act_h">ACT</span>
    </div>
  );
};
export default ItemHead;

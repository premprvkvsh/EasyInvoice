// import "./ItemHead.css";
// const ItemHead = () => {
//   return (
//     <div className="item_head">
//       <span className="itm_h">ITEMS</span>
//       <span className="qty_h">QTY</span>
//       <span className="prc_h">PRICE/RATE</span>
//       <span className="amnt_h">AMOUNT</span>
//       <span className="act_h">ACT</span>
//     </div>
//   );
// };
// export default ItemHead;

const ItemHead = () => {
  return (
    <div className="flex justify-between py-2 mb-1">
      <span className="flex-grow-[11.1] text-sm font-bold mx-1">ITEMS</span>
      <span className="flex-grow-[0.95] text-sm font-bold mx-1">QTY</span>
      <span className="flex-grow-[1.2] text-sm font-bold mx-1">PRICE/RATE</span>
      <span className="flex-grow-[0.6] text-sm font-bold mx-1">AMOUNT</span>
      <span className="flex-grow-[0.1] text-sm font-bold mx-1">DEL</span>
    </div>
  );
};

export default ItemHead;

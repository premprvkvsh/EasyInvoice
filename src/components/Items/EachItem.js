// import React, { useContext } from "react";
// import "./EachItem.css";
// import Input from "../../ui/Input";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import AuthContext from "../../stores/AuthContext";
// import Button from "../../ui/Button";

// const EachItem = (props) => {
//   const cntx = useContext(AuthContext);
//   const onChangeItemdata = (e) => {
//     props.addDataprop(e, props.ind);
//   };
//   const onDeleteItem = (e) => {
//     e.preventDefault();
//     props.deleteDatahandler(props.ind);
//   };
//   return (
//     <div className="each_item">
//       <Input
//         className="item_name"
//         onChange={onChangeItemdata}
//         name="desc"
//         type="text"
//         value={props.eachItemData.desc}
//         placeholder="Item name"
//       />
//       <Input
//         className="quantity"
//         onChange={onChangeItemdata}
//         name="qty"
//         value={props.eachItemData.qty}
//         type="number"
//         min="1"
//       />
//       <div className="price">
//         <Input
//           type="number"
//           onChange={onChangeItemdata}
//           name="rate"
//           value={props.eachItemData.rate}
//           min="1.00"
//           step="0.01"
//         />
//       </div>
//       <span className="amount" name="amnt">
//         {cntx.changeCurrency}
//         {props.eachItemData.amnt}
//       </span>
//       <Button onClick={onDeleteItem} className="delete_act">
//         <FontAwesomeIcon icon={faTrashCan} />
//       </Button>
//     </div>
//   );
// };
// export default EachItem;
import React, { useContext } from "react";
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
    <div className="flex w-full items-center border-b border-black py-3 mb-2">
      <Input
        className="w-[480px] min-w-[4.5em] p-2"
        onChange={onChangeItemdata}
        name="desc"
        type="text"
        value={props.eachItemData.desc}
        placeholder="Item name"
      />
      <Input
        className="w-[5em] min-w-[4em] p-2"
        onChange={onChangeItemdata}
        name="qty"
        value={props.eachItemData.qty}
        type="number"
        min="1"
      />
      <div className="w-[8.5em] min-w-[6em] text-right">
        <Input
          type="number"
          onChange={onChangeItemdata}
          name="rate"
          value={props.eachItemData.rate}
          min="1.00"
          step="1.00"
          className="w-full min-w-[3em] pl-[45%]"
        />
      </div>
      <span className="ml-3 text-sm font-normal w-[80px] min-w-[75px] overflow-x-auto">
        {cntx.changeCurrency}
        {props.eachItemData.amnt}
      </span>
      <Button
        onClick={onDeleteItem}
        className="ml-1 px-3 py-2 bg-rose-500 text-zinc-300 rounded-lg border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-rose-700"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  );
};

export default EachItem;

// import React, { Fragment, useContext } from "react";
// import "./InvoiceHeader.css";
// import Input from "../../ui/Input";
// import AuthContext from "../../stores/AuthContext";

// const InvoiceHeader = () => {
//   const cntx = useContext(AuthContext);

//   var todayDate = new Date().toISOString().slice(0, 10);

//   return (
//     <Fragment>
//       <div className="date_inv">
//         <div className="date">
//           <h3>Current Date:</h3>
//           <span>{todayDate}</span>
//         </div>
//         <div className="invoice">
//           <h3>Invoice Number:</h3>
//           <Input
//             onChange={cntx.onAddInvnum}
//             type="number"
//             min="1"
//             value={cntx.invHeadData.invNum}
//           />
//         </div>
//       </div>
//       <div className="due_date">
//         <h3>Due Date:</h3>
//         <Input
//           onChange={cntx.onAddInvdueDate}
//           value={cntx.invHeadData.dueDate}
//           type="date"
//         />
//       </div>
//     </Fragment>
//   );
// };
// export default InvoiceHeader;


import React, { Fragment, useContext } from "react";
import Input from "../../ui/Input";
import AuthContext from "../../stores/AuthContext";

const InvoiceHeader = () => {
  const cntx = useContext(AuthContext);
  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <Fragment>
      <div className="flex justify-between mb-2 flex-wrap date_inv">
        <div className="date inline-flex items-center mb-2">
          <h3 className="text-sm font-semibold mr-1">Current Date:</h3>
          <span className="text-xs font-light">{todayDate}</span>
        </div>
        <div className="invoice inline-flex items-center">
          <h3 className="text-sm font-semibold mr-2">Invoice Number:</h3>
          <Input
            onChange={cntx.onAddInvnum}
            type="number"
            min="1"
            value={cntx.invHeadData.invNum}
            className="w-12 p-1 border rounded"
          />
        </div>
      </div>
      <div className="due_date inline-flex items-center">
        <h3 className="text-sm font-semibold mr-1">Due Date:</h3>
        <Input
          onChange={cntx.onAddInvdueDate}
          value={cntx.invHeadData.dueDate}
          type="date"
          className="p-1 border rounded"
        />
      </div>
    </Fragment>
  );
};

export default InvoiceHeader;

// import "./ReviewModalInner.css";
// import SubTotal from "../../components/Items/SubTotal";
// import React, { useContext } from "react";
// import AuthContext from "../../stores/AuthContext";

// const ReviewModalInner = (props) => {
//   const cntx = useContext(AuthContext);
//   return (
//     <div id={props.id} className="ReviewModal_inner">
//       <div className="invoice_head">
//         <div className="Billed_from">
//           <p>#Invoice: {cntx.invHeadData.invNum}</p>
//           <h1>{cntx.allBillingDeatils.my_name}</h1>
//           <h3>{cntx.allBillingDeatils.my_add}</h3>
//         </div>
//         <div className="date_amnt">
//           <p>
//             Date:
//             <span className="curr_date">{cntx.invHeadData.dueDate}</span>
//           </p>
//           <p>Amount Due:</p>
//           <span>
//             {cntx.changeCurrency} {cntx.subTotalData}
//           </span>
//         </div>
//       </div>
//       <div className="Billed_to">
//         <h3>Billed to:</h3>
//         <p>{cntx.allBillingDeatils.cust_name}</p>
//         <p>{cntx.allBillingDeatils.cust_add}</p>
//         <p>{cntx.allBillingDeatils.cust_email}</p>
//       </div>
//       <table className="items">
//         <thead>
//           <tr>
//             <th>Qty</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cntx.allItems.map((data, index) => {
//             return (
//               <tr key={index}>
//                 <td>{data.qty}</td>
//                 <td>{data.desc}</td>
//                 <td>{data.rate}</td>
//                 <td>{data.amnt}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <SubTotal subtotal={cntx.subTotalData} />
//       <p className="inv_notes">{cntx.notesData}</p>
//     </div>
//   );
// };

// export default ReviewModalInner;

import SubTotal from "../../components/Items/SubTotal";
import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";

const ReviewModalInner = (props) => {
  const cntx = useContext(AuthContext);
  return (
    <div
      id={props.id}
      className="w-full bg-white h-4/5 rounded-lg overflow-y-auto p-4 sm:p-2"
    >
      <div className="flex justify-between invoice_head">
        <div className="Billed_from leading-relaxed">
          <p className="font-bold">#Invoice: {cntx.invHeadData.invNum}</p>
          <h1 className="text-xl">{cntx.allBillingDeatils.my_name}</h1>
          <h3 className="text-sm">{cntx.allBillingDeatils.my_add}</h3>
        </div>
        <div className="text-right font-semibold date_amnt">
          <p>
            Date: <span className="text-gray-500 font-light">{cntx.invHeadData.dueDate}</span>
          </p>
          <p>Amount Due:</p>
          <span>
            {cntx.changeCurrency} {cntx.subTotalData}
          </span>
        </div>
      </div>

      <div className="mt-8 leading-relaxed Billed_to">
        <h3 className="text-sm">Billed to:</h3>
        <p>{cntx.allBillingDeatils.cust_name}</p>
        <p>{cntx.allBillingDeatils.cust_add}</p>
        <p>{cntx.allBillingDeatils.cust_email}</p>
      </div>

      <table className="mt-8 w-full items table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Qty</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Price</th>
            <th className="border p-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {cntx.allItems.map((data, index) => {
            return (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                <td className="border p-2">{data.qty}</td>
                <td className="border p-2">{data.desc}</td>
                <td className="border p-2">{data.rate}</td>
                <td className="border p-2">{data.amnt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <SubTotal subtotal={cntx.subTotalData} />

      <p className="mt-12 text-sm inv_notes">{cntx.notesData}</p>
    </div>
  );
};

export default ReviewModalInner;

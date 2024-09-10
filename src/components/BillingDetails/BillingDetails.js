// import React, { useContext } from "react";
// import AuthContext from "../../stores/AuthContext";
// import Input from "../../ui/Input";
// import "./BillingDetails.css";

// const BillingDetails = () => {
//   const cntx = useContext(AuthContext);

//   return (
//     <div className="billing_inf">
//       <label className="billing_from">
//         Bill to:
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "CUST_NAME",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.cust_name}
//           type="text"
//           placeholder="Sender's name"
//         />
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "CUST_EMAIL",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.cust_email}
//           type="email"
//           placeholder="Email address"
//         />
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "CUST_ADD",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.cust_add}
//           type="text"
//           placeholder="Billing address"
//         />
//       </label>
//       <label className="billing_to">
//         Bill from:
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "MY_NAME",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.my_name}
//           type="text"
//           placeholder="Receiver's name"
//         />
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "MY_EMAIL",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.my_email}
//           type="email"
//           placeholder="Email address"
//         />
//         <Input
//           onChange={(e) => {
//             cntx.dispatchingBillDetails({
//               type: "MY_ADD",
//               value: e.target.value,
//             });
//           }}
//           value={BillingDetails.my_add}
//           type="text"
//           placeholder="Billing address"
//         />
//       </label>
//     </div>
//   );
// };
// export default BillingDetails;

import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import Input from "../../ui/Input";

const BillingDetails = () => {
  const cntx = useContext(AuthContext);

  return (
    <div className="border-t border-black my-10 py-6 flex flex-wrap justify-between billing_inf">
      {/* Bill to Section */}
      <div className="flex-1 mr-6 billing_from">
        <label className="block mb-4">
          <span className="block text-sm font-bold">Bill to:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "CUST_NAME",
                value: e.target.value,
              });
            }}
            value={BillingDetails.cust_name}
            type="text"
            placeholder="Sender's name"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-bold">Email:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "CUST_EMAIL",
                value: e.target.value,
              });
            }}
            value={BillingDetails.cust_email}
            type="email"
            placeholder="Email address"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-bold">Billing address:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "CUST_ADD",
                value: e.target.value,
              });
            }}
            value={BillingDetails.cust_add}
            type="text"
            placeholder="Billing address"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
      </div>

      {/* Bill from Section */}
      <div className="flex-1 billing_to">
        <label className="block mb-4">
          <span className="block text-sm font-bold">Bill from:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "MY_NAME",
                value: e.target.value,
              });
            }}
            value={BillingDetails.my_name}
            type="text"
            placeholder="Receiver's name"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-bold">Email:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "MY_EMAIL",
                value: e.target.value,
              });
            }}
            value={BillingDetails.my_email}
            type="email"
            placeholder="Email address"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-bold">Billing address:</span>
          <Input
            onChange={(e) => {
              cntx.dispatchingBillDetails({
                type: "MY_ADD",
                value: e.target.value,
              });
            }}
            value={BillingDetails.my_add}
            type="text"
            placeholder="Billing address"
            className="block w-full mt-2 p-2 text-base border rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default BillingDetails;

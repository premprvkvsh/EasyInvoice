import React from "react";
import Allitems from "./Items/Allitems";
import BillingDetails from "./BillingDetails/BillingDetails";
import "./FormInvoice.css";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import Notes from "./Notes/Notes";

const FormInvoice = () => {
  return (
    <div className="invoice_form">
      <InvoiceHeader />
      <BillingDetails />
      <Allitems />
      <Notes />
    </div>
  );
};
export default FormInvoice;


// import React from "react";
// import Allitems from "./Items/Allitems";
// import BillingDetails from "./BillingDetails/BillingDetails";
// import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
// import Notes from "./Notes/Notes";

// const FormInvoice = () => {
//   return (
//     <div
//       className="w-full max-w-[860px] p-8 border border-gray-400 bg-white rounded-lg mb-4 
//       xl:max-w-[740px] lg:max-w-[680px] md:max-w-[640px] sm:max-w-[600px] xs:max-w-[570px] 
//       xxs:max-w-full"
//     >
//       <InvoiceHeader />
//       <BillingDetails />
//       <Allitems />
//       <Notes />
//     </div>
//   );
// };

// export default FormInvoice;

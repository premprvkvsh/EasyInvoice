import React, { useContext } from "react";
import "./FormReview.css";
import Cardone from "../ui/Cardone";
import Input from "../ui/Input";
import PercentageSign from "../ui/PercentageSign";
import AuthContext from "../stores/AuthContext";
import Button from "../ui/Button";
const FormReview = (props) => {
  const cntx = useContext(AuthContext);
  return (
    <div className="review">
      <Button className="review_btn" type="submit">
        Review
      </Button>
      <div className="extra_feature">
        <label className="font-bold text-white" htmlFor="currency">
          Currency:
        </label>
        <select
          onChange={(e) => {
            cntx.onSetCurrency(e.target.value);
          }}
          value={cntx.changeCurrency}
          className="crncy_lable"
          name="currency"
          id="crc"
        >
          <option value="$">Dollar ($)</option>
          <option value="&#8377;">Rupee (&#8377;)</option>
          <option value="&#163;">Pound (&#163;)</option>
          <option value="&#x20AC;">Euro (&#x20AC;)</option>
          <option value="&#x20A9;">Won (&#x20A9;)</option>
          <option value="&#x00A5;">Renminbi (&#x00A5;)</option>
          <option value="₿">BTC (₿)</option>
        </select>
        <label className="font-bold text-white">Tax rate:</label>
        <Cardone>
          <PercentageSign />
          <Input
            className="tax_disc"
            onChange={(e) => {
              cntx.onSetTax(e.target.value);
            }}
            type="number"
            min="0.00"
            value={cntx.taxData}
            step="0.01"
          />
        </Cardone>
        <label className="font-bold text-white">Discount rate:</label>
        <Cardone className="taxes_disc">
          <PercentageSign />
          <Input
            className="tax_disc"
            onChange={(e) => {
              cntx.onSetDiscount(e.target.value);
            }}
            type="number"
            min="0.00"
            value={cntx.discountData}
            step="0.01"
          />
        </Cardone>
      </div>
    </div>
  );
};
export default FormReview;


// import React, { useContext } from "react";
// import Cardone from "../ui/Cardone";
// import Input from "../ui/Input";
// import PercentageSign from "../ui/PercentageSign";
// import AuthContext from "../stores/AuthContext";
// import Button from "../ui/Button";

// const FormReview = (props) => {
//   const cntx = useContext(AuthContext);

//   return (
//   <div className="review">
//       <Button className="review_btn" type="submit">
//         Review
//       </Button>
      
//      <div className="sticky top-4 ml-6 z-10 w-full max-w-[calc(100%-2rem)]">
//       <Button className="w-full h-auto font-normal text-base py-2">
//         Review
//       </Button>
//       <div className="mt-4 pt-4 border-t border-black">
//         <label className="text-base text-zinc-300 font-bold mt-4 block" htmlFor="currency">
//           Currency:
//         </label>
//         <select
//           onChange={(e) => {
//             cntx.onSetCurrency(e.target.value);
//           }}
//           value={cntx.changeCurrency}
//           className="w-full text-center py-3 rounded-md shadow-md border-none bg-zinc-200 transition duration-300 ease-in-out hover:bg-gray-400"
//           name="currency"
//           id="crc"
//         >
//           <option value="$">Dollar ($)</option>
//           <option value="&#8377;">Rupee (&#8377;)</option>
//           <option value="&#163;">Pound (&#163;)</option>
//           <option value="&#x20AC;">Euro (&#x20AC;)</option>
//           <option value="&#x20A9;">Won (&#x20A9;)</option>
//           <option value="&#x00A5;">Renminbi (&#x00A5;)</option>
//           <option value="₿">BTC (₿)</option>
//         </select>
//         <label className="text-base text-zinc-300 font-bold mt-4 block">Tax rate:</label>
//         <Cardone>
//           <PercentageSign />
//           <Input
//             className="w-full text-gray-900 py-2 px-6 text-base"
//             onChange={(e) => {
//               cntx.onSetTax(e.target.value);
//             }}
//             type="number"
//             min="0.00"
//             value={cntx.taxData}
//             step="0.01"
//           />
//         </Cardone>
//         <label className="text-base text-zinc-300 font-bold mt-4 block">Discount rate:</label>
//         <Cardone className="mt-4">
//           <PercentageSign />
//           <Input
//             className="w-full text-gray-800 py-2 px-6 rounded-md text-base"
//             onChange={(e) => {
//               cntx.onSetDiscount(e.target.value);
//             }}
//             type="number"
//             min="0.00"
//             value={cntx.discountData}
//             step="0.01"
//           />
//         </Cardone>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FormReview; 

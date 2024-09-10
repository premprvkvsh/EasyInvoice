import React from "react";
import Button from "../Button";
import "./ReviewModal.css";
import ReviewModalInner from "./ReviewModalInner";

const Modal = (props) => {
  return (
    <div onClick={props.onClick} className="modal">
      {props.children}
    </div>
  );
};
const ReviewModal = (props) => {
  const generate = (e) => {
    e.preventDefault();
    console.log("start");
  };

  return (
    <React.Fragment>
      <Modal onClick={props.onSubmit}></Modal>
      <div className="ReviewModal_outer">
        <ReviewModalInner id="content" />
        <div className="generate_btn">
          <Button className="download_invoice" onClick={generate}>
            Download Invoice
          </Button>
          <Button className="send_invoice" onClick={generate}>
            Send Invoice
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ReviewModal;

// import React from "react";
// import Button from "../Button";
// import ReviewModalInner from "./ReviewModalInner";

// const Modal = ({ onClick, children }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="fixed inset-0 bg-black bg-opacity-63 z-20"
//     >
//       {children}
//     </div>
//   );
// };

// const ReviewModal = ({ onSubmit }) => {
//   const generate = (e) => {
//     e.preventDefault();
//     console.log("start");
//   };

//   return (
//     <React.Fragment>
//       <Modal onClick={onSubmit} />
//       <div className="fixed top-1/2 left-1/2 w-[70%] max-w-4xl h-[98%] max-h-[685px] bg-gray-300 rounded-lg p-4 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-modal">
//         <ReviewModalInner id="content" />
//         <div className="flex justify-around mt-4">
//           <Button className="w-[45%]" onClick={generate}>
//             Download Invoice
//           </Button>
//           <Button
//             className="w-[45%] bg-white text-black hover:bg-blue-600 hover:text-white"
//             onClick={generate}
//           >
//             Send Invoice
//           </Button>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default ReviewModal;

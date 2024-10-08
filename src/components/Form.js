// import React, { useState } from "react";
// import Modal from "../ui/Modals/Modal";
// import "./Form.css";
// import FormInvoice from "./FormInvoice";
// import FormReview from "./FormReview";
// const Form = () => {
//   const [modalView, setModalView] = useState(false);
  
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     setModalView((val) => !val);
//   };

//   return (
//     <form className="main_form" onSubmit={onSubmitHandler}>
//       <FormInvoice />
//       <FormReview />
//       {modalView && <Modal onSubmit={onSubmitHandler} />}
//     </form>
//   );
// };
// export default Form;


import React, { useState } from "react";
import Modal from "../ui/Modals/Modal";
import FormInvoice from "./FormInvoice";
import FormReview from "./FormReview";

const Form = () => {
  const [modalView, setModalView] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setModalView((val) => !val);
  };

  return (
    <form
      className="w-3/4 max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap"
      onSubmit={onSubmitHandler}
    >
      <FormInvoice />
      <FormReview />
      {modalView && <Modal onSubmit={onSubmitHandler} />}
    </form>
  );
};

export default Form;

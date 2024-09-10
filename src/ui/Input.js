// import React from "react";
// import "./Input.css";

// const Input = (props) => {
//   return (
//     <input
//       className={`all_input ${props.className}`}
//       type={props.type}
//       min={props.min}
//       value={props.value}
//       name={props.name}
//       onChange={props.onChange}
//       defaultValue={props.defaultValue}
//       placeholder={props.placeholder}
//       step={props.step}
//       required
//     />
//   );
// };
// export default Input;

const Input = (props) => {
  return (
    <input
      className={`p-1 outline-blue-300 outline-offset-2 outline-2 bg-zinc-300 rounded-sm border-none text-gray-800 font-light placeholder:text-gray-600 placeholder:font-thin ${props.className}`}
      type={props.type}
      min={props.min}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      step={props.step}
      required
    />
  );
};

export default Input;

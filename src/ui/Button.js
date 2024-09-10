// import "./Button.css";
// const Button = (props) => {
//   return (
//     <button
//       className={`btn ${props.className}`}
//       onClick={props.onClick}
//       type={props.type || "button"}
//     >
//       {props.children}
//     </button>
//   );
// };
// export default Button;

const Button = (props) => {
  return (
    <button
      className={`px-4 py-3 text-neutral-50 font-medium tracking-wide border-none outline-none bg-green-600 rounded-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-800 ${props.className}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;

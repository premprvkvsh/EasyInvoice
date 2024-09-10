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
      className={`px-4 py-3 text-white font-medium tracking-wide border-none outline-none bg-blue-600 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-700 ${props.className}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;

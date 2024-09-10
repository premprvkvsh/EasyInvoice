// import "./Cardone.css";

// const Cardone = (props) => {
//   return <div className="taxes_disc">{props.children}</div>;
// };
// export default Cardone;

const Cardone = (props) => {
  return (
    <div className="relative mt-2 mb-4 shadow-md">
      {props.children}
    </div>
  );
};

export default Cardone;

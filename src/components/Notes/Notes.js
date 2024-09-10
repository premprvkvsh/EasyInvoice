// import React, { useContext } from "react";
// import AuthContext from "../../stores/AuthContext";
// import "./Notes.css";

// const Notes = () => {
//   const cntx = useContext(AuthContext);
//   // const [notes, setNotes] = useState("Thank you for your business!");
//   // console.log(notes);

//   return (
//     <div className="notes_form">
//       <span>Notes:</span>
//       <textarea
//         onChange={(e) => {
//           cntx.setNotefun(e.target.value);
//         }}
//         rows="2"
//         value={cntx.notesData}
//       />
//     </div>
//   );
// };
// export default Notes;

import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";

const Notes = () => {
  const cntx = useContext(AuthContext);

  return (
    <div className="my-2 py-4 notes_form">
      <span className="text-sm font-semibold">Notes:</span>
      <textarea
        onChange={(e) => cntx.setNotefun(e.target.value)}
        rows="2"
        value={cntx.notesData}
        className="mt-2 w-full p-1 outline outline-2 outline-blue-200 bg-blue-50 rounded-sm border-none text-gray-700 font-light"
      />
    </div>
  );
};

export default Notes;

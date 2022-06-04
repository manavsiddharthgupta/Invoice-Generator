import React, { useContext } from "react";
import AuthContext from "../../stores/AuthContext";
import "./Notes.css";

const Notes = () => {
  const cntx = useContext(AuthContext);
  // const [notes, setNotes] = useState("Thank you for your business!");
  // console.log(notes);

  return (
    <div className="notes_form">
      <span>Notes:</span>
      <textarea
        onChange={(e) => {
          cntx.setNotefun(e.target.value);
        }}
        rows="2"
        value={cntx.notesData}
      />
    </div>
  );
};
export default Notes;

import React from "react";
import "./Note.css"

const Note = () => {
  {
    text:"Write something",
    time:"2:00AM",
    color:"cyan"
  }
  return (
    <div className="note">
      <textarea className="note_text" />
      <p>11:45 PM 26 September</p>
    </div>
  );
};

export default Note;

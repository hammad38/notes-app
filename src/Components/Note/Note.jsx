import React from "react";
import "./Note.css"

const Note = () => {
  {
  }
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
    <textarea className="note_text" defaultValue={props.note.text} />
      <p>11:45 PM 26 September</p>
    </div>
  );
};

export default Note;
  
import React from "react";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <p>{props.note.time}</p>
    </div>
  );
};

export default Note;

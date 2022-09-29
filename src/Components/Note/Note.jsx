import React from "react";
import {AiFillDelete} from "react-icons/ai";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note_footer">
      <p>{props.note.time}</p>
      <AiFillDelete />
      </div>
    </div>
  );
};

export default Note;

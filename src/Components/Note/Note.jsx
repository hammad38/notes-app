import React from "react";
import {RiDeleteBin6Fill} from "react-icons/ri";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note_footer">
      <p>{props.note.time}</p>
      <RiDeleteBin6Fill className="deleteIcon" onClick={()=>props.deleteNote(props.note.id)}/>
      </div>
    </div>
  );
};

export default Note;

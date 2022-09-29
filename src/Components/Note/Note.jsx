import React from "react";
import {RiDeleteBin6Fill} from "react-icons/ri";
import "./Note.css";

const Note = (props) => {
  
  //formatting date
  const formatDate = (value) =>{
    if(!value) return ""

    const date = new Date(value)

    let hrs = date.getHours()
    let amPm = hrs>12?"AM":"PM"
    hrs = hrs? hrs : "12" //this is for false value becasue js not accepts zero
    hrs=hrs>12?hrs=24-hrs:hrs

  }

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

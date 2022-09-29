import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Note.css";

const Note = (props) => {
  //formatting date
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs > 12 ? (hrs = hrs-12) : hrs;
    hrs = hrs ? hrs : "12"; //this is for false value becasue js not accepts zero
    hrs = hrs < 10 ? "0" + hrs : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    let months = month[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${months}`;
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <MdDeleteOutline
          className="deleteIcon"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;

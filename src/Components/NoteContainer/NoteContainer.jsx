import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css"
const NoteContainer = () => {
  return (
    <div className="note-container">
    <h1>Notes</h1>
    <div className="note-container_notes">
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
      </div>
    </div>
  );
};

export default NoteContainer;

import React from "react";
import Note from "../Note/Note";

const NoteContainer = () => {
  return (
    <div>
      <Note
        note={{
          text: "Write something",
          time: "12:00 AM",
          color: "red",
        }}
      />
    </div>
  );
};

export default NoteContainer;

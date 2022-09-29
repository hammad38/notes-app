import React, { useState } from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id:Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  
  const deleteNote=(id)=>{
    const tempNotes = [...notes]

    const index = tempNotes.findIndex(note=>note.id===id)
    if(index<0 )return

    tempNotes.splice(index, 1 )
    setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote}/>
    </div>
  );
};

export default App;

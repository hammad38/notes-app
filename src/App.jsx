import React from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
 const notes = [
    {
      text: "Write something",
      time: "12:00 AM",
      color: "yellow",
    },
    {
      text: "Write something",
      time: "12:00 AM",
      color: "pink",
    },
    {
      text: "Write something",
      time: "12:00 AM",
      color: "gray",
    },
    {
      text: "Write something",
      time: "12:00 AM",
      color: "purple",
    },
  ]
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer notes={notes} />
    </div>
  );
};

export default App;

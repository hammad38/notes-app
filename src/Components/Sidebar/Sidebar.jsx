import React, { useState } from "react";
// import { MdOutlineDelete } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import "./Sidebar.css";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91", "#ed95c6"];
  
  const [listOpen, setListOpen] = useState(false)

  return (
    <div className="sidebar">
      <HiPlusCircle
        className="plusIcon"
        onClick={()=>setListOpen(!listOpen)}
      />
      <ul className={`sidebar_list ${ listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={()=>props.addNote(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

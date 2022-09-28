import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import "./Sidebar.css";

const Sidebar = () => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <HiPlusCircle className="plusicon" />
      <ul className="sidebar_list">

        {colors.map((color, index) => (
          <li
          key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
          ></li>
          
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

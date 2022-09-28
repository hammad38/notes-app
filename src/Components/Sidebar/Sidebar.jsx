import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HiPlusCircle className="plusicon" />
      <ul className="sidebar_list">
        <li className="sidebar_list_item"></li>
      </ul>
    </div>
  );
};

export default Sidebar;

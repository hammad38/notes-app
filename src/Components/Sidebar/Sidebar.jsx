import React from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import { ImPlus } from 'react-icons/im';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
    <h1>
      <MdOutlineDelete />
      <ImPlus />
      </h1>
    </div>
  )
}

export default Sidebar

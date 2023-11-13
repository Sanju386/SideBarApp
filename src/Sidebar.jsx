import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const handleSide = () => {
    setExpand(!expand);
  };

  const handleBtn = () => {
    setExpand(!expand);
  };

  const handleLi = ()=>{
   setExpand('')
  }

  return (
    <>
      <main>
        <button onClick={handleSide} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={handleClick} className="btn">
          show modal
        </button>
      </main>

      <div className={open ? "modal-overlay show-modal" : "modal-overlay"}>
        <div className="modal-container">
          <h3>modal content</h3>

          <button onClick={handleClose} className="close-modal-btn">
            <FaTimes />
          </button>
        </div>
      </div>

      <aside className={expand ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src="logo.svg" className="logo" alt="coding addict" />
          <button onClick={handleBtn} className="close-btn">
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((ele) => {
            const Icons = ele.icon;
            return (
              <li onClick={handleLi} key={ele.id}>
                <Link to={ele.url}><Icons /> {ele.text} </Link>
              </li>
            );
          })}
        </ul>

        <ul className="social-icons">
          {social.map((itm) => {
            const Tags = itm.icon;
            return (
              <li key={itm.id}>
                <a href={itm.url}>
                  <Tags />
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

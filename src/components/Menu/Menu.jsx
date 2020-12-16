import React, { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  let [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <div
        className="menu-container"
        onClick={() => {
          toggleMenu();
        }}
      >
        <h6>
          <span className="hamburger"></span>
          <span className="text">{toggle ? "close" : "menu"}</span>
        </h6>
      </div>
      <div className={toggle ? "menu-options active" : "menu-options"}>
        <div className="sideline"></div>
        <nav>
          <ul>
            <li>
              <a className="cool-link">About</a>
            </li>
            <li>
              <a className="cool-link">Projects</a>
            </li>
            <li>
              <a className="cool-link">Team</a>
            </li>
            <li>
              <a className="cool-link">Technologies</a>
            </li>
            <li>
              <a className="cool-link">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;

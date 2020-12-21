import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  let [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
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
          <ul onClick={() => toggleMenu()}>
            <li>
              <Link to="aboutus" className="cool-link">
                About
              </Link>
            </li>
            <li>
              <Link to="expertise" className="cool-link">
                Our Expertise
              </Link>
            </li>
            <li>
              <Link to="team" className="cool-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="technologies" className="cool-link">
                Technologies
              </Link>
            </li>
            <li>
              <Link to="contactus" className="cool-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;

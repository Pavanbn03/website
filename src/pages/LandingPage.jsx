import React from "react";
import Menu from "../components/Menu/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageTransition,
  pageVariantsLeftToRight,
  pageVariantsRightToLeft,
} from "../components/animation/animation";
const LandingPage = () => {
  return (
    <>
      <Menu />
      <motion.div
        initial="initial"
        exit="out"
        animate="in"
        variants={
          JSON.parse(localStorage.getItem("direction"))
            ? pageVariantsRightToLeft
            : pageVariantsLeftToRight
        }
        transition={pageTransition}
        className="landing-container"
      >
        <div className="bg-image">
          <div className="image"></div>
        </div>

        <div className="logo">
          <h1>Logo interfaceone.io</h1>
        </div>
        <div className="para">
          <p>We are interfaceone Co.</p>
        </div>
        <div className="footer">
          <Link className="cool-link" to="aboutus">
            About us
          </Link>
          <Link className="cool-link" to="contactus">
            Get in touch
          </Link>
          <Link to="/welcome">
            <div className="arrow">
              <h3>Know more</h3>
              <div className="line"></div>
              <div className="triangle"></div>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;

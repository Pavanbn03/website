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
          <h1>
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/icon-io.png?alt=media&token=287c5a02-3ae6-44f7-9f96-4f92d7d846dc`}
            />{" "}
          </h1>
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

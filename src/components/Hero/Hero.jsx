import React, { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import Parallax from "parallax-js";
import { motion } from "framer-motion";
import {
  pageTransition,
  pageVariantsLeftToRight,
  pageVariantsRightToLeft,
} from "../animation/animation";

const Hero = ({ history, url, title, subTitle }) => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };

  useEffect(() => {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  });

  const navigateLeft = (e) => {
    localStorage.setItem("direction", JSON.stringify(true));
    if (history.location.pathname === "/") {
      history.push("/contactus");
    } else if (history.location.pathname === "/aboutus") {
      history.push("/welcome");
    } else if (history.location.pathname === "/expertise") {
      history.push("/aboutus");
    } else if (history.location.pathname === "/team") {
      history.push("/expertise");
    } else if (history.location.pathname === "/technologies") {
      history.push("/team");
    } else if (history.location.pathname === "/contactus") {
      history.push("/technologies");
    } else if (history.location.pathname === "/welcome") {
      history.push("/");
    }
  };

  const navigateRight = (e) => {
    localStorage.setItem("direction", JSON.stringify(false));
    if (history.location.pathname === "/") {
      history.push("/welcome");
    } else if (history.location.pathname === "/welcome") {
      history.push("/aboutus");
    } else if (history.location.pathname === "/aboutus") {
      history.push("/expertise");
    } else if (history.location.pathname === "/expertise") {
      history.push("/team");
    } else if (history.location.pathname === "/team") {
      history.push("/technologies");
    } else if (history.location.pathname === "/technologies") {
      history.push("/contactus");
    } else if (history.location.pathname === "/contactus") {
      history.push("/");
    }
  };

  return (
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
    >
      <div className="logo">
        <Link to="/">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/icon-io.png?alt=media&token=287c5a02-3ae6-44f7-9f96-4f92d7d846dc`}
            width="50px"
            className="logo-img"
          />
        </Link>
      </div>
      <div
        className="circle-container-1"
        onClick={(e) => {
          navigateLeft(e);
        }}
      >
        <div className="circle-1">
          <div className="triangle-1"></div>
          <div className="arrow-1"></div>
        </div>
      </div>
      <div
        className="circle-container-2"
        onClick={(e) => {
          navigateRight(e);
        }}
      >
        <div className="circle-2">
          <div className="triangle-2"></div>
          <div className="arrow-2"></div>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero" id="scene">
          <div className="video" data-depth="0.3">
            {/* <img
              src={`https://unsplash.com/photos/psW1ci6-_gY/download?force=true&w=2400`}
              alt="unsplash"
            /> */}
            <video
              ref={videoRef}
              onCanPlay={setPlayBack}
              src={url}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="title" data-depth="0.5">
            <h4>{title}</h4>
          </div>
          <div className="scrollDown">
            <div className="container">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="text">Scroll down</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Hero);

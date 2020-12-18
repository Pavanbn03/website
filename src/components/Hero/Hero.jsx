import React from "react";
import "./Hero.scss";
import { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import Parallax from "parallax-js";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../animation/animation";

const Hero = ({ history, url, pageName }) => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
    console.log("url", url);
    console.log("name", pageName);
  });

  const navigateLeft = (e) => {
    if (history.location.pathname === "/aboutus") {
      history.push("/");
    } else if (history.location.pathname === "/projects") {
      history.push("/aboutus");
    } else if (history.location.pathname === "/team") {
      history.push("/projects");
    } else if (history.location.pathname === "/technologies") {
      history.push("/team");
    } else if (history.location.pathname === "/contactus") {
      history.push("/technologies");
    } else if (history.location.pathname === "/") {
      history.push("/contactus");
    }
  };

  const navigateRight = (e) => {
    if (history.location.pathname === "/") {
      history.push("/aboutus");
    } else if (history.location.pathname === "/aboutus") {
      history.push("/projects");
    } else if (history.location.pathname === "/projects") {
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
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="pageName-container">
        <h1 className="pageName">{pageName}.</h1>
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
              muted
              loop
            ></video>
          </div>
          <div className="title" data-depth="0.2">
            <h3>interfaceone.io</h3>
          </div>
          <div className="scrollDown">
            <div class="container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
              <span class="text">Scroll down</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Hero);

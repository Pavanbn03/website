import React from "react";
import "./Hero.scss";
import { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import Parallax from "parallax-js";

const Hero = ({ history }) => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
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
    <>
      <div className="logo">
        <Link to="/">Logo</Link>
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
            <img
              src={`https://images.pexels.com/photos/601798/pexels-photo-601798.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}
              alt="unsplash"
            />
          </div>
          <div className="title" data-depth="0.2">
            <h3>interfaceone.io</h3>
          </div>
        </div>
      </div>
      <main></main>
    </>
  );
};

export default withRouter(Hero);

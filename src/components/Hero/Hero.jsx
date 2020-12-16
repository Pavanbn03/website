import React from "react";
import "./Hero.scss";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";

const Hero = () => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });

  const navigateLeft = (e) => {
    console.log("left", e);
  };

  const navigateRight = (e) => {
    console.log("right", e);
  };

  return (
    <>
      <div className="logo">Logo</div>
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
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              onCanPlay={() => setPlayBack()}
              src="src\assets\videos\clouds.mp4"
            >
              {/* <source src="src\assets\videos\clouds.webm" type="video/webm" /> */}
            </video>
          </div>
          <div className="title" data-depth="0.2">
            <h3>emotion</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

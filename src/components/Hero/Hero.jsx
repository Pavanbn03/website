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
  return (
    <>
      <div className="logo">Logo</div>
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

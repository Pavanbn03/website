import React from "react";
import "./Hero.scss";
import { useEffect } from "react";
import Parallax from "parallax-js";

const Hero = () => {
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });
  return (
    <div className="hero-container">
      <div className="hero" id="scene">
        <video autoPlay loop muted>
          <source src="src\assets\videos\clouds.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;

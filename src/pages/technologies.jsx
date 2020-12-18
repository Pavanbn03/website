import React, { useEffect } from "react";
import "./AboutUs.scss";
import Rellax from "rellax";
import HeroPage from "./heropage";

const Technologies = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    new Rellax(".main-container", {
      // <---- Via class name
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <HeroPage
        pageName="Technologies"
        url="https://vod-progressive.akamaized.net/exp=1608273876~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3700%2F14%2F368501609%2F1525097604.mp4~hmac=96f770566b8694d86046358f91b5f9d1e5f016f5c7d441b20d05ee2158dbd8a0/vimeo-prod-skyfire-std-us/01/3700/14/368501609/1525097604.mp4?filename=Rain+-+28236.mp4"
      />
      <div className="main-container">
        <div className="left">
          <h2>Technologies</h2>
          <div className="paragraph">
            <div className="para-left">
              <h4>Our Services</h4>
              <p>storytelling</p>
              <p>content writing</p>
              <p>in-store installition</p>
              <div className="quote">
                <p>surprise</p>
                <p>meaningfull</p>
                <p>touching the</p>
                <p>audience</p>
              </div>
            </div>
            <div className="para-right">
              <h4>Storytelling</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate qui velit perspiciatis adipisci magnam sint quam, hic
                autem iusto? Et eum dolorum, natus laboriosam ut maxime ea
                provident corporis modi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <br />
              <p>
                Provident ipsam modi optio magnam dolores! Tenetur totam
                voluptas repellendus earum aspernatur inventore eaque, eius quam
                ea porro asperiores autem vitae maiores.
              </p>
              <br />
              <br />
              <br />
              <br />
              <h4>Authenticity</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate qui velit perspiciatis adipisci magnam sint quam, hic
                autem iusto? Et eum dolorum, natus laboriosam ut maxime ea
                provident corporis modi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <br />
              <br />
              <p>
                Provident ipsam modi optio magnam dolores! Tenetur totam
                voluptas repellendus earum aspernatur inventore eaque, eius quam
                ea porro asperiores autem vitae maiores.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="close" onClick={scrollTop}>
            <p>close</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;

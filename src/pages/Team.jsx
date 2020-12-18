import React, { useEffect } from "react";
import "./AboutUs.scss";
import Rellax from "rellax";
import HeroPage from "./heropage";

const Team = () => {
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
        pageName="Team"
        url="https://vod-progressive.akamaized.net/exp=1608262941~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4417%2F17%2F447087782%2F1961778071.mp4~hmac=74bf07ddd509e676d8f62a08fcb5ee4dc554e9abcdaa14366b20d18f115f5d91/vimeo-prod-skyfire-std-us/01/4417/17/447087782/1961778071.mp4?filename=Bird+-+46026.mp4"
      />
      <div className="main-container">
        <div className="left">
          <h2>Team</h2>
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

export default Team;

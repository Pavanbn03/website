import React, { useEffect } from "react";
import "./AboutUs.scss";
import Rellax from "rellax";
import HeroPage from "./heropage";

const AboutUs = () => {
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
        url="https://vod-progressive.akamaized.net/exp=1608272829~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F888%2F18%2F454440518%2F2002743477.mp4~hmac=a924ec6afc5682af57343bb8d44819c33b5bcf9846bb4746379815ecb873319d/vimeo-prod-skyfire-std-us/01/888/18/454440518/2002743477.mp4?filename=Cateye+-+48441.mp4"
        pageName="About Us"
      />
      <div className="main-container">
        <div className="left">
          <h2>About Us</h2>
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

export default AboutUs;

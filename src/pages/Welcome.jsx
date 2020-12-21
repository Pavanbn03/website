import React, { useEffect } from "react";

import Rellax from "rellax";
import HeroPage from "./heropage";

const Welcome = () => {
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
        pageName="Welcome"
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/Earth.mp4?alt=media&token=20b6bc1d-ec1a-4c53-807c-8a11f55421df`}
      />
      <div className="main-container">
        <div className="left">
          <h2>Welcome</h2>
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

export default Welcome;

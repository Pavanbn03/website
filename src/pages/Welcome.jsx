import React, { useEffect } from "react";
import Rellax from "rellax";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "./heropage";

const Welcome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 50 });
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
        title="Better digital experience with InterfaceOne"
        subTitle="Innovative Minds Delivering Experiences. Global products are born here."
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/Earth.mp4?alt=media&token=20b6bc1d-ec1a-4c53-807c-8a11f55421df`}
      />
      <div className="main-container">
        <div className="left" data-aos="fade-down">
          <h2>Welcome</h2>
          <div className="paragraph">
            <div className="para-left" data-aos="fade-right">
              <h4>Our Services</h4>
              <p>UI UX Design</p>
              <p>Mobile App Development</p>
              <p>Web App Development</p>
              <p>Application Maintainance</p>
              <p>Application Testing</p>
              <p>Devops</p>
              <div className="quote">
                <p>
                  You can trust us for any kind of services and some of the
                  world class companies have also trusted us .
                </p>
              </div>
            </div>
            <div className="para-right">
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/design.svg?alt=media&token=2b4b158e-9bb4-436d-b687-88443e5508b7`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>UI UX Design</h4>
                <p>
                  We craft subtle yet elegant design, which offers innovative
                  experience. Our capabilities include elegant designs and user
                  experience for various devices with different screen size and
                  types.
                </p>
              </div>
              <br />
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/mobile.svg?alt=media&token=d3f26bed-c370-4fd4-b73c-3758c2f72ea0`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>Mobile App Development</h4>
                <p>
                  We provide top notch mobile app development solutions. With
                  capabilities in Hybrid and Native mobile apps we help our
                  clients to precisely translate the ideations of advancement so
                  as to make their ventures successful.
                </p>
              </div>
              <br />
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/web.svg?alt=media&token=be7ef270-f01b-49a7-b2ad-d2c5d64e1687`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>Web App Development</h4>
                <p>
                  Offering profound innovation information and wide broadness of
                  experience over different enterprises to assist customers with
                  their custom web application development and support
                  activities.
                </p>
              </div>
              <br />
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/maintainance.svg?alt=media&token=b1efdc54-8aea-4749-a62a-5cedc2d443dc`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>Application Maintainance</h4>
                <p>
                  Evolving business needs make organizations to drive change in
                  the application environment, while mission critical
                  application and Infrastructures are maintained. We offer
                  application maintenance and support services to reduce system
                  blackout and improve the performance and efficiency.
                </p>
              </div>
              <br />
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/testing.svg?alt=media&token=19cd9185-326f-4788-a385-0fe99089f930`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>Application Testing</h4>
                <p>
                  In fast paced business world, there is no room for error.
                  Clients around the world join hands with us to accomplish the
                  best quality. We join unrivaled skill and inventive
                  instruments and strategies with a profound customer center to
                  guarantee your testing activity makes the most elevated
                  progress..
                </p>
              </div>
              <br />
              <div data-aos="fade-left">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/devops.svg?alt=media&token=c780c457-5478-442b-aba9-98c610c2cb7b`}
                  alt="Design"
                  width="50px"
                  height="50px"
                />
                <h4>Devops</h4>
                <p>
                  Our devops services aim at providing an automated practices
                  which helps bridge the gap between development and operations.
                  With devops best practices we help our customers reduce time
                  to market and increase efficiency of organizations while you
                  are focussed on mission critical business needs.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

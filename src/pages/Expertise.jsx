import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rellax from "rellax";
import HeroPage from "./heropage";

const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 55 });
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
        title="Experience digital transformation by leveraging technology and innovation"
        pageName="Products"
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/expertise.mp4?alt=media&token=b9cfc595-7071-4c8b-8db3-36755b06d3e5`}
      />
      <div className="expertise-container">
        <h1 className="title" data-aos="fade-down">
          Our Expertise
        </h1>
        <div className="image-container">
          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/banking.svg?alt=media&token=a2702d11-410a-4edc-95d6-dca3ffa9414e`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Banking and Finance</h2>
          </div>

          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/shopping.svg?alt=media&token=8e7ea66b-c329-4636-8892-b2d392b7ba91`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Shopping and E-commerce</h2>
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/eduction.svg?alt=media&token=76a709b7-335d-4341-999d-e401f9f34444`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Eduction</h2>
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/media.svg?alt=media&token=6161b321-3e53-434a-ba12-c26f3c83dea2`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Media and Entertainment</h2>
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/health.svg?alt=media&token=6256ab09-adf4-475c-9bd8-08472ea4d4aa`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Health and Fitness</h2>
          </div>
          <div className="image" data-aos="fade-right">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/real-estate.svg?alt=media&token=924f3693-3b7a-45d1-844e-f09dfd69e887`}
              alt=""
              width="150px"
              height="150px"
            />
            <h2>Real Estate</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

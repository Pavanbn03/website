import React, { useEffect } from "react";
import HeroPage from "./heropage";
import "./ContactUs.scss";

const ContactUs = () => {
  useEffect(() => {
    console.log("contact us page");
  });
  return (
    <>
      <HeroPage
        pageName="Contact Us"
        url="https://vod-progressive.akamaized.net/exp=1608273942~acl=%2A%2F470528582.mp4%2A~hmac=6bf7349a996ab901c872449279f13443724aff1761e278808ae3c0659e0edbfe/vimeo-prod-skyfire-std-us/01/589/6/152947486/470528582.mp4?filename=Fireplace+-+1971.mp4"
      />
      <div className="contact">
        <p>Contact Us</p>
      </div>
    </>
  );
};

export default ContactUs;

import React, { useEffect } from "react";
import HeroPage from "./heropage";
import "./ContactUs.scss";
const ContactUs = () => {
  useEffect(() => {
    console.log("contact us page");
  });
  return (
    <>
      <HeroPage />
      <div className="contact">
        <p>Contact Us</p>
      </div>
    </>
  );
};

export default ContactUs;

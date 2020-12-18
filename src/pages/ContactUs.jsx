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
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/fire.mp4?alt=media&token=c6b1c7ed-25d0-4b9f-8259-abd02a307b7d`}
      />
      <div className="contact">
        <p>Contact Us</p>
      </div>
    </>
  );
};

export default ContactUs;

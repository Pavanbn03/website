import React, { useEffect } from "react";
import HeroPage from "./heropage";

import Rellax from "rellax";

const ContactUs = () => {
  useEffect(() => {
    new Rellax(".rellax", {
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
        pageName="Contact Us"
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/contactus.mp4?alt=media&token=4cecd085-dbf0-451e-b931-ee10fc526342`}
      />
      <div className="contact">
        <div className="rellax">
          <h1 className="title">Contact Us</h1>
          <div className="form-container">
            <form className="form">
              <input
                className="input"
                type="text"
                placeholder="Firstname"
                required
              />
              <input className="input" type="text" placeholder="Lastname" />
              <input
                className="input"
                type="text"
                placeholder="Company"
                required
              />
              <input
                className="input"
                type="email"
                placeholder="E-Mail Address"
                required
              />
              <input className="button" type="submit" placeholder="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

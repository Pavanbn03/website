import React, { useEffect, useState } from "react";
import HeroPage from "./heropage";
import emailjs from "emailjs-com";
import Rellax from "rellax";
import Model from "../components/Model";

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

  const [model, setModel] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jtbl79",
        "template_6h7ucl3",
        e.target,
        "user_xcuPRRZ3zqSqXgIz4SAPl"
      )
      .then(
        (result) => {
          e.target.reset();
          setModel(true);
          setInterval(() => setModel(false), 2000);
        },
        (error) => {
          alert("Email not Sent. Please Try again");
        }
      );
  };
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
            <form className="form" onSubmit={sendEmail}>
              <input
                className="input"
                type="text"
                placeholder="Name"
                required
                name="name"
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="input"
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
              <textarea
                className="input message"
                type="text"
                placeholder="Message"
                required
                name="message"
              />
              <input className="button" type="submit" placeholder="Submit" />
            </form>
            {model ? <Model /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

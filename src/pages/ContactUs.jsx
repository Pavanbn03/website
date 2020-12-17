import React, { useEffect } from "react";
import HeroPage from "./heropage";
import "./ContactUs.scss";
import {
  pageTransition,
  pageVariants,
} from "../components/animation/animation";
import { motion } from "framer-motion";
const ContactUs = () => {
  useEffect(() => {
    console.log("contact us page");
  });
  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroPage imgurl={`https://unsplash.it/1600/1080`} />
      <div className="contact">
        <p>Contact Us</p>
      </div>
    </motion.div>
  );
};

export default ContactUs;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.scss";
import ReactPlayer from "react-player";
const SwiperHero = () => {
  const slides = [];
  for (let i = 0; i < 1; i += 1) {
    slides
      .push
      //   <SwiperSlide key={`slide-${i}`}>
      //     <video autoPlay muted loop src="src\assets\videos\1.mp4"></video>
      //   </SwiperSlide>
      ();
  }
  return (
    <React.Fragment>{/* <Swiper id="main">{slides}</Swiper> */}</React.Fragment>
  );
};

export default SwiperHero;

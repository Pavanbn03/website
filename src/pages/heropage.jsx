import React from "react";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";

const HeroPage = ({ url, pageName }) => {
  return (
    <div>
      <Menu />
      <Hero pageName={pageName} url={url} />
    </div>
  );
};

export default HeroPage;

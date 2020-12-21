import React from "react";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";

const HeroPage = ({ url, pageName, title = "", subTitle = "" }) => {
  return (
    <div>
      <Menu />
      <Hero pageName={pageName} url={url} title={title} subTitle={subTitle} />
    </div>
  );
};

export default HeroPage;

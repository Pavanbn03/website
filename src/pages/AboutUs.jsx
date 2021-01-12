import React, { useEffect } from "react";

import Rellax from "rellax";
import HeroPage from "./heropage";

const AboutUs = () => {
  useEffect(() => {
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
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/our%20service.mp4?alt=media&token=346fd2de-7a4d-4716-b6b9-19e1e0bc912d`}
        pageName="About Us"
        title="Perfect blend of technology and innoviation"
      />
      <div className="main-container">
        <div className="left">
          <h2>We are InterfaceOne.</h2>
          <div className="paragraph">
            <div className="para-left">
              <h4>Our Services</h4>
              <p>UI UX Design</p>
              <p>Mobile App Development</p>
              <p>Web App Development</p>
              <p>Application Maintenance</p>
              <p>Application Testing</p>
              <p>Devops</p>
              <p>Partners</p>
              <div className="quote">
                <p>surprise</p>
                <p>meaningfull</p>
                <p>touching the</p>
                <p>audience</p>
              </div>
            </div>
            <div className="para-right">
              <p>
                Passionate and Committed clan of geeks to craft next generation
                Customer Experience in Interfaceone is a new age Cx first
                company with emphasis on User experience driven engineering who
                loves to learn, collaborate and craft digital experiences which
                helps you make lasting impressions in the digital space. We
                build MVP’s for startups and custom software solutions for
                enterprises that guarantee scalability and prime user
                experiences. We cater to Fintech, Edtech, e-commerce, media
                &#38; entertainment, health &#38; fitness and real estate
                industries.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4>Partners</h4>
              <div className="partners">
                <p>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/google-icon.svg?alt=media&token=6d6858d3-b3cf-4b72-b300-55f90931f482`}
                  />
                  Google
                </p>
                <p>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/aws-2.svg?alt=media&token=508de927-c2ca-4018-97ec-8b9c15ba00eb`}
                  />
                  AWS
                </p>
                <p>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/microsoft-5.svg?alt=media&token=49368348-1115-422e-af6b-71425d3aa9aa`}
                  />
                  Microsoft
                </p>
                <p>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/mongodb.svg?alt=media&token=36dc2d85-36e8-4c40-90fb-91ee5994b399`}
                  />
                  MangoDB
                </p>
              </div>
              <br />
              <br />
              <h4>Clients</h4>
              <p>Client Names</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

// We are InterfaceOne.

// Passionate and Committed clan of geeks to craft next generation Customer Experience[n1]

// Interfaceone is a new age Cx first company with emphasis on User experience driven engineering who loves to learn, collaborate and craft digital experiences which helps you make lasting impressions in the digital space.

// We build MVP’s for startups and custom software solutions for enterprises that guarantee scalability  and prime user experiences. We cater to Fintech, Edtech, e-commerce, media & entertainment, health & fitness and real estate industries.

// Services:

// UI UX Design
// Mobile App Development
// Web App Development
// Application Maintenance
// Application Testing
// Devops
// Partners

// Google, AWS, Microsoft, MongoDB etc (logo)

// Clients

// Client Names:

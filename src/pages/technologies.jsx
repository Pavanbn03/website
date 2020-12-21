import React, { useEffect } from "react";

import Rellax from "rellax";
import HeroPage from "./heropage";

const Technologies = () => {
  useEffect(() => {
    new Rellax(".technologies-container", {
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
        pageName="Technologies"
        url={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/rain.mp4?alt=media&token=b362a64e-39bd-4f11-98e3-54d41446cf09`}
      />
      <div className="technologies-container">
        <div className="title">
          <h1>Technologies</h1>
        </div>
        <div className="image container">
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/react.svg?alt=media&token=2720d0bd-6faf-4a6d-b5da-b55b7ba7a8fb`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>React.js</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/nodejs.svg?alt=media&token=3e74e656-4c2a-4224-867b-8f1678eae74f`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Node.js</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/nextjs.svg?alt=media&token=63d4a5b4-5088-4289-a68e-ad92d48e4fd6`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Next.js</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/react-native.svg?alt=media&token=992271a5-63b9-4103-b95b-414b1e131e4a`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>React Native</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/android.svg?alt=media&token=053ba6f1-dae5-4cf7-9671-ad064bed3d48`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Android</p>
          </div>

          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/angular.svg?alt=media&token=10194b36-68ff-412a-8bc3-df06662ed956`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Angular.js</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/mongodb.svg?alt=media&token=e2d37405-6c6b-482c-a266-9597636faa66`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>mangoDB</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/postgresql.svg?alt=media&token=366f1ec2-bf21-4990-91c3-8ac9074356d2`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Postgres DB</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/rails.svg?alt=media&token=cbb988c4-21fa-41f4-a60f-ef9e64ee7271`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Ruby on Rails</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/docker.svg?alt=media&token=2de188ab-738b-44e0-8ec6-ba315de73f94`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Docker</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/kubernets.svg?alt=media&token=69fdf2da-8086-4203-81ac-161d3603150e`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Kubernets</p>
          </div>
          <div className="tech">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/crown-db-32445.appspot.com/o/kafka.svg?alt=media&token=c128ae86-4148-4e1a-acaf-b9003c0aef61`}
              alt=""
              width="200px"
              height="200px"
            />
            <p>Kafka</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;

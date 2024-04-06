import PhoneNumber from "./PhoneNumber";
import "./hero.css";
import React from "react";
const Hero = React.forwardRef((props, ref) => {
  return (
    <section className="hero-ctn" ref={ref}>
      <div className="hero">
        <div className="text">
          <h1>
            <b>NX Wave. </b>The next-gen credit card for those who love rewards.
          </h1>
          <p>
            1% Cashback
            <img
              src="./images/bullet.svg"
              className="bullet-pt"
              alt="bullet-pt"
            />
            5× Rewards
            <img
              src="./images/bullet.svg"
              className="bullet-pt"
              alt="bullet-pt"
            />
            Zero Forex Markup
          </p>
          <PhoneNumber type="inline" />
        </div>
        <img
          src="./images/nx_wave_hero.png"
          className="hero-img"
          alt="card-asset"
        />
      </div>
      <video
        className="bg-video"
        src="./images/nxt_wave_bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
});
export default Hero;

import React from "react";
import "./Hero.style.css";
import { Button } from "../button/Button.component";
import "../../App.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src="videos/video-gwl.mp4" autoPlay loop muted /> */}
      <h1>GWALIOR SMART CITY</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;

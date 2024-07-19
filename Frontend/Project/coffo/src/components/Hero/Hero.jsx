import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <Container>
        <div className="head">
          Coffee <br /> Shop
        </div>
        <div className="subhead">
          more-or-less normal distribution of letters, as opposed to using
        </div>
        <div className="hero-btn">
          <li>
            <a className="about" href="/About">ABOUT US</a>
            <a className="contact" href="/Contact">CALL NOW</a>
          </li>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

import "./Home.css";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Coffees from "../../pages/Coffees/Coffees"

function Home({style}) {


  return (
    <div className="home-container">
      <div className="Hero-1">
        <Hero />
      </div>

      <div className="About-1">
        <About />
      </div>

      <div className="Coffees-1">
        <Coffees />
      </div>

      <div className="Contact-1">
        <Contact />
      </div>
    </div>
  );
}

export default Home;

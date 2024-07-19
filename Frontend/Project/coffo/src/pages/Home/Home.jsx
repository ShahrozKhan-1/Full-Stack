import "./Home.css";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Coffees from "../../pages/Coffees/Coffees"

function Home({style}) {


  return (
    <div className="home-container">
      <Hero />
      <About />
      <Coffees />
      <Contact />
    </div>
  );
}

export default Home;

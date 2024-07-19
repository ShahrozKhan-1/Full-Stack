import React from "react";
import "./About.css";
import Button from 'react-bootstrap/Button';
import image from "../../assets/about-img.png";
// import "bootstrap/dist/css/bootstrap.min.css"

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-box-1">
          <p className="heading">ABOUT OUR SHOP</p>
          <p className="about-1-heading">Coffee distribution</p>
          <p>
            has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editorhas a
            more-or-less normal distribution of letters, as oppos
          </p>
          <Button variant="outline-danger px-4 py-2">READ MORE</Button>
        </div>
        <div className="about-box-2">
          <img src={image} />
        </div>
      </div>
    </>
  );
}

export default About;

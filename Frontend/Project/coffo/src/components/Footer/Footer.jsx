import React from "react";
import "./Footer.css";
import * as icons from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icon">
        <li>
          <a href="https://www.facebook.com" className="hoverEffect">
            <icons.Facebook size={40} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <icons.TwitterX size={40} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <icons.Linkedin size={40} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <icons.Instagram size={40} />
          </a>
        </li>
      </div>

      <div className="info">
        <icons.TelephoneFill /> <span>+01 123456789</span>
        <icons.EnvelopeFill /> <span>abcd@gmail.com</span>
      </div>

      <div>
        <InputGroup className="my-5">
          <Form.Control
            placeholder="Your Email"
            aria-label="Your Email"
            aria-describedby="basic-addon2"
            type="mail"
            style={{width: "40vw"}}
          />
          <Button variant="danger" id="button-addon2">
            <icons.ArrowRight size={20} />
          </Button>
        </InputGroup>
      </div>

      <div className="footer-copyright">
        2020 All Rights Reserved. Design by Free Html Templates Distribution by
        ThemeWagon
      </div>
    </div>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import logo from "./logo.png";
import * as icons from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function CoffoNavbar() {

  const [background, setBackground] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setBackground(true) : setBackground(false)
    })
  }, [])
  
  const location = useLocation();
  const navBack = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className= {`coffoNavbar ${background ? "bg-dark": " "} ${navBack ? " ": "bg-dark"}`}>
      <Navbar collapseOnSelect expand="lg" className="navbar-dark" >
        <Container fluid>
          <Navbar.Brand href="/" className="ms-5 brand">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link
                href="/home"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/coffees"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                Coffees
              </Nav.Link>
              <Nav.Link
                href="/blog"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="/shop"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="activeLink text-light px-4 py-4 fs-5"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="nav-icon">
                <icons.Person size={25} className="mx-2" />
                Login
              </div>
              <div className="nav-icon">
                <icons.Search size={25} className="mx-2" />
                Search
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CoffoNavbar;

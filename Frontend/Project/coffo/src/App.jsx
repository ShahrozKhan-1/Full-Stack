import "./App.css";
import { useState } from "react";
import CoffoNavbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Coffees from "./pages/Coffees/Coffees";
import Shop from "./pages/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <div>
        <CoffoNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/coffees" element={<Coffees />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

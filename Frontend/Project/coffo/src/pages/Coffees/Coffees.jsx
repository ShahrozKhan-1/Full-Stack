import React from "react";
import { Card, Button } from "react-bootstrap";
import Image1 from "../../assets/img-1.png";
import Image2 from "../../assets/img-2.png";
import Image3 from "../../assets/img-3.png";
import Image4 from "../../assets/img-4.png";
import "./Coffee.css"

const Coffees = () => {
  const cards = [
    {
      title: "Types of Coffees",
      text: "Looking at its layout. The point of",
      imgSrc: Image1,
    },
    {
      title: "Bean Varieties",
      text: "Looking at its layout. The point of",
      imgSrc: Image2,
    },
    {
      title: "Coffee and Pastry",
      text: "Looking at its layout. The point of",
      imgSrc: Image3,
    },
    {
      title: "Coffee To Go",
      text: "Looking at its layout. The point of",
      imgSrc: Image4,
    },
  ];

  return (
    <div className="coffee-container">
      <div className="heading">Our coffee Offer</div>
      <div className="coffee-carousel">
      {cards.map((card, index) => (
        <Card className="bg-dark text-light mx-2 my-2 coffee-card" style={{ width: "18rem", margin: "auto" }}>
          <Card.Img variant="top" src={card.imgSrc} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="outline-danger">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Coffees;

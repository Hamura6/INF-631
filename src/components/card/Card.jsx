import React from 'react';

const Card = () => {
  const cards = [
    { img: "imagenes/034.jpg", title: "The Vegan" },
    { img: "imagenes/011.jpg", title: "Cinco de Mayo" },
    { img: "imagenes/030.jpg", title: "Project Spartans" },
    { img: "imagenes/035.jpg", title: "True Hipsters" }
  ];

  return (
    <div className="container_card">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <h5>{card.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Card;
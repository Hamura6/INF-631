import React from 'react';

const Hero = () => {
  return (
    <div className="container">
      <div className="details">
        <h1>Diseño, Primer Parcial.</h1>
        <p>UI/UX Designer & Frontend Developer, Potosi.</p>
        <a href="#">VER MAS</a>
        <div className="redes">
          <img src="imagenes/redes1.jpg" alt="red social 1" />
          <img src="imagenes/redes2.jpg" alt="red social 2" />
          <img src="imagenes/redes3.jpg" alt="red social 3" />
          <img src="imagenes/redes4.jpg" alt="red social 4" />
          <img src="imagenes/redes5.jpg" alt="red social 5" />
        </div>
      </div>
      <div className="logo">
        <img src="imagenes/henry_hero2.jpg" alt="Henry Hero" />
      </div>
    </div>
  );
};

export default Hero;
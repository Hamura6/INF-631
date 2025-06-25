import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="title">
        <h5>Examen.1</h5>
      </div>
      <Hero />
      <Navbar />
    </header>
  );
};

export default Header;
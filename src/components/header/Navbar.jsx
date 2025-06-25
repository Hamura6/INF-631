import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-menu">
      <div className={`menu ${menuOpen ? 'show' : ''}`} id="menu">
        <ul>
          <li><a href="">INICIO</a></li>
          <li><a href="">PRODUCTO</a></li>
          <li><a href="">FOTOGRAFIAS</a></li>
          <li><a href="">DISEÑO</a></li>
          <li><a href="">CONTACTOS</a></li>
        </ul>
      </div>
      <div className="tapbar" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
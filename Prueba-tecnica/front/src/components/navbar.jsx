import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../img/logoo.png" alt="Logo" />
      </div>
      <h1 className="navbar-title">Gestión de Actas - Valentina Parra</h1>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../img/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Iniciosesion'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
         <img src={logo} alt="Logo" />
        </div>
        <h1 className="navbar-title">Gestión de Actas - Valentina Parra</h1>
      </div>

      <div className="navbar-right">
        <button className="logout-button" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/iniciosesion.css';

const Iniciosesion = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/actas');
  };

  return (
    <div className="iniciosesion-wrapper">
      <div className="iniciosesion-container">
        <h2 className="iniciosesion-title">Iniciar Sesión</h2>
        <form className="iniciosesion-form" onSubmit={handleLogin}>
          <div className="inputg">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
          </div>

          <div className="inputg">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </div>

          <button type="submit" className="iniciosesion-button">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Iniciosesion;

import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
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
        <p className="iniciosesion-subtitle">Ten acceso a tus actas desde aqui.</p>

        <form className="iniciosesion-form" onSubmit={handleLogin}>
       
          <div className="inputg">
           
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Correo electrónico"
              />
            </div>
          </div>

      
          <div className="inputg">
           
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Contraseña"
              />
            </div>
          </div>

      
          <div className="form-links">
            <Link to="/recuperar-clave" className="forgot-link">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          
          <button type="submit" className="iniciosesion-button">
            Ingresar
          </button>

          
          <div className="register-link">
            ¿No tienes cuenta? <Link to="/registro">Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Iniciosesion;

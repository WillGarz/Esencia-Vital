import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <div className="container">
          <h1>Esencia Vital</h1>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/comentarios">Comentarios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

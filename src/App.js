import React, { useEffect } from 'react'; // Importa React y el hook useEffect para manejar efectos secundarios en componentes funcionales.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router, Route y Routes de react-router-dom para manejar la navegación.
import './App.css'; // Importa el archivo de estilos globales para la aplicación.
import Header from './components/Header';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Comentarios from './components/Comentarios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import fondo from './assets/fondo.jpg';

const App = () => {

  // Estilos en línea para el contenedor principal de la aplicación.
  const appStyle = {
    backgroundImage: `url(${fondo})`, // Usa la imagen importada como fondo.
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: '#ffffff'
  };

  return (
    <Router>
      <div className="App" style={appStyle}> {/* Aplica los estilos en línea al contenedor principal. */}
        <Header /> 
        <div className="content"> {/* Contenedor para el contenido principal de la aplicación. */}
          <Routes>
             {/* Define las rutas y los componentes que se renderizarán para cada ruta. */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

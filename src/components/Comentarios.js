import React from 'react'; // Importa React para poder utilizar JSX y definir el componente.
import persona1 from '../assets/persona1.jpg';
import persona2 from '../assets/persona2.jpg';

const Comentarios = () => {
  return (
    <div className="comentarios">
      {/* Div con la clase "comentarios" que contiene todo el componente. */}
      <div className="container">
        <h2>Comentarios</h2>
        <div className="comentario">
          <img src={persona1} alt="Usuario 1" />
          <div className="texto-comentario">
            <h3>Lau Rojas</h3>
            <p>Funciona super bien ya lo he probado en más de 4 animalitos.</p>
          </div>
        </div>
        <div className="comentario">
          <img src={persona2} alt="Usuario 2" />
          <div className="texto-comentario">
            <h3>Will Garz</h3>
            <p>Exelente producto mi perrito tenía resequedad en sus garritas muy resecas y este producto le mejoro mucho.</p>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Comentarios; // Exporta el componente Comentarios para que pueda ser utilizado en otros archivos.

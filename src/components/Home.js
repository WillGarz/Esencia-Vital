import React from 'react'; // Importa React para poder utilizar JSX y definir el componente.

const Home = () => {
  // Define el componente funcional Home.
  return (
     // Retorna el JSX que representa la estructura y contenido del componente.
    <section id="inicio">
      <div className="container">
        <h2>Bienvenido a nuestra tienda de cosmética sólida natural</h2>
        <p>Descubre nuestros productos hechos con ingredientes naturales y sostenibles.</p>
      </div>
    </section>
  );
};

export default Home; // Exporta el componente Home para que pueda ser utilizado en otros archivos.
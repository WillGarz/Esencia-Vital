import React, { useEffect } from 'react'; // Importa React y el hook useEffect de la biblioteca de React.
import balsamo from '../assets/Jabon (2).jpg'; // Importa la imagen.
import balsamoHover from '../assets/balsamo-hover.jpg'; // Importa la imagen.
import protector from '../assets/protector.jpg'; // Importa la imagen.
import protectorHover from '../assets/protector-hover.jpg'; // Importa la imagen.
import jabon from '../assets/jabon.jpg'; // Importa la imagen.
import jabonHover from '../assets/jabon-hover.jpg'; // Importa la imagen.

const Productos = () => {

  useEffect(() => {
    // useEffect se utiliza para manejar efectos secundarios en el componente.
    const productos = document.querySelectorAll('.producto img'); // Selecciona todas las imágenes dentro de elementos con clase 'producto'.
    productos.forEach((img) => {
      const hoverSrc = img.getAttribute('data-hover-src'); // Obtiene el atributo data-hover-src de la imagen.
      const originalSrc = img.src;// Guarda la fuente original de la imagen.

      img.addEventListener('mouseover', () => (img.src = hoverSrc)); // Cambia la fuente de la imagen a la imagen de hover cuando se pasa el ratón por encima.
      img.addEventListener('mouseout', () => (img.src = originalSrc)); // Restaura la fuente de la imagen original cuando se quita el ratón.
    });
  }, []);

  return (
    <section id="productos">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="productos-container">
          <div className="producto">
            <img src={balsamo} alt="Bálsamo Humectante" data-hover-src={balsamoHover} />
            <h3>BÁLSAMO HUMECTANTE</h3>
            <p>El bálsamo de Esencia Vital genera una película protectora y humectante con propiedades cicatrizantes sobre la piel de nuestras mascotas.</p>
          </div>
          <div className="producto">
            <img src={protector} alt="Protector Solar" data-hover-src={protectorHover} />
            <h3>PROTECTOR SOLAR</h3>
            <p>El protector solar de Esencia Vital genera una película protectora y humectante sin afectar el pH de la piel, es resistente al agua, ofrece un FPS de 20+ el tiempo máximo de efecto de protección solar contra radiaciones UVA y UVB es de 4 horas, por ello se recomienda renovar la dosis pasado este tiempo o si tiene contacto con el agua. Nuestro protector solar permite disfrutar y realizar actividades al aire libre sin preocupaciones por irritaciones o quemaduras.</p>
          </div>
          <div className="producto">
            <img src={jabon} alt="Jabón Mantos Delicados" data-hover-src={jabonHover} />
            <h3>JABÓN MANTOS DELICADOS</h3>
            <p>Este jabón está especialmente diseñado para limpiar y proteger suavemente el pelaje de las mascotas con mantos delicados con fórmula 100% natural.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos; // Exporta el componente Productos para que pueda ser utilizado en otros archivos.

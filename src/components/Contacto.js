import React from 'react'; // Importa React para poder utilizar JSX y definir el componente.

const Contacto = () => {
  return (
    <section id="contacto">
      <div className="container">
        <h2>Contacto</h2>
        <div className="info-contacto">
          {/* Div que contiene la información de contacto. */}
          <p>Para cualquier consulta, no dudes en contactarnos:</p>
          <p><strong>Email:</strong> esenciavitalcol@gmail.com</p>
          <p><strong>Teléfono:</strong> +57 3138655454</p>
          <p><strong>Dirección:</strong> Chía, Colombia</p>
        </div>
        <div className="formulario-contacto">
          {/* Div que contiene el formulario de contacto. */}
          <h3>Envíanos un mensaje</h3>
          <form action="#" method="POST" id="formulario-contacto">
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
             {/* Botón de envío del formulario. */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto; // Exporta el componente Contacto para que pueda ser utilizado en otros archivos.

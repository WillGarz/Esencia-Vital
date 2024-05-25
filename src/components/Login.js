import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca de React.

const Login = () => {
  const [email, setEmail] = useState(''); // Declara una variable de estado 'email' con su setter 'setEmail', inicializada como una cadena vacía.
  const [password, setPassword] = useState(''); // Declara una variable de estado 'password' con su setter 'setPassword', inicializada como una cadena vacía.

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario, que es recargar la página.
    console.log('Email:', email); // Imprime el email ingresado en la consola.
    console.log('Password:', password); // Imprime la contraseña ingresada en la consola.
  };

  return (
    <section id="login">
      <div className="container">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           {/* Campo de entrada para el email, vinculado al estado 'email' y actualizando su valor con setEmail. */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Campo de entrada para la contraseña, vinculado al estado 'password' y actualizando su valor con setPassword. */}
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </section>
  );
};

export default Login; // Exporta el componente Login para que pueda ser utilizado en otros archivos.

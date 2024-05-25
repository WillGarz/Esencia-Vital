import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca de React.

const Register = () => {
  const [name, setName] = useState(''); // Declara una variable de estado 'name' con su setter 'setName', inicializada como una cadena vacía.
  const [email, setEmail] = useState(''); // Declara una variable de estado 'email' con su setter 'setEmail', inicializada como una cadena vacía.
  const [password, setPassword] = useState(''); // Declara una variable de estado 'password' con su setter 'setPassword', inicializada como una cadena vacía.
  const [confirmPassword, setConfirmPassword] = useState(''); // Declara una variable de estado 'confirmPassword' con su setter 'setConfirmPassword', inicializada como una cadena vacía.
  const [address, setAddress] = useState(''); // Declara una variable de estado 'address' con su setter 'setAddress', inicializada como una cadena vacía.

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario, que es recargar la página.
    if (password !== confirmPassword) { // Comprueba si las contraseñas coinciden.
      alert('Las contraseñas no coinciden'); // Muestra una alerta si las contraseñas no coinciden.
      return; 
    }
    // Lógica para manejar el registro
    console.log('Nombre:', name); // Imprime el nombre ingresado en la consola.
    console.log('Email:', email); // Imprime el email ingresado en la consola.
    console.log('Password:', password); // Imprime la contraseña ingresada en la consola.
    console.log('Dirección:', address); // Imprime la dirección ingresada en la consola.
  };

  return (
    
    <section id="register">
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
         {/* Formulario que llama a handleSubmit al ser enviado. */}
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* Campo de entrada para el nombre, vinculado al estado 'name' y actualizando su valor con setName. */}
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
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
         {/* Campo de entrada para confirmar la contraseña, vinculado al estado 'confirmPassword' y actualizando su valor con setConfirmPassword. */}
        <input
          type="text"
          placeholder="Dirección (opcional)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* Campo de entrada para la dirección, vinculado al estado 'address' y actualizando su valor con setAddress. Este campo es opcional. */}
        <button type="submit">Registrarse</button>
         {/* Botón para enviar el formulario. */}
      </form>
    </div>
  </section>
);
};

export default Register; // Exporta el componente Register para que pueda ser utilizado en otros archivos.

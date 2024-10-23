import '/src/App.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex-grow p-12 bg-[url('/src/imagenes/blur-hospital.jpg')] bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800">ProSalud UroGénica S.A.</h1>
        <p className="italic text-lg mt-4 text-center text-gray-600">Cuidando tu salud urológica, con confianza y profesionalismo.</p>
        <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
          Bienvenido a ProSalud UroGénica S.A. Regístrate o inicia sesión para acceder a nuestros servicios
          de salud urológica personalizados y mejorar tu bienestar con confianza.
        </p>
        <form className="mt-8">
          <input 
            type="email" 
            placeholder="Ingresa tu e-mail" 
            className="block mb-4 px-4 py-2 w-full border-b-2 border-gray-400 bg-transparent text-black transition-colors focus:outline-none focus:border-[#1a8b9e] placeholder-gray-500"
          />
          <input 
            type="password" 
            placeholder="Ingresa tu contraseña" 
            className="block mb-4 px-4 py-2 w-full border-b-2 border-gray-400 bg-transparent text-black transition-colors focus:outline-none focus:border-[#1a8b9e] placeholder-gray-500"
          />
          <Link to="/inicio2">
      <button 
        type="button" 
        className="w-full px-6 py-2 mt-4 border-2 border-gray-700 bg-gray-700 text-white rounded-md transition-colors hover:bg-white hover:text-gray-700 hover:border-gray-700"
      >
        Ingresar
      </button>
    </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

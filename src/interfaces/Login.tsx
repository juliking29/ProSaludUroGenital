import '/src/App.css';


const Login =() => {
    return (
      <div className="flex-grow text-left p-12 bg-[url('/src/imagenes/blur-hospital.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold">ProSalud UroGénica S.A.</h1>
        <p className="italic text-xl mt-2">Cuidando tu salud urológica, con confianza y profesionalismo.</p>
        <p className="mt-8 text-lg">
          
          Bienvenido a ProSalud UroGénica S.A. Regístrate o inicia sesión para acceder a nuestros servicios
           de salud urológica personalizados y mejorar tu bienestar con confianza.</p>
        <form className="mt-8">
          <input type="email" placeholder="Ingresa tu e-mail" className="block mb-4 px-4 py-2 w-96 border-b-2 border-black bg-transparent text-black transition-colors focus:outline-none focus:border-[#1a8b9e]" />
          <input type="password" placeholder="Ingresa tu contraseña" className="block mb-4 px-4 py-2 w-96 border-b-2 border-black bg-transparent text-black transition-colors focus:outline-none focus:border-[#1a8b9e]" />
          <button type="submit" className="px-6 py-2 mt-4 border-2 border-black bg-transparent text-black rounded-md transition-colors hover:bg-black hover:text-white">Ingresar</button>
        </form>
      </div>
    );
  }

export default Login;
import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaUserCircle } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import { Link } from "react-router-dom";
import LOGO from '/src/imagenes/logo.png';

const AddUser = () => {
  const [telefono, setTelefono] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [isCitasMenuOpen, setCitasMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar teléfono
    if (telefono.length !== 10) {
      setErrorTelefono("El número telefónico debe tener exactamente 10 dígitos.");
      return;
    } else {
      setErrorTelefono("");
    }

    // Validar contraseñas
    if (password !== confirmPassword) {
      setErrorPassword("Las contraseñas no coinciden.");
      return;
    } else {
      setErrorPassword("");
    }

    // Aquí puedes procesar el formulario, por ejemplo enviarlo a la API
    console.log("Formulario enviado con éxito");
  };

  const toggleCitasMenu = () => {
    setCitasMenuOpen(!isCitasMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-2 bg-[#1a8b9e]">
        <div className="flex items-center">
          <img src={LOGO} alt="ProSalud UroGénica S.A." className="h-20 w-20" />
          <span className="text-white text-lg font-bold">ProSalud UroGénica S.A.</span>
        </div>
        <nav className="flex space-x-8">
        <Link to="/" className="text-white text-lg font-bold">Inicio</Link>
          <Link to="/agendar" className="text-white text-lg font-bold">Agendar Cita </Link>
          <Link to="/historial" className="text-white text-lg font-bold">Historial Citas </Link>
          <Link to="/contacto" className="text-white text-lg font-bold">Contactanos</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-1 m-4 flex-col md:flex-row">
        {/* Imagen de fondo con texto centrado */}
        <div
          className="relative w-full md:w-1/3 bg-cover bg-center mr-0 md:mr-8 h-64 md:h-auto"
          style={{
            backgroundImage: "url('https://placehold.co/600x400')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h2 className="text-2xl md:text-4xl font-bold">REGISTRO DE USUARIOS</h2>
            <p className="mt-4 text-sm md:text-base">
              Regístrate para acceder a nuestros servicios de salud urológica.
              Completa tus datos para iniciar tu atención personalizada.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-2/3 bg-gray-100 p-8 space-y-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium">Nombres*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Apellidos*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Número telefónico*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
              {errorTelefono && <p className="text-red-500 text-sm">{errorTelefono}</p>}
            </div>
            <div>
              <label className="block font-medium">Correo electrónico*</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Número de identificación*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Tipo de usuario*</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="paciente">Paciente</option>
                <option value="especialista">Especialista</option>
                <option value="operador">Operador</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Contraseña*</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Confirmar Contraseña*</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errorPassword && <p className="text-red-500 text-sm">{errorPassword}</p>}
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white p-2 rounded"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-[#1a8b9e] text-white text-xs flex justify-around items-center">
        <div className="text-center">
          <p>Dirección: Carrera No 36 – 76 Torre 3 Piso 4 Centro Empresarial Elemento Bucaramanga.</p>
          <p>Postal Code: 282462</p>
          <p>Horario: Lunes a viernes: 8:00 am - 5:00 pm</p>
          <p>Contacto: 3153209599</p>
        </div>
        <div className="text-center">
          <p>Atención línea: PBX: 57 123 83555 / PBX: 57 123 3344</p>
        </div>
        <div className="text-center">
          <p>Email: psurogenica@gmail.com</p>
          <p>Support email: urogenicajps@ips.saludprototal</p>
        </div>
      </footer>
    </div>
  );
};

export default AddUser;

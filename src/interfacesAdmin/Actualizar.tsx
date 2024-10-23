import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaUserCircle } from "react-icons/fa"; // Asegúrate de instalar react-icons
import LOGO from '/src/imagenes/logo.png';
import { Link } from "react-router-dom";

const Actualizar = () => {
  const [isCitasMenuOpen, setIsCitasMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleCitasMenu = () => {
    setIsCitasMenuOpen(!isCitasMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const pacientes = [
    { id: "#50187", name: "Alvaro Rodriguez", user: "Alvaro R", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Juliana King", user: "Juliana K", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Jose Montero", user: "Jose M", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Luz Rodriguez", user: "Luz R", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Pablo Bravo", user: "Pablo B", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Alex Montañez", user: "Alex M", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Davis Arenas", user: "Davis A", number: "1312343243", cedula: "1312343243" },
    { id: "#50187", name: "Nicolas Rey", user: "Nicolas R", number: "1312343243", cedula: "1312343243" },
  ];

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

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          {/* Barra de búsqueda */}
          <div className="mb-4 relative">
            <div className="flex items-center">
              <FaSearch className="absolute ml-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Registro</h2>
          {/* Tabla de pacientes */}
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Registro No.</th>
                <th className="text-left p-2">Nombre Paciente</th>
                <th className="text-left p-2">Usuario</th>
                <th className="text-left p-2">N. Paciente</th>
                <th className="text-left p-2">Cédula</th>
                <th className="text-left p-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((patient, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">{patient.id}</td>
                  <td className="p-2">{patient.name}</td>
                  <td className="p-2">{patient.user}</td>
                  <td className="p-2">{patient.number}</td>
                  <td className="p-2">{patient.cedula}</td>
                  <td className="p-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600">
                      Actualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default Actualizar;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import LOGO from '/src/imagenes/logo.png';
import { Link } from "react-router-dom";

const Cancelar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const citas = [
    { id: "#278934", doctor: "Dr. Monserrate", especialidad: "Cardiologo", fecha: "12/10/2024", hora: "14:00 p.m" },
    { id: "#208789", doctor: "Dr. Carvajal", especialidad: "Optetra", fecha: "24/10/2024", hora: "09:00 a.m" },
    { id: "#208907", doctor: "Dr. Martinez", especialidad: "Hepatología", fecha: "26/10/2024", hora: "10:00 a.m" },
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
          <Link to="/agendar" className="text-white text-lg font-bold">Agendar Cita</Link>
          <Link to="/historial" className="text-white text-lg font-bold">Historial Citas</Link>
          <Link to="/contacto" className="text-white text-lg font-bold">Contactanos</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Barra de búsqueda */}
          <div className="mb-4 relative">
            <div className="flex items-center">
              <FaSearch className="absolute ml-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Citas */}
          {citas.map((cita, index) => (
            <div key={index} className="bg-white p-4 mb-6 rounded-lg shadow-lg flex items-center">
              {/* Imagen placeholder */}
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Doctor"
                  className="w-full h-full rounded-full"
                />
              </div>
              {/* Información de la cita */}
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{cita.doctor}</h3>
                <p className="text-sm text-gray-600">Cita: {cita.id} - {cita.especialidad}</p>
                <p className="text-sm text-gray-600">Fecha: {cita.fecha} - Hora: {cita.hora}</p>
              </div>
              {/* Botones de acción */}
              <div className="flex space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Cancelar
                </button>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500">
                  Reprogramar
                </button>
              </div>
            </div>
          ))}
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

export default Cancelar;

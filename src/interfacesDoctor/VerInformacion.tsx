import React from "react";
import LOGO from '/src/imagenes/logo.png';
import { Link } from 'react-router-dom';

function DoctorPaci() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center p-2 bg-[#1a8b9e]">
        <div className="flex items-center">
          <img src={LOGO} alt="ProSalud UroGénica S.A." className="h-20 w-20" />
          <span className="text-white text-lg font-bold">ProSalud UroGénica S.A.</span>
        </div>
        <nav className="flex space-x-8">
          <Link to="/" className="text-white text-lg font-bold">Inicio</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg flex-grow">
        {/* Patient Info */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <img
                src="https://placehold.co/100x100"
                alt="Foto de perfil de un hombre joven"
                className="rounded-full mr-4 shadow-md"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1a8b9e]">Juan Nicolas Rey Vazques</h2>
                <p className="text-gray-600">Hombre</p>
                <p className="text-gray-600">Edad: 20</p>
                <p className="text-gray-600">321456789</p>
                <p className="text-gray-600">juantodoatrojo@rio.com</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Última visita: 19/08/2024</p>
              <h3 className="font-bold mt-2 text-lg text-[#1a8b9e]">Alergias Conocidas</h3>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Estudio</span>
                <span>Calculo</span>
                <span>A parchar</span>
              </div>
            </div>
          </div>

          {/* Recent Signs */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#1a8b9e]">Signos recientes</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-bold text-2xl text-gray-700">39.2°C</p>
                <p className="text-sm text-gray-600">Nivel de temperatura</p>
                <p className="text-xs text-gray-500">Hoy</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-700">130/80 mm Hg</p>
                <p className="text-sm text-gray-600">Presión arterial</p>
                <p className="text-xs text-gray-500">Hoy</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-700">125 mg/dl</p>
                <p className="text-sm text-gray-600">Nivel de glucosa</p>
                <p className="text-xs text-gray-500">Antes de cenar</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-700">1.55 m</p>
                <p className="text-sm text-gray-600">Estatura</p>
                <p className="text-xs text-gray-500">Hoy</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-700">90 Kg</p>
                <p className="text-sm text-gray-600">Peso</p>
                <p className="text-xs text-gray-500">Hoy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Razón Consulta */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#1a8b9e]">Razón de Consulta</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <textarea
              value="Dolor abdominal persistente y fiebre alta de 3 días de duración."
              className="w-full p-4 h-32 text-lg border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#1a8b9e] transition duration-200"
              readOnly
            />
          </div>
        </div>

        {/* Botón Historia Clínica */}
        <div className="flex justify-end">
          <Link to="/historia-medica">
            <button className="bg-[#1a8b9e] text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
              Historia Clínica
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-[#1a8b9e] text-white text-xs flex justify-around items-center shadow-lg">
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
}

export default DoctorPaci;

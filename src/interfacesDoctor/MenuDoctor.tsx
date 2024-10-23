import React, { useState } from "react";
import LOGO from '/src/imagenes/logo.png';
import { Link } from 'react-router-dom';

function MenuDoctor() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCitasMenuOpen, setIsCitasMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleCitasMenu = () => setIsCitasMenuOpen(!isCitasMenuOpen);

  // Datos de citas con nombres y géneros variados
  const citas = [
    { registro: "#10012", nombre: "Lucía Martínez", genero: "Femenino", razon: "Consulta General" },
    { registro: "#10013", nombre: "Andrés López", genero: "Masculino", razon: "Control de Neumonía" },
    { registro: "#10014", nombre: "María González", genero: "Femenino", razon: "Revisión Cardiológica" },
    { registro: "#10015", nombre: "Carlos Sánchez", genero: "Masculino", razon: "Consulta Dermatológica" },
    { registro: "#10016", nombre: "Sofía Ramírez", genero: "Femenino", razon: "Chequeo de Diabetes" },
    { registro: "#10017", nombre: "Pedro Fernández", genero: "Masculino", razon: "Revisión Urológica" },
    { registro: "#10018", nombre: "Elena Cruz", genero: "Femenino", razon: "Consulta Oftalmológica" },
    { registro: "#10019", nombre: "Jorge Torres", genero: "Masculino", razon: "Consulta Neurológica" },
    { registro: "#10020", nombre: "Laura Muñoz", genero: "Femenino", razon: "Revisión Oncológica" },
    { registro: "#10021", nombre: "Miguel Castillo", genero: "Masculino", razon: "Chequeo Post-operatorio" },
    { registro: "#10022", nombre: "Fernanda Vargas", genero: "Femenino", razon: "Consulta de Rutina" },
    { registro: "#10023", nombre: "Antonio Pérez", genero: "Masculino", razon: "Chequeo Cardiovascular" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Encabezado */}
      <header className="flex justify-between items-center p-2 bg-[#1a8b9e]">
        <div className="flex items-center">
          <img src={LOGO} alt="ProSalud UroGénica S.A." className="h-20 w-20" />
          <span className="text-white text-lg font-bold">ProSalud UroGénica S.A.</span>
        </div>
        <nav className="flex space-x-8">
          <Link to="/" className="text-white text-lg font-bold">Inicio</Link>
          <Link to="/orden-medica" className="text-white text-lg font-bold">Orden medica</Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow bg-white m-4 rounded-lg p-6 shadow-lg">
        <div className="flex space-x-6">
          {/* Sección izquierda */}
          <div className="w-2/3">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#1a8b9e] transition duration-200"
            />
            <div className="text-sm text-gray-600 mt-4 mb-2">Hoy</div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {["Citas", "Horas", "Cirugías"].map((title, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg relative hover:bg-gray-200 transition-colors duration-200 shadow-md"
                >
                  <div className="absolute top-2 right-2 bg-[#4acaca] text-white p-2 rounded-full shadow-md">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                  <div className="text-gray-600 font-medium">{title}</div>
                  <div className="text-4xl font-bold mt-2 text-[#1a8b9e]">
                    {index === 0 ? "12" : index === 1 ? "2h" : "1"}
                    {index === 1 && (
                      <i className="far fa-clock ml-2 text-2xl"></i>
                    )}
                    {index === 2 && (
                      <i className="fas fa-syringe ml-2 text-2xl"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tabla de citas */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl text-gray-700">Citas</h2>
              </div>
              <table className="w-full text-sm text-gray-700">
                <thead className="border-b">
                  <tr>
                    <th className="text-left p-2">Registro No.</th>
                    <th className="text-left p-2">Nombre Paciente</th>
                    <th className="text-left p-2">Género</th>
                    <th className="text-left p-2">Razón</th>
                    <th className="text-left p-2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {citas.map((cita, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-2">{cita.registro}</td>
                      <td className="p-2">{cita.nombre}</td>
                      <td className="p-2">{cita.genero}</td>
                      <td className="p-2">{cita.razon}</td>
                      <td className="p-2">
                        <Link to="/infopac" className="text-[#4acaca] hover:underline">Ver</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sección derecha - Cronograma del Día */}
          <div className="w-1/3">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl text-gray-700">Cronograma del Día</h2>
              </div>
              <div className="relative">
                {["10:00", "11:00", "12:00"].map((time, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="font-bold text-lg text-[#1a8b9e]">{time}</div>
                      <div className="h-px w-full bg-gray-300"></div>
                    </div>
                    <div className="ml-4 mt-2 bg-[#e6f7f9] p-3 rounded-lg shadow-sm hover:bg-[#c4ebef] transition-colors duration-300">
                      {index === 0 && (
                        <>
                          <div className="mb-2 font-bold">Cita con Nicolás Rey - 10:00</div>
                          <div className="mb-2 font-bold">Revisión Paciente #50907 - 10:30</div>
                          <div className="mb-2 font-bold">Cita con Josué Daniel Gómez - 10:50</div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="mb-2 font-bold">Cita con Santiago Florez - 11:30</div>
                          <div className="mb-2 font-bold">Cita con Oscar Rios - 11:50</div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="mb-2 font-bold">Cita con Carlos Rios - 12:30</div>
                          <div className="mb-2 font-bold">Cita con Emmanuel Gomez - 12:50</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pie de página */}
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
}

export default MenuDoctor;

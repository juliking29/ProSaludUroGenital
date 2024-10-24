import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';
import IMAGEN from '/src/imagenes/imagen1.jpg';

const Reprogramar = () => {
  // Simulación de datos prellenados (los que no se pueden modificar)
  const [formData, setFormData] = useState({
    identificador: "#50187",
    nombreUsuario: "Alvaro R",
    nombres: "Alvaro",
    apellidos: "Rodriguez",
    tipoCita: "General",
    numeroTelefonico: "3133333058",
    numeroIdentificacion: "123456789",
    correo: "alvaro@example.com",
    especialista: "Ginecologo",
    fecha: "",
    hora: ""
  });

  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga

  // Manejar el cambio de fecha y hora
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Evita el comportamiento predeterminado del formulario
    setLoading(true); // Activa la animación de carga

    // Simular una demora de 3 segundos antes de completar la reprogramación
    setTimeout(() => {
      setLoading(false); // Desactivar la animación de carga
      alert('Cita reprogramada con éxito'); // Muestra una alerta después de la carga
    }, 3000); // 3 segundos
  };

  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-grow bg-gray-100 p-8">
        <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <div className="w-1/2 p-8">
              <h1 className="text-5xl font-bold text-[#1a8b9e] mb-4">REPROGRAMAR CITA</h1>
              <h2 className="text-2xl text-teal-500 mb-4">Modifica la fecha y hora de tu cita.</h2>
              <p className="text-gray-600 mb-4">Reprograma tu cita de manera rápida y sencilla. Recuerda que los demás datos no pueden ser modificados.</p>
              <img src={IMAGEN} alt="Doctor shaking hands with a patient in a medical office setting" className="rounded-lg shadow-md" />
            </div>
            <div className="w-1/2 p-8 bg-gray-50">
              {/* Mostrar animación de carga mientras está en estado de "loading" */}
              {loading ? (
                <div className="flex items-center justify-center min-h-full">
                  <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-teal-500 rounded-full animate-spin"></div>
                  <p className="ml-2">Cargando...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                  {/* Campos prellenados (no modificables) */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Identificador*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.identificador}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Nombre de usuario*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.nombreUsuario}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Nombres*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.nombres}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Apellidos*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.apellidos}
                      disabled
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Tipo de cita*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.tipoCita}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Número telefónico*</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.numeroTelefonico}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Número de identificación*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.numeroIdentificacion}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.correo}
                      disabled
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Especialista*</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-teal-100"
                      value={formData.especialista}
                      disabled
                    />
                  </div>

                  {/* Campos modificables (Fecha y Hora) */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Hora*</label>
                    <input
                      type="time"
                      name="hora"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100"
                      value={formData.hora}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Fecha*</label>
                    <input
                      type="date"
                      name="fecha"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100"
                      value={formData.fecha}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" disabled={loading}>
                      Reprogramar cita
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-[#1a8b9e] text-white text-xs flex justify-around items-center">
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

export default Reprogramar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';
import IMAGEN from '/src/imagenes/imagen1.jpg';

const Agendar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();  // Evita el comportamiento predeterminado del formulario
        setModalVisible(true);  // Muestra el modal
    };

    const closeModal = () => {
        setModalVisible(false);  // Cierra el modal
    };

    return (
        <div className="flex flex-col min-h-screen">
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

            <main className="flex-grow bg-gray-100 p-8">
                <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex">
                        <div className="w-1/2 p-8">
                            <h1 className="text-5xl font-bold text-[#1a8b9e] mb-4">REGISTRO DE CITAS</h1>
                            <h2 className="text-2xl text-teal-500 mb-4">Agenda tu cita en ProSalud UroGénica S.A.</h2>
                            <p className="text-gray-600 mb-4">Regístrate hoy para programar tu cita y accede a nuestros servicios especializados en salud urológica. Recibe atención personalizada para tu bienestar.</p>
                            <img src={IMAGEN} alt="Doctor shaking hands with a patient in a medical office setting" className="rounded-lg shadow-md" />
                        </div>
                        <div className="w-1/2 p-8 bg-gray-50">
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                                {/* Form fields */}
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Identificador*</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Nombre de usuario*</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Nombres*</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Apellidos*</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Tipo de cita*</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100">
                                        <option>Seleccionar</option>
                                        <option>Prioritaria</option>
                                        <option>general</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Número telefónico*</label>
                                    <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Número de identificación*</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
                                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Especialista*</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100">
                                        <option>Seleccionar</option>
                                        <option>Ginecologo</option>
                                        <option>Urogenico</option>
                                    </select>
                                </div>
                                
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Hora*</label>
                                    <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Fecha*</label>
                                    <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 bg-teal-100" />
                                </div>
                                <div className="col-span-2">
                                    <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                                    <Link to="/colilla" className="text-white text-lg font-text">Generar colilla de pago</Link>
                                    </button>
                                </div>
                            </form>
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
export default Agendar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';

function Historial() {
    const [showCancelModal, setShowCancelModal] = useState(false); // Estado para mostrar el modal de confirmación
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para mostrar el modal de éxito

    const handleCancelClick = () => {
        setShowCancelModal(true); // Mostrar el modal de confirmación
    };

    const handleConfirmCancel = () => {
        setShowCancelModal(false); // Cerrar el modal de confirmación
        setShowSuccessModal(true); // Mostrar el modal de éxito
    };

    const handleCloseCancelModal = () => {
        setShowCancelModal(false); // Cerrar el modal de confirmación
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false); // Cerrar el modal de éxito
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
            <main className="flex-grow p-8">
                <h2 className="text-2xl font-bold mb-4">Historial de citas :</h2>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="https://placehold.co/50x50" alt="Doctor's profile" className="mr-4" />
                            <div>
                                <h3 className="font-bold">Dr. Monserrate</h3>
                                <p>Cita: #2089</p>
                                <p>Cita: 20/10/2024</p>
                                <p>Hora: 8:00 a.m</p>
                                <p>Cardiologo</p>
                            </div>
                        </div>
                        <button onClick={handleCancelClick} className="bg-red-500 text-white px-4 py-2 rounded">Cancelar</button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="https://placehold.co/50x50" alt="Doctor's profile" className="mr-4" />
                            <div>
                                <h3 className="font-bold">Dr. Peralta</h3>
                                <p>Cita: #2089</p>
                                <p>Cita: 19/10/2024</p>
                                <p>Hora: 14:00 p.m</p>
                                <p>Cardiologo</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="https://placehold.co/50x50" alt="Doctor's profile" className="mr-4" />
                            <div>
                                <h3 className="font-bold">Dr. Montero</h3>
                                <p>Cita: #2089</p>
                                <p>Cita: 19/10/2024</p>
                                <p>Hora: 16:00 p.m</p>
                                <p>Cardiologo</p>
                            </div>
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

            {/* Modal de confirmación */}
            {showCancelModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">¿Estás seguro de cancelar la cita?</h2>
                        <div className="flex justify-between">
                            <button
                                onClick={handleConfirmCancel}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                            >
                                Sí
                            </button>
                            <button
                                onClick={handleCloseCancelModal}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de éxito */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-teal-500 mb-4">Cita cancelada correctamente</h2>
                        <button
                            onClick={handleCloseSuccessModal}
                            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Historial;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';
import IMAGEN from '/src/imagenes/pago.png';
import VISA from '/src/imagenes/visa.png';
import MASTER from '/src/imagenes/Mastercard.png';
import DINERS from '/src/imagenes/diners.png';
function MetodoDePago() {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const navigate = useNavigate(); // Hook para redireccionar

    const handlePayment = () => {
        // Mostrar el mensaje de éxito.
        setPaymentSuccess(true);

        // Después de 3 segundos, redirigir a la página principal.
        setTimeout(() => {
            setPaymentSuccess(false);
            navigate('/inicio2'); // Redirigir a la página principal
        }, 3000);
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
                    <Link to="/login" className="text-white text-lg font-bold">Inicio Sesión</Link>
                    <Link to="/registroUsuarios" className="text-white text-lg font-bold">Registro Usuarios</Link>
                    <Link to="/contacto" className="text-white text-lg font-bold">Contáctanos</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="flex-grow bg-gradient-to-r from-[#1a8b9e] to-[#1fc0d6] flex justify-center items-center relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl w-2/3 flex hover:shadow-3xl transform hover:scale-105 transition-transform duration-300">
                    <div className="w-1/2">
                        <img
                            src={IMAGEN}
                            alt="Payment terminal with card inserted"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-1/2 pl-8">
                        <h1 className="text-4xl font-bold text-[#1a8b9e]-700 mb-6">Elige tu Método de Pago</h1>
                        <div className="mb-6">
                            <label className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="form-radio text-purple-600"
                                    defaultChecked
                                />
                                <span className="ml-2 text-lg font-semibold">Tarjeta de Crédito</span>
                                <div className="flex ml-4 space-x-2 ">
                                    <img src={VISA} alt="Visa" className="rounded shadow-sm w-10 mx-2" />
                                    <img src={MASTER} alt="Amex" className="rounded shadow-sm w-10 mx-2" />
                                    <img src={DINERS} alt="Mastercard" className="rounded shadow-sm w-10 mx-2" />
                                </div>
                            </label>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Nombre del titular</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Número de tarjeta</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">Fecha de expiración</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"
                                            placeholder="MM / YY"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium">CVV</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Botón Pagar */}
                        <div className="text-center mt-8">
                            <button
                                className="bg-[#1a8b9e] text-white text-lg font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-[#155e6e] transition-colors duration-300"
                                onClick={handlePayment}
                            >
                                Pagar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mensaje de éxito */}
                {paymentSuccess && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-black-500 transform scale-105 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-black-600 mb-4">Pago realizado exitosamente</h2>
                            <p className="text-gray-600">Gracias por confiar en ProSalud UroGénica S.A.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
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
}

export default MetodoDePago;

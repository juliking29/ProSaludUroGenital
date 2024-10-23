import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BienvenidaAdmin = () => {
    const [isCitasMenuOpen, setCitasMenuOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    const toggleCitasMenu = () => {
        setCitasMenuOpen(!isCitasMenuOpen);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <div className="bg-[#00a19b] min-h-screen">
            <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://placehold.co/40x40"
                        alt="Logo de un corazón con línea de latido"
                        className="mr-2"
                    />
                    <h1 className="text-xl font-bold">Nombre del Sistema</h1>
                </div>
                <nav className="flex items-center">
                    <a href="#" className="mx-2 text-lg">Inicio</a>
                    {/* Menú de citas */}
                    <div className="relative mx-2">
                        <button
                            onClick={toggleCitasMenu}
                            className="flex items-center text-lg focus:outline-none bg-blue-300 px-4 py-2 rounded-md"
                        >
                            Menú
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`ml-1 transform transition-transform duration-200 ${isCitasMenuOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </button>
                        {isCitasMenuOpen && (
                            <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 w-40">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Añadir Usuario</a></li>
                                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Actualizar Información</a></li>
                                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Eliminar Usuario</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Menú de usuario */}
                    <div className="relative mx-2">
                        <div className="flex items-center cursor-pointer" onClick={toggleUserMenu}>
                            <span className="mr-2">Nombre</span>
                            <FontAwesomeIcon icon={faUser} className="text-2xl" />
                        </div>
                        {isUserMenuOpen && (
                            <div className="absolute top-full right-0 bg-white text-black rounded shadow-lg mt-2 w-40">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Perfil</a></li>
                                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Configuraciones</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <main className="container mx-auto mt-8 p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://placehold.co/400x400/png?text=Doctors+Meeting" alt="Dos médicos conversando en una oficina, uno sosteniendo una tableta" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Bienvenido Administrador</h2>
                            <p className="text-gray-700 mb-4">
                                Es un placer tenerlo aquí. Este espacio está diseñado para facilitar la gestión y optimización de nuestras operaciones. A través de él, podrá acceder a herramientas y recursos que le permitirán tomar decisiones informadas y contribuir al éxito de nuestra organización.
                            </p>
                            <p className="text-gray-700 mb-4">Aquí hay un resumen de sus principales funciones:</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Gestionar usuarios y roles.</li>
                                <li>Configurar las preferencias del sistema.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 mb-8">
                    <h3 className="text-xl font-bold mb-4">Actividades Recientes</h3>
                    <ul className="list-disc list-inside">
                        <li>Usuario "Juan Pérez" actualizado el perfil.</li>
                        <li>Se creó un nuevo registro de paciente.</li>
                        <li>Se generó un informe de evaluación del mes pasado.</li>
                        <li>Se envió un recordatorio de cita a los pacientes.</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                    <h3 className="text-xl font-bold mb-4">Estadísticas del Sistema</h3>
                    <p className="text-gray-700 mb-2">Total de usuarios: <span className="font-bold">120</span></p>
                    <p className="text-gray-700 mb-2">Citas programadas esta semana: <span className="font-bold">45</span></p>
                    <p className="text-gray-700 mb-2">Pacientes atendidos este mes: <span className="font-bold">300</span></p>
                </div>
            </main>

            <footer className="bg-teal-600 text-white p-4 text-sm">
                <div className="flex justify-between">
                    <div>
                        <p>Dirección: Carrera No 56 - 76 Torre 3 Piso 4 Centro Empresarial</p>
                        <p>Elemento Bucaramanga</p>
                    </div>
                    <div>
                        <p>Horario:</p>
                        <p>Lunes a Viernes: 8:00 am - 5:00 pm</p>
                    </div>
                    <div>
                        <p>Atención línea:</p>
                        <p>PBX: 57 1 320 8555</p>
                        <p>PBX: 57 1 23 3434</p>
                    </div>
                    <div>
                        <p>Email: info@agenciageneral.com</p>
                        <p>Soporte email:</p>
                        <p>urgenciasips@ips.saludprototal</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BienvenidaAdmin;

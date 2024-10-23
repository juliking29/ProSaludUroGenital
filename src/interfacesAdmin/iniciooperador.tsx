import React, { useState, useEffect } from 'react';
import Bienvenida from '/src/imagenes/Bienvenida.jpg';
import Imagen1 from '/src/imagenes/imagen1.jpg';
import Imagen2 from '/src/imagenes/imagen2.jpg';
import { Link } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';
import FOTO from '/src/imagenes/histclic.jpg';
function Inicioperador() {
  // Lista de imágenes del carrusel
  const images = [Bienvenida, Imagen1, Imagen2 ];
  
  // Estado para la imagen actual del carrusel
  const [currentImage, setCurrentImage] = useState(0);
  
  // Cambiar la imagen automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000); // 10 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [currentImage]);

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-2 bg-[#1a8b9e]">
        <div className="flex items-center">
          <img src={LOGO} alt="ProSalud UroGénica S.A." className="h-20 w-20" />
          <span className="text-white text-lg font-bold">ProSalud UroGénica S.A.</span>
        </div>
        <nav className="flex space-x-8">
        <Link to="/" className="text-white text-lg font-bold">Inicio</Link>
          <Link to="/agendar" className="text-white text-lg font-bold">Agendar Cita </Link>
         
          <Link to="/contacto" className="text-white text-lg font-bold">Contactanos</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Sección de bienvenida */}
        <section className="text-center my-12">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#1a8b9e' }}>Expertos en tu salud íntima y reproductiva</h2>
          <div className="flex justify-center relative">
            <img
              src={images[currentImage]}
              alt="Medical tools and symbols"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-800 to-transparent opacity-50 rounded-lg"></div>
            {/* Botón para retroceder */}
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-teal-800 p-2 rounded-full">
              &#10094; {/* Símbolo de retroceder */}
            </button>
            {/* Botón para avanzar */}
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-teal-800 p-2 rounded-full">
              &#10095; {/* Símbolo de avanzar */}
            </button>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="bg-[#f0f8ff] bg-opacity-90 rounded-lg shadow-xl p-10 my-12">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 pr-8">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1a8b9e' }}>¿Quiénes somos?</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                En ProSalud UroGinec S.A., somos un equipo de expertos en Salud reproductiva y uroginecología. Nos dedicamos a proporcionar atención integral y de alta calidad a nuestros pacientes, con un enfoque en la prevención, diagnóstico y tratamiento de enfermedades relacionadas con la salud íntima y reproductiva.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Nuestro equipo está formado por profesionales altamente capacitados y comprometidos con el bienestar de nuestros pacientes. Utilizamos tecnología de vanguardia y aplicamos las últimas investigaciones en el campo para ofrecer los mejores tratamientos posibles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Creemos en un enfoque holístico de la salud, que tiene en cuenta no solo los aspectos físicos, sino también los emocionales y psicológicos de cada paciente. Nuestro objetivo es proporcionar un ambiente acogedor y de confianza donde nuestros pacientes se sientan cómodos y bien atendidos.
              </p>
            </div>
            {/* Imagen grande */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src={FOTO} alt="Doctor with stethoscope" className="rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full" />
            </div>
          </div>
        </section>

        {/* Misión */}
        <section className="text-center my-12 bg-[#1a8b9e] text-white rounded-lg shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6">MISIÓN</h2>
          <p className="text-lg leading-relaxed">
            Proporcionar atención integral y de alta calidad en salud reproductiva y uroginecología, además de ofrecer servicios de prevención, diagnóstico y tratamiento de enfermedades relacionadas con la salud íntima y reproductiva. Nos comprometemos a brindar un servicio personalizado y humano, adaptándonos a las necesidades de cada paciente.
          </p>
        </section>

        {/* Visión */}
        <section className="text-center my-12 bg-teal-100 rounded-lg shadow-xl p-10">
          <h2 className="text-3xl font-bold text-[#1a8b9e] mb-6">VISIÓN</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hacia el año 2030, seremos reconocidos como líderes en el ámbito de la salud reproductiva y uroginecología, destacándonos por la calidad y la calidez de nuestros servicios. Seremos un referente en innovación y desarrollo en salud, y estaremos comprometidos con la formación y capacitación de nuevos profesionales en el área, garantizando así un servicio de salud más humano y equitativo.
          </p>
        </section>

        {/* Valores */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#1a8b9e] text-center mb-10">VALORES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['RESPETO', 'EMPATÍA', 'INTEGRIDAD', 'COMPROMISO'].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-bold text-[#1a8b9e] mb-4">{value}</h3>
                <p className="text-gray-600">
                  {value === 'RESPETO' && "Valoramos la dignidad de cada individuo, creando un ambiente de confianza y respeto mutuo."}
                  {value === 'EMPATÍA' && "Promovemos la comprensión y el apoyo emocional a nuestros pacientes, para que se sientan escuchados y comprendidos."}
                  {value === 'INTEGRIDAD' && "Actuamos con honestidad y transparencia en todas nuestras interacciones, garantizando un trato justo y equitativo para todos."}
                  {value === 'COMPROMISO' && "Nos dedicamos a proporcionar la mejor atención posible, siempre buscando mejorar la salud y el bienestar de nuestros pacientes."}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

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

export default Inicioperador;

import LOGO from '/src/imagenes/logo.png';
import { Link } from 'react-router-dom';
import FOTO from '/src/imagenes/histclic.jpg';
function Contacto() {
    return (
        <div className="min-h-screen flex flex-col">
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
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />
                <h2 className="text-xl font-bold text-blue-700 mb-2">APP Móvil </h2>
                <p className="text-sm">Ponemos a tu disposición una APP móvil disponible para iOS y Android, para que disfrutes de nuestros servicios las 24 horas del día.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
              <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />                <h2 className="text-xl font-bold text-blue-700 mb-2">Web</h2>
                <p className="text-sm">Consulta nuestra página web para acceder a información sobre citas médicas y más.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
              <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />                <h2 className="text-xl font-bold text-blue-700 mb-2">ChatBot</h2>
                <p className="text-sm">Comunícate con Ana María, tu asistente virtual en salud las 24 horas del día.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
              <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />                <h2 className="text-xl font-bold text-blue-700 mb-2">Asesor de Oficina en Línea</h2>
                <p className="text-sm">En este canal podrás acceder a:</p>
                <ul className="list-disc pl-5 text-sm mt-2">
                  <li>Consulta y trámite de autorizaciones de servicios.</li>
                  <li>Recuerda tener a la mano la orden médica para adjuntarla.</li>
                  <li>Información de nuestros servicios y de tu afiliación.</li>
                  <li>Orientación en el trámite de novedades a la afiliación.</li>
                  <li>Asesoría sobre el proceso de radicación de licencias e incapacidades.</li>
                </ul>
                <p className="text-sm mt-2">Comunícate <a href="#" className="text-blue-500">aquí</a>.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
              <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />                <h2 className="text-xl font-bold text-blue-700 mb-2">Línea telefónica</h2>
                <p className="text-sm">Comunícate a través de nuestra línea de atención en Bogotá al 6013759000 o nuestra línea nacional 018000919100 (Tel. Fijo) las 24 horas del día. También marcando desde tu celular #936.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
              <img src={FOTO} alt="APP Móvil EPS Sanitas" className="mb-4 w-20" />                <h2 className="text-xl font-bold text-blue-700 mb-2">Presencial</h2>
                <p className="text-sm">Contamos con Oficinas de Atención al Afiliado y Puntos de Atención Integral a nivel nacional, donde podrás gestionar el direccionamiento de servicios médicos, radicación y novedades de afiliaciones, y más.</p>
                <p className="text-sm mt-2">Para conocer el horario de la oficina ingresa <a href="#" className="text-blue-500">aquí</a>.</p>
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
    }
  export default Contacto;
  
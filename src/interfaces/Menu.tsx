import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InicioPag from './InicioPag';
import logo from '/src/imagenes/logo.png';
import Login from './Login';
import RegistroUsuarios from '../interfacesAdmin/RegistroUsuarios';
import HistoriaMedica from '../interfacesDoctor/HistoriaMedica';
function Menu() {
    return (
        <Router>
          <div className="font-sans text-black min-h-screen flex flex-col">
            <header className="flex justify-between items-center p-2 bg-[#1a8b9e]">
              <div className="flex items-center">
                <img src={logo} alt="ProSalud UroGénica S.A." className="h-20 w-20" />
                <span className="text-black">ProSalud UroGénica S.A.</span>
              </div>
              <nav className="flex space-x-8">
              <Link to="/" className="text-white text-lg font-bold">Inicio</Link>
                <Link to="/historia-medica" className="text-white text-lg font-bold">Historia Medica</Link>
                <Link to="/login" className="text-white text-lg font-bold">Inicio Sesión</Link>
                <Link to="/registroUsuarios" className="text-white text-lg font-bold">Registro Usuarios</Link>
              </nav>
            </header>
    
            <Routes>
              <Route path="/" element={<InicioPag />} />
              <Route path="/historia-medica" element={<HistoriaMedica />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registroUsuarios" element={<RegistroUsuarios />} />
            </Routes>
    
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
        </Router>
      );
    }

export default Menu;
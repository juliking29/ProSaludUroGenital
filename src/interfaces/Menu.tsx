import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InicioPag from './InicioPag';
import Login from './Login';
import RegistroUsuarios from '../interfacesAdmin/RegistroUsuarios';
import HistoriaMedica from '../interfacesDoctor/HistoriaMedica';
import AgendaCitas from '../interfacesDoctor/AgendaMedica';
import OrdenMedica from '../interfacesDoctor/OrdenMedica';
import MenuDoctor from '../interfacesDoctor/MenuDoctor';
import DoctorPaci from '../interfacesDoctor/VerInformacion';
import Contacto from './contactanos';
import Agendar from '../usuarioInterfaces/agendarcita';
import Iniciousuario from '../usuarioInterfaces/iniciousuario';
import Historial from '../usuarioInterfaces/historial';
import FacturaElectronica from '../usuarioInterfaces/colillapago';
import MetodoDePago from '../usuarioInterfaces/metodopago';
import Autorizacion from '../interfacesDoctor/autorizacoin';
import Inicioperador from '../interfacesAdmin/iniciooperador';
import Actualizar from '../interfacesAdmin/Actualizar';
import AddUser from '../interfacesAdmin/Adduser';
import UpdateUser from '../interfacesAdmin/UpdateUser';
import MenuDoctor1 from '../usuarioInterfaces/iniciousuario';
import Cancelar from '../interfacesOperador/Cancelar';
import Reprogramar from '../interfacesOperador/Reprogramar';
function Menu() {
    return (
        <Router>
      
            <Routes>
              <Route path="/" element={<InicioPag />} />
              <Route path="/historia-medica" element={<HistoriaMedica />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registroUsuarios" element={<RegistroUsuarios />} />
              <Route path="/agenda-medica" element={<AgendaCitas />} />
              <Route path="/orden-medica" element={<OrdenMedica />} />
              <Route path="/menu-doctor" element={<MenuDoctor />} />
              <Route path="/infopac" element={<DoctorPaci />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/agendar" element={<Agendar />} />
              <Route path="/inicio2" element={<MenuDoctor1 />} />
              <Route path="/historial" element={<Historial />} />
              <Route path="/colilla" element={<FacturaElectronica />} />
              <Route path="/pago" element={<MetodoDePago />} />
              <Route path="/auto" element={<Autorizacion />} />
              <Route path="/inicio3" element={<Inicioperador />} />
              <Route path="/actualizaradmin" element={<Actualizar />} />
              <Route path="/adduseradmin" element={<AddUser />} />
              <Route path="/registroadmin" element={<RegistroUsuarios />} />
              <Route path="/updateadmin" element={<UpdateUser />} />
              <Route path="/cancelar" element={<Cancelar />} />
              <Route path="/reprogramar" element={<Reprogramar />} />
            </Routes>
        </Router>
      );
    }

export default Menu;
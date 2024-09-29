import regisuser from '/src/imagenes/regisu.jpg';
import '/src/App.css';

const RegistroUsuarios = () =>{
    return (
      <main className="flex-grow p-12 bg-cover bg-center" style={{ backgroundImage: `url(${regisuser})` }}>
        <div className="flex">
          {/* Sección de Texto a la Izquierda */}
          <div className="w-1/2 p-8 bg-white bg-opacity-80 rounded-md shadow-lg">
            <h1 className="text-7xl font-bold mb-4">REGISTRO DE USUARIOS</h1>
            <h2 className="text-4xl font-semibold mb-4">Registro de usuarios (Paciente, Operador, Doctor) dentro de ProSalud</h2>
            <p className="text-lg mb-8">
              Realiza el registro de los diferentes usuarios para
              puedan acceder a nuestros servicios especializados en
              salud urológica. Asegura la continuidad de tu
              tratamiento con la mejor atención personalizada.
            </p>
          </div>
  
          {/* Sección de Formulario a la Derecha */}
          <div className="w-1/2 p-8 bg-gray-100 rounded-md shadow-lg ml-8">
            <h2 className="text-2xl font-bold mb-4">Registro Usuarios</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Tipo de Usuario</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required>
                    <option value="" disabled selected>Seleccione un tipo de usuario</option>
                    <option value="Paciente">Paciente</option>
                    <option value="Operador">Operador</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Nombre</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Apellido</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Tipo de Identificación</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required >
                    <option value="" disabled selected>Seleccione el tipo de documento</option>
                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Registro civil">Registro civil</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Tarjeta de extranjería">Tarjeta de extranjería</option>
                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Número de Identificación</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Sede</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required >
                    <option value="" disabled selected>Seleccione la sede</option>
                    <option value="Vitamed">Vitamed</option>
                    <option value="Sanavit">Sanavit</option>
                    <option value="Aurea">Aurea</option>
                    <option value="ProSalud">ProSalud</option>
                    <option value="InterVital">InterVital</option>
                    <option value="Growing Smiles">Growing Smiles</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Estado Usuario</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required >
                    <option value="" disabled selected>Seleccione el estado del usuario</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                    <option value="Bloqueado">Bloqueado</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Correo Eléctronico</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Dirección</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label className="font-semibold">Teléfono</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <label className="font-semibold">Nombre EPS</label>
                <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required >
                    <option value="" disabled selected>Seleccione la EPS</option>
                    <option value="Sanitas">Sanitas</option>
                    <option value="Salud Total">Salud Total</option>
                    <option value="Nueva Eps">Nueva Eps</option>
                    <option value="Sura">Sura</option>
                </select>
              </div>
              <button type="submit" className="px-6 py-2 mt-4 border-2 border-black bg-transparent text-black rounded-md transition-colors hover:bg-black hover:text-white">Enviar</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

export default RegistroUsuarios;
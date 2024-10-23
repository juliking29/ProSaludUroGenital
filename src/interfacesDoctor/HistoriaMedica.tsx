import '/src/App.css';
import historia from '/src/imagenes/histclic.jpg';

const HistoriaMedica = () => {
  return (
    <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/ruta-a-tu-imagen/blur-hospital.jpg)' }}>
      {/* Sección de bienvenida */}
      <section className="relative w-full bg-[#ffffffcc] p-12 rounded-md shadow-md text-black">
        <img
          src={historia}
          alt="Historia Clinica"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000aa] to-transparent opacity-60"></div>

        <div className="relative z-10 p-12">
          <h1 className="text-6xl font-extrabold leading-snug tracking-tight text-white">
            Expertos en tu <span className="text-[#4acaca]">salud íntima</span><br /> y <span className="text-[#4acaca]">reproductiva</span>
          </h1>
          <p className="text-xl mt-4 text-white font-light">Nos enfocamos en brindarte la mejor atención especializada.</p>
        </div>
      </section>


      {/* Sección de Formulario historia clínica */}
      <div className="w-full p-8 bg-white rounded-md shadow-xl -mt-8">
        <hr className="w-3/4 mx-auto border-t-4 border-[#1a8b9e] my-6" />
        <h2 className="text-4xl font-bold mb-8 text-center text-[#1a8b9e]">Historia Clínica</h2>
        <form className="space-y-8">
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Tipo de Sangre</label>
              <select className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required>
                <option value="" disabled selected>Seleccione un tipo de sangre</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Género</label>
              <select className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required>
                <option value="" disabled selected>Seleccione el género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Fecha de Nacimiento</label>
              <input type="date" className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Discapacidad</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Fecha de Revisión</label>
              <input type="date" className="p-3 border border-gray-300 rounded-lg bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Hora Revisión</label>
              <input type="time" className="p-3 border border-gray-300 rounded-lg bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Motivo</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Descripción de Motivo</label>
              <textarea className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" rows={4} required />
            </div>
          </div>

          {/* Inputs adicionales */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Presión Sanguínea</label>
              <input type="text" className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Saturación de Oxígeno</label>
              <input type="text" className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Altura</label>
              <input type="text" className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Peso</label>
              <input type="text" className="p-3 border border-gray-300 rounded-md bg-[#e0f7fa] shadow-sm hover:bg-[#b3e5fc] transition-colors" required />
            </div>
          </div>

          <button type="submit" className="px-8 py-3 bg-[#1a8b9e] text-white rounded-md shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default HistoriaMedica;

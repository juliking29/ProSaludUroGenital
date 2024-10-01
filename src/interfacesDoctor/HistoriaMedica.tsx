import '/src/App.css';
import historia from '/src/imagenes/histclic.jpg';

const HistoriaMedica = () =>{
  return(
    <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/ruta-a-tu-imagen/blur-hospital.jpg)' }}>
        {/* Sección de bienvenida */}
        <section className="relative w-full bg-[#white] p-12 rounded-md shadow-md text-[white]">
    <img
      src={historia}
      alt="Historia Clinica"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 p-12">
      <h1 className="text-4xl font-bold text-left mb-4">
        Expertos en tu salud íntima <br /> y reproductiva
      </h1>
    </div>

        </section>
        {/* Sección de Formulario historia clinica */}
        <div className="w-full3 p-8 bg-gray-100 rounded-md shadow-lg -mt-2">
            <h2 className="text-4xl font-bold mb-4 text-center">Historia Clinica</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-4 gap-5 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Tipo de Sangre</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required>
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
                  <label className="font-semibold">Genero</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required>
                    <option value="" disabled selected>Seleccione el genero</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Fecha de Nacimiento</label>
                  <input type="date" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Discapacidad</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg bg-[#e0f7fa]" required />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-5">
                <div className="flex flex-col">
                  <label className="font-semibold">Fecha de Revisión</label>
                  <input type="date" className="p-2 border border-gray-300 rounded-lg bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Hora Revisión</label>
                  <input type="time" className="p-2 border border-gray-300 rounded-lg bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Motivo</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Descripción de Motivo</label>
                  <textarea className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" rows={4} required />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-5">
                <div className="flex flex-col">
                  <label className="font-semibold">Presión Sangre</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Presión Promedio Sangre</label>
                  <select className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required >
                    <option value="16 a 18 [Hombre]: 105-135 | 60-86">16 a 18 [Hombre]: 105-135 | 60-86</option>
                    <option value="16 a 18 [Mujer]: 100-130 | 60-85">16 a 18 [Mujer]: 100-130 | 60-85</option>
                    <option value="19 a 24 [Hombre]: 105-139 | 62-88">19 a 24 [Hombre]: 105-139 | 62-88</option>
                    <option value="19 a 24 [Mujer]: 100-130 | 60-85">19 a 24 [Mujer]: 100-130 | 60-85</option>
                    <option value="25 a 29 [Hombre]: 108-139 | 65-89">25 a 29 [Hombre]: 108-139 | 65-89</option>
                    <option value="25 a 29 [Mujer]: 102-135 | 60-86">25 a 29 [Mujer]: 102-135 | 60-86</option>
                    <option value="30 a 39 [Hombre]: 110-145 | 68-92">30 a 39 [Hombre]: 110-145 | 68-92</option>
                    <option value="30 a 39 [Mujer]: 105-139 | 65-89">30 a 39 [Mujer]: 105-139 | 65-89</option>
                    <option value="40 a 49 [Hombre]: 110-150 | 70-96">40 a 49 [Hombre]: 110-150 | 70-96</option>
                    <option value="40 a 49 [Mujer]: 105-150 | 65-96">40 a 49 [Mujer]: 105-150 | 65-96</option>
                    <option value="50 a 59 [Hombre]: 115-155 | 70-98">50 a 59 [Hombre]: 115-155 | 70-98</option>
                    <option value="50 a 59 [Mujer]: 110-155 | 70-98">50 a 59 [Mujer]: 110-155 | 70-98</option>
                    <option value="60 o más [Ambos]: 115-160 | 70-100">60 o más [Ambos]: 115-160 | 70-100</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Saturación</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Altura</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-5 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Peso</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Perinatales</label>
                  <textarea className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" rows={4} required />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Patologicos</label>
                  <textarea className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" rows={4} required/>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Quirurgicos</label>
                  <textarea className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" rows={4} required />
                </div>
              </div>
              <button type="submit" className="px-6 py-2 mt-4 border-2 border-black bg-transparent text-black rounded-md transition-colors hover:bg-black hover:text-white">Enviar</button>
            </form>
          </div>
    </main>
  );
  }

export default HistoriaMedica;
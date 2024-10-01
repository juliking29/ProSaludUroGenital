import '/src/App.css';
import orden from '/src/imagenes/OrdenMedica.jpg';
function OrdenMedica() {
    return (
      <main className="flex-grow p-12 bg-cover bg-center" style={{ backgroundImage: `url(${orden})` }}>
        <div className="flex">
          {/* Sección de Texto a la Izquierda */}
          <div className="w-1/2 p-8 bg-white bg-opacity-80 rounded-md shadow-lg">
            <h1 className="text-7xl font-bold mb-4">ORDEN MÉDICA</h1>
            <h2 className="text-4xl font-semibold mb-4">Tu orden médica en ProSalud UroGénica S.A.</h2>
            <p className="text-lg mb-8">
              Coordina con nosotros para recibir tu orden médica
              y accede a nuestros servicios especializados en
              salud urológica. Asegura la continuidad de tu
              tratamiento con la mejor atención personalizada.
            </p>
          </div>
  
          {/* Sección de Formulario a la Derecha */}
          <div className="w-1/2 p-8 bg-gray-100 rounded-md shadow-lg ml-8">
            <h2 className="text-2xl font-bold mb-4">Detalles de la Orden</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Nombre del paciente</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Número de teléfono</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold"># de identificación</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">Tipo de afiliado</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Régimen</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Edad</label>
                  <input type="number" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-semibold">MED. ordenador</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Especialidad</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Dirección</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Observaciones</label>
                <textarea className="p-2 border border-gray-300 rounded-md bg-[#e0f7fa]" rows={4} />
              </div>
              <button type="submit" className="px-6 py-2 mt-4 border-2 border-black bg-transparent text-black rounded-md transition-colors hover:bg-black hover:text-white">Enviar</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

export default OrdenMedica;
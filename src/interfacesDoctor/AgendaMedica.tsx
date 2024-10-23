import '/src/App.css';
import 'react-calendar/dist/Calendar.css';
import Bienvenida from '/src/imagenes/Bienvenida.jpg'; // Asegúrate de importar la imagen correctamente

const AgendaCitas: React.FC = () => {
  // Datos de las citas
  const citas = [
    { id: 1, paciente: 'Juan Pérez', fecha: '2024-10-05', hora: '09:00', especialidad: 'Pediatría' },
    { id: 2, paciente: 'María López', fecha: '2024-10-06', hora: '10:30', especialidad: 'Cardiología' },
    { id: 3, paciente: 'Carlos Ruiz', fecha: '2024-10-07', hora: '11:00', especialidad: 'Dermatología' },
  ];

  return (
    <>
      {/* Sección de bienvenida */}
      <section className="relative w-full bg-white p-12 mb-12 rounded-md shadow-md">
        <img
          src={Bienvenida}
          alt="Bienvenida"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-12">
          <h1 className="text-4xl font-bold text-left mb-4 text-white">
            Expertos en tu salud íntima <br /> y reproductiva
          </h1>
        </div>
      </section>

      <section className="p-4">
        <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/ruta-a-tu-imagen/blur-hospital.jpg)' }}>
          <h1 className="text-2xl font-bold mb-4">Agenda de Citas Médicas</h1>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Paciente</th>
                <th className="border border-gray-300 p-2">Fecha</th>
                <th className="border border-gray-300 p-2">Hora</th>
                <th className="border border-gray-300 p-2">Especialidad</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id} className="border-b border-gray-300">
                  <td className="border border-gray-300 p-2">{cita.id}</td>
                  <td className="border border-gray-300 p-2">{cita.paciente}</td>
                  <td className="border border-gray-300 p-2">{cita.fecha}</td>
                  <td className="border border-gray-300 p-2">{cita.hora}</td>
                  <td className="border border-gray-300 p-2">{cita.especialidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>
    </>
  );
};

export default AgendaCitas;

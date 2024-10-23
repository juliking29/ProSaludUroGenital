import React, { useRef } from 'react';
import orden from '/src/imagenes/OrdenMedica.jpg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function OrdenMedica() {
  const printRef = useRef();

  const generarPDF = () => {
    const input = printRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // Width of A4 in mm
        const pageHeight = 297; // Height of A4 in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // If content is too long, add more pages
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save and print the PDF
        pdf.save('orden_medica.pdf');
        window.open(pdf.output('bloburl'), '_blank');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarPDF(); // Generar el PDF cuando se envía el formulario
  };

  return (
    <main ref={printRef} className="flex-grow p-12 bg-cover bg-center" style={{ backgroundImage: `url(${orden})` }}>
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
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <button type="submit" className="px-6 py-2 mt-4 border-2 border-black bg-transparent text-black rounded-md transition-colors hover:bg-black hover:text-white">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default OrdenMedica;

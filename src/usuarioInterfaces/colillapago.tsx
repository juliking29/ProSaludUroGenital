import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function FacturaElectronica() {
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

        // Save the PDF
        pdf.save('colilla_pago.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <div className="p-8">
      <div ref={printRef} className="max-w-2xl mx-auto border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <img
            src="https://replicate.delivery/yhqm/r6rINAHyQQK4PhFAyh7luB0eHv3fGn551Rqlev81kAZaKcSnA/out-0.png"
            alt="QR Code"
            className="w-24 h-24"
            width="100"
            height="100"
          />
          <div className="text-right">
            <h1 className="font-bold">SALUDPRO UROGÉNICA S.A</h1>
            <p>FACTURA ELECTRÓNICA</p>
            <p>Factura No:</p>
            <p>Vigencia: 05/09/2024 hasta 25/09/2024</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-300 p-2">
            <p>DIRECCIÓN: El bosque</p>
          </div>
          <div className="border border-gray-300 p-2">
            <p>NIT: 1098071525</p>
          </div>
          <div className="border border-gray-300 p-2">
            <p>TELÉFONO: 6363636</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">DATOS DEL PACIENTE</h2>
          <p>
            <strong>PACIENTE:</strong> Juliana Chávez King
          </p>
          <p>
            <strong>CIUDAD:</strong> Bucaramanga, Santander
          </p>
          <p>
            <strong>NO. DOCUMENTO:</strong> CC 123456789
          </p>
          <p>
            <strong>DIRECCIÓN:</strong> Vía 123 #1-23
          </p>
          <p>
            <strong>TELÉFONO:</strong> 123456789
          </p>
        </div>
        <div className="mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">No.</th>
                <th className="border border-gray-300 p-2">Descripción</th>
                <th className="border border-gray-300 p-2">Valor Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">1</td>
                <td className="border border-gray-300 p-2">Revision urogenital</td>
                <td className="border border-gray-300 p-2">$500.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">2</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">3</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <div className="border border-gray-300 p-2">
            <p>MONTO TOTAL: 500.000</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>SALUDPRO UROGÉNICA S.A</p>
        </div>
      </div>

      <div className="mt-8 text-center">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600">
          <Link to="/pago" className="text-white text-lg font-text">Generar colilla de pago</Link>

          </button>
        </div>
      
    

      {/* Botón de "Generar PDF" */}
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          onClick={generarPDF}
        >
          Descargar PDF
        </button>
      </div>
    </div>
  );
}

export default FacturaElectronica;

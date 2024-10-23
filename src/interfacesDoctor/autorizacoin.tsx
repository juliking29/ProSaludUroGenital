import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '/src/imagenes/logo.png';
// Si tienes la firma en tu directorio de imágenes, puedes importarla también
import FIRMA from '/src/imagenes/firma.png';

const Autorizacion = () => {
  return (
    <div className="bg-gray-100 font-poppins flex justify-center p-5">
      {/* Barra de navegación */}
      <nav className="navbar w-full bg-[#1A8B9E] fixed top-0 left-0 z-[1000] shadow-md flex items-center justify-between px-5 py-2.5">
        <div className="logo-nav flex items-center">
          <img src={LOGO} alt="ProSalud UroGénica S.A." className="w-[60px] mr-2.5" />
          <span className="text-white font-semibold text-[18px]">
            ProSalud UroGénica S.A.
          </span>
        </div>
        <div className="nav-links flex">
          <Link to="/" className="text-white ml-5 font-medium text-[16px] hover:underline">
            Inicio
          </Link>
          <Link to="/orden-medica" className="text-white ml-5 font-medium text-[16px] hover:underline">
            Orden médica
          </Link>
        </div>
      </nav>

      <div className="authorization-container w-[800px] bg-white border border-[#D8EAED] p-5 shadow-md mt-20">
        {/* Sección de encabezado */}
        <div className="header-section flex justify-between items-start mb-[15px]">
          <div className="flex items-start">
            <div className="logo-container">
              <img
                src={LOGO}
                alt="Prosalu Urogénica Logo"
                className="w-[100px]"
              />
            </div>
            <div className="title-info-container ml-5 flex-grow">
              <h1 className="text-[#3a718d] font-extrabold text-[16px]">
                PROSALUD UROGÉNICA S.A
              </h1>
              <h2 className="text-[#3a718d] font-normal text-[16px] underline">
                AUTORIZACIÓN MÉDICA
              </h2>
              <p className="my-1 text-[#3a718d] font-normal text-[16px]">
                <strong className="inline-block w-[150px] text-left font-normal">
                  PACIENTE:
                </strong>
                JULIANA CHAVEZ KING
              </p>
              <p className="my-1 text-[#3a718d] font-normal text-[16px]">
                <strong className="inline-block w-[150px] text-left font-normal">
                  IDENTIFICACIÓN:
                </strong>
                CC 123456789
              </p>
              <p className="my-1 text-[#3a718d] font-normal text-[16px]">
                <strong className="inline-block w-[150px] text-left font-normal">
                  SEXO:
                </strong>
                Femenino
              </p>
              <p className="my-1 text-[#3a718d] font-normal text-[16px]">
                <strong className="inline-block w-[150px] text-left font-normal">
                  EDAD:
                </strong>
                19 Años
              </p>
              <p className="my-1 text-[#3a718d] font-normal text-[16px]">
                <strong className="inline-block w-[150px] text-left font-normal">
                  FECHA:
                </strong>
                05 Sep 2024 Hora: 09:01:21 AM
              </p>
            </div>
          </div>
          <div className="id-container text-right font-normal text-[#3a718d] mt-0">
            <span>ID: REF-XYZ</span>
          </div>
        </div>

        <hr className="divider-line border-t border-[#3a718d] my-2.5" />

        {/* Motivo de consulta */}
        <div className="consultation-header bg-[#D8EAED] p-2.5 text-left">
          <p className="text-[#3a718d] font-semibold">MOTIVO DE CONSULTA:</p>
        </div>
        <div className="consultation-reason-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            IRREGULARIDADES MENSTRUALES, DISMENORREA DE MODERADA INTENSIDAD, FLUJO VAGINAL ANORMAL,
            PRURITO Y MOLESTIAS EN LA ZONA VULVAR.
          </p>
        </div>

        {/* Antecedentes */}
        <div className="history-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">ANTECEDENTES:</p>
        </div>
        <div className="history-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            MENARCA A LOS 12 AÑOS, CICLOS MENSTRUALES IRREGULARES DESDE LA ADOLESCENCIA.<br />
            HISTORIA FAMILIAR DE SÍNDROME DE OVARIO POLIQUÍSTICO (SOP).<br />
            FUNCIONES BIOLÓGICAS: APETITO CONSERVADO, SED CONSERVADA, ORINAS CON CARACTERÍSTICAS
            NORMALES, HECES CONSERVADAS, SUEÑO CONSERVADO.
          </p>
        </div>

        {/* Examen físico ginecológico */}
        <div className="physical-exam-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">EXAMEN FÍSICO GINECOLÓGICO:</p>
        </div>
        <div className="physical-exam-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            GENITALES EXTERNOS CON SIGNOS DE IRRITACIÓN LEVE.<br />
            FLUJO VAGINAL DE COLOR BLANQUECINO, SIN MAL OLOR, MODERADO EN CANTIDAD.<br />
            CÉRVIX VISUALIZADO MEDIANTE ESPECULOSCOPÍA, SIN LESIONES VISIBLES.<br />
            AL TACTO BIMANUAL, ÚTERO EN ANTEVERSIÓN, DE TAMAÑO NORMAL, NO DOLOROSO A LA
            PALPACIÓN.<br />
            ANEXOS SIN MASAS NI DOLOR A LA PALPACIÓN.<br />
            NO SIGNOS DE INFLAMACIÓN PÉLVICA.
          </p>
        </div>

        {/* Diagnóstico */}
        <div className="diagnosis-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">DIAGNÓSTICO:</p>
        </div>
        <div className="diagnosis-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            - DISMENORREA<br />
            - IRREGULARIDADES MENSTRUALES<br />
            - VAGINITIS POR CÁNDIDA<br />
            - SÍNDROME DE OVARIO POLIQUÍSTICO
          </p>
        </div>

        {/* Procedimiento solicitado */}
        <div className="procedure-request-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">PROCEDIMIENTO SOLICITADO:</p>
        </div>
        <div className="procedure-request-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            TRATAMIENTO MÉDICO Y SEGUIMIENTO GINECOLÓGICO ESPECIALIZADO.
          </p>
        </div>

        {/* Descripción del procedimiento */}
        <div className="procedure-description-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">DESCRIPCIÓN DEL PROCEDIMIENTO:</p>
        </div>
        <div className="procedure-description-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            SE SOLICITA AUTORIZACIÓN PARA TRATAMIENTO MÉDICO INTEGRAL, EL CUAL INCLUIRÁ MANEJO PARA
            LA DISMENORREA E IRREGULARIDADES MENSTRAULES, TRATAMIENTO ANTIFÚNGICO PARA LA VAGINITIS
            POR CÁNDIDA, ASÍ COMO ESTUDIOS ADICIONALES PARA EVALUAR Y CONTROLAR LOS SÍNTOMAS
            RELACIONADOS CON EL SÍNDROME DE OVARIO POLIQUÍSTICO (SOP).
          </p>
        </div>

        {/* Motivo de la autorización */}
        <div className="authorization-reason-header bg-[#D8EAED] p-2.5 text-left mt-4">
          <p className="text-[#3a718d] font-semibold">MOTIVO DE LA AUTORIZACIÓN:</p>
        </div>
        <div className="authorization-reason-section mt-2.5 p-2.5 bg-white">
          <p className="text-[#3a718d] font-medium">
            LA PACIENTE PRESENTA IRREGULARIDADES MENSTRUALES DE LARGA DATA, ASOCIADAS A DOLOR
            MENSTRUAL MODERADO Y EPISODIOS RECURRENTES DE VAGINITIS POR CÁNDIDA, SÍNTOMAS
            COMPATIBLES CON UN CUADRO DE SOP. SE RECOMIENDA INICIAR TRATAMIENTO MÉDICO PARA ALIVIAR
            LOS SÍNTOMAS Y REALIZAR UN SEGUIMIENTO GINECOLÓGICO REGULAR.
          </p>
        </div>

        {/* Sección de doctores y firma */}
        <div className="doctors-section mt-8 text-left text-[#3a718d]">
          <p className="font-semibold">Solicitado por:</p>
          <p className="font-medium mt-2">
            Dr. Nicolas Rey Vasquez<br />
            Especialista en Ginecología<br />
            Centro Médico PROSALUD UROGÉNICA S.A<br />
            Contacto: 123456789
          </p>

          <div className="signature mt-5 text-[#3a718d] text-[16px]">
            <img
              src={FIRMA}
              alt="Firma del Doctor"
              className="w-[150px] mb-[-10px]"
            />
            <p>
              Dr. David Santiago Niño<br />
              Médico Ginecólogo<br />
              Registro Médico: 777XYX
            </p>
          </div>
        </div>

        {/* Pie de página */}
        <div className="footer-section mt-8 text-center text-[#3a718d]">
          <hr className="footer-line border-none h-[2px] bg-[#3a718d] w-full mb-2.5 mt-[150px]" />
          <p>PROSALUD UROGÉNICA S.A.</p>
        </div>
      </div>
    </div>
  );
};

export default Autorizacion;

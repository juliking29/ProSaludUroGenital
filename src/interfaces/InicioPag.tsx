import Bienvenida from '/src/imagenes/Bienvenida.jpg';
import Imagen1 from '/src/imagenes/imagen1.jpg';
import Imagen2 from '/src/imagenes/imagen2.jpg';
import '/src/App.css';

function InicioPagina(){
    return (
      <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/ruta-a-tu-imagen/blur-hospital.jpg)' }}>
        {/* Sección de bienvenida */}
        <section className="relative w-full bg-[#white] p-12 mb-12 rounded-md shadow-md text-[white]">
    <img
      src={Bienvenida}
      alt="Bienvenida"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 p-12">
      <h1 className="text-4xl font-bold text-left mb-4">
        Expertos en tu salud íntima <br /> y reproductiva
      </h1>
    </div>
  </section>
  
        {/* Sección de Quiénes somos */}
        <section className="w-full p-10 bg-[#1a8b9e]  text-[white] flex justify-between items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
            <p className="mb-4">
              En ProSalud Urogénica S.A., somos una Entidad Promotora de Salud especializada en la atención integral de la salud reproductiva y urogenital. Desde nuestra fundación, hemos estado dedicados a proporcionar servicios médicos de alta calidad, accesibles y personalizados, con el objetivo de mejorar la salud y el bienestar de nuestros afiliados. Nuestro compromiso es brindar una atención médica centrada en las necesidades individuales de cada paciente, a través de un enfoque humano, ético y profesional.
            </p>
            <p className="mb-4">
              Nuestro equipo está compuesto por médicos, enfermeras, técnicos y profesionales de la salud altamente calificados y con vasta experiencia en sus respectivas áreas. Nos esforzamos por mantenernos a la vanguardia de los avances médicos y tecnológicos, asegurando que nuestros pacientes reciban el mejor cuidado posible basado en las últimas evidencias científicas y prácticas médicas.
            </p>
            <p className="mb-4">
              En ProSalud Urogénica S.A., entendemos la importancia de la salud reproductiva y urogenital en todas las etapas de la vida. Por ello, ofrecemos una amplia gama de servicios que abarcan desde la prevención y el diagnóstico temprano hasta el tratamiento y la rehabilitación. Nuestro objetivo es acompañar a nuestros pacientes en cada paso de su camino hacia una mejor salud, proporcionándoles las herramientas y el apoyo necesario para tomar decisiones informadas sobre su bienestar.
            </p>
            <p className="mb-4">
              Creemos firmemente en la promoción de la salud y en la educación de nuestros afiliados. Por ello, desarrollamos programas de concienciación y talleres educativos para fomentar hábitos saludables y prevenir enfermedades. Nuestro compromiso con la comunidad se refleja en nuestras iniciativas de responsabilidad social, que buscan mejorar la calidad de vida de las personas más allá de las puertas de nuestras instalaciones.
            </p>
            <p>
              En ProSalud Urogénica S.A., nos enorgullece ser más que un proveedor de servicios de salud; somos un aliado en el cuidado de nuestros afiliados. Nuestra misión es proporcionar una atención integral, respetuosa y compasiva, que reconozca y valore la dignidad de cada individuo. Trabajamos incansablemente para ser el referente en salud reproductiva y urogenital, brindando soluciones efectivas y un servicio excepcional que marque una diferencia positiva en la vida de las personas.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img src={Imagen1} alt="Imagen1" className="w-full max-w-xs mb-4" />
            <img src={Imagen2} alt="Imagen2" className="w-full max-w-xs" />
          </div>
        </section>
        {/* Sección de Misión y Visión */}
        <section className="w-full bg-[white] p-12 mb-12 rounded-md shadow-md text-[#1a8b9e] text-center" >
          <h2 className="text-3xl font-bold mb-4">Misión</h2>
          <p className="mb-8">
          Proporcionar atención integral y de alta calidad en salud reproductiva y urogenital, además de ofrecer diagnóstico <br />
          y tratamiento para problemas del sistema musculoesquelético. Nuestro objetivo es brindar servicios accesibles e innovadores <br />
          que faciliten la rehabilitación física necesaria para la recuperación y mejora de la función motora. <br />
          Entre nuestras especialidades se incluyen Ortopedia, Medicina Física, Fisioterapia, Terapia Ocupacional, entre otros.<br />
          Nos comprometemos a promover el bienestar y la salud de nuestros pacientes con un enfoque centrado en sus necesidades,<br />
          garantizando un entorno de respeto y confidencialidad.        </p>
          </section>
          <section className="w-full bg-[#1a8b9e] p-12 mb-12 rounded-md shadow-md text-white text-center" >
  
          <h2 className="text-3xl font-bold mb-4">Visión</h2>
          <p>
          Hacia el año 2026, seremos reconocidos como líderes en el ámbito de la salud reproductiva y urogenital,<br />
          destacando por nuestra excelencia en la atención médica, la innovación en nuestros servicios y el compromiso<br />
          con la salud y el bienestar de nuestros pacientes. Aspiramos a ser un referente en la promoción de la salud integral,<br />
          contribuyendo al desarrollo de una sociedad más informada y saludable.        </p>
        </section>
  
        {/* Sección de Valores */}
       
       <section className="p-10 bg-[white] grid grid-cols-2 gap-4 text-center text-[#1a8b9e]">
         
          <div>
            <h3 className="text-2xl font-bold mb-2">Respeto</h3>
            <p>Valoramos la dignidad de cada individuo, creando un entorno de atención donde se escuchen y respeten las necesidades y derechos de nuestros pacientes.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Empatía</h3>
            <p>Promovemos una cultura de comprensión y apoyo, reconociendo las emociones y experiencias de nuestros pacientes para proporcionar una atención más humana y personalizada.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Integridad</h3>
            <p>Actuamos con honestidad y transparencia en todas nuestras interacciones, garantizando la confianza de nuestros pacientes y la comunidad.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Compromiso</h3>
            <p>Nos dedicamos a ofrecer la mejor atención posible, trabajando con pasión y responsabilidad para mejorar la salud de nuestros pacientes.</p>
          </div>
        </section>
      </main>
    );
  };

export default InicioPagina; 

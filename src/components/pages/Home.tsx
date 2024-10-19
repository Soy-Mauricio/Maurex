import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServiceBlocks from '../blocks/ServiceBlocks';
import OurServices from '../blocks/OurServices';
import Equipo from '../blocks/Company';


const Home: React.FC = () => {
  return (
    <>
      <Header/>

      <section className='h-[auto] bg-indigo-600'>
        {/* Contenido de Bienvenida */}
        <div className='text-white container max-w-[1200px] w-full mx-auto h-[auto] flex justify-center items-center'>
            <div className='h-[auto] p-4 sm:mx-8 sm:w-[50%]'>
              <div className=''>
                <h1 className='sm:text-5xl font-bold mt-4'>Tu aliado en el desarrollo de software</h1>
                <p className='mt-4 sm:text-2xl font-medium '>En Maurex transformamos ideas en soluciones digitales innovadoras, creando productos tecnológicos de alta calidad para potenciar tu negocio. Ofrecemos desarrollo de aplicaciones personalizadas, optimización de procesos y servicios de consultoría para ayudarte a alcanzar tus objetivos.</p>
              </div>

              <div className='mt-4'>
                <button className='rounded-sm shadow-[0_4px_10px_rgba(255,165,0,0.6)] flex items-center justify-center w-[auto] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                  <a className='p-2 font-semibold text-lg'>
                    Empezar ahora
                    <img className='w-[24px] inline-block' src="/public/Icons/angulo-pequeno-derecha.png" alt="" /></a> 
                </button>
              </div>
            </div>

          <div className='w-[50%] sm:flex hidden '>
            <img className='' src="/public/Img/IlustracionDeveloper.png" alt="" />
          </div>
          
        </div>
      </section>

      <section className='h-[auto] mt-14'>
        {/* Contenido de Nuestros Servicios */}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className=''>
            <h1 className='text-3xl opacity-80 font-bold flex justify-center text-center'>Nuestros Sevicios Incluyen</h1>
          </div>

          <OurServices
            img="/Img/PaisajeUno.jpg"
            title="Desarrollo Web"
            description="Creamos páginas web robustas y escalables que mejoran la experiencia del usuario y la presencia de tu negocio en línea."
            number={1}
          />

          <OurServices
            img="/Img/PaisajeDos.jpg"
            title="Aplicaciones Móviles"
            description="Diseñamos y desarrollamos apps móviles intuitivas y eficientes para conectar tu negocio con los clientes dondequiera que estén."
            number={2}          />

          <OurServices
            img="/Img/PaisajeTres.jpg"
            title="Software a Medida"
            description="Desarrollamos soluciones personalizadas que automatizan procesos, mejoran la eficiencia y reducen costos operativos."
            number={3}
          />

          <OurServices
            img="/Img/PaisajeTres.jpg"
            title="Consultoría Tecnológica"
            description="Te guiamos en la adopción de las tecnologías más adecuadas para el crecimiento de tu empresa."
            number={4}
          />
        </div>
      </section>

      <section className='h-[auto] mt-14 bg-indigo-600'>
        {/* Contenido sobre nuestros proyectos */}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='h-[auto] mt-14 '>
            <h2 className='text-3xl mt-4 font-bold flex justify-center text-center text-white'>Proyectos Destacados</h2>
            <div className=' flex justify-center items-center'>
              <p className='text-center mt-4 sm:w-[75%] text-2xl  text-white'>En Maurex, cada proyecto es un reto y una oportunidad de innovar. Aquí te presentamos algunos de nuestros trabajos más destacados.</p>
            </div>
          </div>

            {/* Utilizamos el componente ServiceBlock con props */}
            <div className='sm:flex-col mt-16 mb-16'>
              <ServiceBlocks
                icon="/Icons/controlar.png"
                title="VueloYA"
                description="VueloYA es una aplicación de compra de tiquetes aéreos diseñada y desarrollada por Maurex para facilitar el proceso de búsqueda y reserva de vuelos nacionales e internacionales. El objetivo principal era crear una solución accesible y eficiente para los usuarios, permitiendo una experiencia de reserva rápida, sin fricciones y con opciones de filtrado personalizadas."
                isFirst={true} // Indicamos que este es el primer bloque
              />

              <ServiceBlocks
                icon="/Icons/controlar.png"
                title="Plastisol"
                description="Plastisol es una plataforma de comercio electrónico desarrollada por Maurex para la venta de productos plásticos, con un enfoque en ofrecer una experiencia de compra fluida y accesible para sus clientes. El objetivo principal del proyecto era crear una tienda online que permitiera a los usuarios explorar y adquirir una amplia gama de productos plásticos de forma rápida y sencilla, con opciones avanzadas de filtrado y un proceso de compra optimizado."
              />
            </div>
        </div>
      </section>

      <section className='h-[auto] mt-14 '>
          {/* Contenido Nosotros Maurex */}
          <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
            <div className='flex justify-center'>
              <div className='sm:w-[75%]'>
                <h2 className='text-center text-3xl opacity-80 font-bold'>Maurex</h2>
                <p className='mt-4 text-center text-2xl opacity-80'>Hemos construido Maurex con una misión clara: ofrecer soluciones tecnológicas personalizadas que transformen negocios y simplifiquen procesos. Nuestra pasión por la innovación y el desarrollo de software nos permite entregar productos que no solo cumplen, sino que superan las expectativas de nuestros clientes.</p>
              </div>
            </div>


          </div>
      </section>

      <section>
          {/* Contenido Nuestro Equipo */}
          <div className='h-[auto] p-4'>
            <Equipo 
              tittle="Nuestro Equipo"
              description="En Maurex, somos un equipo ágil y altamente especializado. Nos enfocamos en ofrecer soluciones completas, combinando el poder del frontend y backend para crear productos robustos y escalables."
              img="/public/Img/PaisajeUno.jpg"
              name="Mauricio Sanabria"
              cargo="Desarrollador Frontend"
              conocimientos="Especialista en interfaces intuitivas y herramientas como React, JavaScript, Axios y Tailwind CSS."
            />

            <Equipo 
              tittle=""
              description=""
              img="/public/Img/PaisajeUno.jpg"
              name="Mauricio Sanabria"
              cargo="Desarrollador Frontend"
              conocimientos="Especialista en interfaces intuitivas y herramientas como React, JavaScript, Axios y Tailwind CSS."
            />
          </div>
      </section>

      <section>
        <div className='h-[auto] mt-14 p-4 text-white bg-indigo-600'>
            <div className=''>
              <h2 className='text-3xl font-bold text-center'>¿Listo para transformar tu negocio?</h2>
              <p className='mt-4'>Contáctanos para comenzar a desarrollar la solución perfecta para ti.</p>
            </div>

            <div className='mt-4'>
              <button className='flex items-center justify-center w-[auto] bg-yellow-500 rounded-3xl'>
                <a className='font-semibold p-2'>
                  Solicita una consulta
                  <img className='w-[14px] inline-block ml-1' src="/public/Icons/angulo-derecho.png" alt="" /></a> 
              </button>
            </div>
        </div>
      </section>

      <Footer/>

    </>
  );
};

export default Home;

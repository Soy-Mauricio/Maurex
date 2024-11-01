import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServiceBlocks from '../blocks/ServiceBlocks';
import OurServices from '../blocks/OurServices';
import Equipo from '../blocks/Company';
import Technologies from '../blocks/Technologies';


const Home: React.FC = () => {
  return (
    <>
      <Header/>

      <section className='h-[auto] bg-indigo-600'>
        {/* Contenido de Bienvenida */}
        <div className='text-white max-w-[1200px] w-full mx-auto h-[auto] flex justify-center items-center'>
            <div className='h-[auto] p-4 sm:mx-8 sm:w-[50%]'>
              <div className=''>
                <h1 className='sm:text-5xl font-bold mt-4'>Tu aliado en el desarrollo de software</h1>
                <p className='mt-4 sm:text-2xl font-medium'>En Maurex transformamos ideas en soluciones digitales innovadoras, creando productos tecnológicos de alta calidad para potenciar tu negocio. Ofrecemos desarrollo de aplicaciones personalizadas, optimización de procesos y servicios de consultoría para ayudarte a alcanzar tus objetivos.</p>
              </div>

              <div className='mt-10'>
                <button className='p-3 rounded-sm shadow-[0_4px_10px_rgba(255,255,255,0.5)] flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform'>
                  <a className='font-semibold text-base flex items-center'>
                    EMPEZAR AHORA
                  </a>
                  <img className='w-[26px] inline-block' src="Icons/angulo-pequeno-derecha.png" alt="" /> 
                </button>
              </div>
            </div>

          <div className='w-[50%] sm:flex hidden'>
            <img className='' src="/public/Img/Developer.png" alt="" />
          </div>
        </div>
      </section>

      <section className='h-[auto] mt-24'>
        {/* Contenido de Nuestros Servicios */}
        <div className='max-w-[1200px] w-full mx-auto h-[auto] flex justify-center'>

          <div className='h-[auto] p-4 sm:mx-8 sm:w-[50%]'>
              <div className=''>
                <hr className='border-t-4 border-black opacity-80 w-[10%] mb-10'/>
                <h1 className='text-4xl opacity-80 font-bold'>Consigue ahora el mejor producto del mercado</h1>
              </div>
              <div className='mt-8'>
                <p className='text-2xl opacity-80'>Maurex se centra en el valor comercial y la confianza. Hemos proporcionado una variedad de aplicaciones de alta calidad a empresas de todos los tamaños, desde startups unipersonales hasta empresas como Pinterest, Asmodee, universidades y organizaciones sin fines de lucro.</p>
              </div>

              <div className='mt-10'>
                <button className='rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center w-[250px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform'>
                  <a className='p-3 font-semibold text-base flex items-center '>
                    CÓMO TRABAJAMOS
                  </a>
                  <img className='w-[16px] inline-block' src="Icons/angulo-derecho.png" alt="" /> 
                </button>
              </div>
          </div>

          <div className='flex-col p-4 sm:mx-8 sm:w-[50%]'>
            <OurServices
              title="Desarrollo Web"
              description="Creamos páginas web robustas y escalables que mejoran la experiencia del usuario y la presencia de tu negocio en línea."
              icon="/Icons/angulo-derecho.png"
              number={1}
            />

            <OurServices
              title="Aplicaciones Móviles"
              description="Diseñamos y desarrollamos apps móviles intuitivas y eficientes para conectar tu negocio con los clientes dondequiera que estén."
              icon="/Icons/angulo-derecho.png"
              number={2}          />

            <OurServices
              title="Software a Medida"
              description="Desarrollamos soluciones personalizadas que automatizan procesos, mejoran la eficiencia y reducen costos operativos."
              icon="/Icons/angulo-derecho.png"
              number={3}
            />

            <OurServices
              title="Consultoría Tecnológica"
              description="Te guiamos en la adopción de las tecnologías más adecuadas para el crecimiento de tu empresa."
              icon="/Icons/angulo-derecho.png"
              number={4}
            />
          </div>

        </div>
      </section>

      <section className='h-[auto] mt-14 bg-indigo-600'>
        {/* Contenido sobre nuestros proyectos */}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='h-[auto] mt-14 '>
            <h2 className='text-3xl mt-4 font-bold flex justify-center text-center text-white'>Nuestros Proyectos</h2>
            <div className=' flex justify-center items-center'>
              <p className='text-center mt-4 sm:w-[75%] text-2xl text-white'>En Maurex, cada proyecto es un reto y una oportunidad de innovar. Aquí te presentamos algunos de nuestros trabajos más destacados.</p>
            </div>
          </div>

          {/* Utilizamos el componente ServiceBlock con props */}
          <div className='sm:flex-col mt-16 mb-16'>
            <ServiceBlocks/>
          </div>
        </div>
      </section>

      <section className='h-[auto] mt-14'>
        {/* Contenido Nosotros Maurex */}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='flex justify-center'>
            <div className='sm:w-[75%]'>
              <div className='flex justify-center mb-8'>
                <div className='w-[7%]'>
                  <hr className="border-t-4 border-black opacity-80 my-4" />
                </div>
              </div>
              <h2 className='text-center text-3xl opacity-80 font-bold'>Maurex</h2>
              <p className='mt-4 text-center text-2xl opacity-80'>Hemos construido Maurex con una misión clara: ofrecer soluciones tecnológicas personalizadas que transformen negocios y simplifiquen procesos. Nuestra pasión por la innovación y el desarrollo de software nos permite entregar productos que no solo cumplen, sino que superan las expectativas de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='h-[auto] mt-10'>
        {/* Contenido Nuestro Equipo */}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='flex justify-center'>
            <div className='sm:w-[75%]'>
              <div className='flex justify-center mb-8'>
                <div className='w-[7%]'>
                  <hr className="border-t-4 border-black opacity-80 my-4" />
                </div>
              </div>
              <h2 className='text-center text-3xl opacity-80 font-bold'>Nuestro Equipo</h2>
              <p className='mt-4 text-center text-2xl opacity-80'>En Maurex, somos un equipo ágil y altamente especializado. Nos enfocamos en ofrecer soluciones completas, combinando el poder del frontend y backend para crear productos robustos y escalables.</p>
            </div>
          </div>

          <div className='flex'>
            <div className='flex justify-around'>
              <Equipo 
                img="/public/Img/Joker.jpg"
                name="John Camargo"
                icon="/public/Icons/estrella.png"
                cargo="Desarrollador Backend"
                conocimientos="Experto en la creación de APIs, manejo de bases de datos y herramientas como Node.js, Python, Django, MongoDB, y PostgreSQL."
              />

              <Equipo 
                img="/public/Img/JokerDos.jpg"
                name="Mauricio Sanabria"
                icon="/public/Icons/estrella.png"
                cargo="Desarrollador Frontend"
                conocimientos="Especialista en interfaces intuitivas y herramientas como React, JavaScript, TypeScript, Axios, Tailwind CSS, HTML y CSS."
              />
            </div>
          </div>
        </div>
      </section>

      <section className='mt-14 text-white bg-indigo-600'>
        <div className='max-w-[1200px] w-full mx-auto h-[auto] p-4 flex justify-center items-center'>
          <div className='w-[70%] mt-14 mb-14'>
            <div className=''>
              <h2 className='text-4xl font-bold text-center '>La próxima revolución del mercado podría llevar tu sello. ¡Construyámosla juntos!</h2>
            </div>

            <div className='mt-10 flex justify-center ite'>
                <button className='p-3 rounded-sm shadow-[0_4px_10px_rgba(255,255,255,0.5)] flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform'>
                  <a className='font-semibold text-base flex items-center'>
                    CONTÁCTENOS
                  </a>
                </button>
              </div>
          </div>
        </div>
      </section>

      <section className='h-[auto] mt-10'>
        {/* Contenido Nuestras Tecnologías*/}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='mx-8'>
            <div className='flex justify-center w-[90%]'>
              <div className=''>
                <div className='flex mb-8'>
                  <div className='w-[6%]'>
                    <hr className="border-t-4 border-black opacity-80 my-4" />
                  </div>
                </div>
                <h2 className='text-3xl opacity-80 font-bold'>Tecnologías</h2>
                <p className='mt-4 text-2xl opacity-80 w-[70%]'>El equipo de desarrollo que trabaja en un proyecto utiliza únicamente tecnologías modernas y escalables para implementar aplicaciones móviles y web tal como usted lo desea.</p>
              </div>
            </div>

            <Technologies/>

          </div>
        </div>
      </section>

      <Footer/>

    </>
  );
};

export default Home;

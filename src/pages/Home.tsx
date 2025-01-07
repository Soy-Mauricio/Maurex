import React from 'react';
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import ServiceBlocks from '../components/homeSections/ServiceBlocks';
import OurServices from '../components/homeSections/OurServices';
import Equipo from '../components/homeSections/Company';
import Technologies from '../components/homeSections/Technologies';


const Home: React.FC = () => {
  return (

    <MainLayout>
      
      <section className="h-auto color-sections">
        {/* Contenido de Bienvenida */}
        <div className="text-white max-w-[1200px] w-full mx-auto h-auto flex justify-center items-center">
            <div className="h-[650px] p-4 sm:mx-8 sm:w-[50%] mb-4 flex flex-col justify-center">
              <div className="">
                <h1 className="sm:text-5xl text-4xl font-bold mt-4">Tu aliado en el desarrollo de software</h1>
                <p className="mt-4 text-2xl font-medium">En Maurex transformamos ideas en soluciones digitales innovadoras, creando productos tecnológicos de alta calidad para potenciar tu negocio. Ofrecemos desarrollo de aplicaciones personalizadas, optimización de procesos y servicios de consultoría para ayudarte a alcanzar tus objetivos.</p>
              </div>

              <div className="mt-10">
                <button className="p-3 rounded-sm flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform">
                  <a className="font-semibold text-base flex jus items-center">
                    EMPEZAR AHORA
                  </a>
                  <img className="w-[26px] inline-block" src="assets/Icons/angulo-pequeno-derecha.png" alt="" /> 
                </button>
              </div>
            </div>

          <div className="w-[50%] sm:flex hidden">
            <img className="object-cover" src="assets/Img/Developer.png" alt="" />
          </div>
        </div>
      </section>

      <section className="h-auto mt-24">
        {/* Contenido de Nuestros Servicios */}
        <div className="max-w-[1200px] w-full mx-auto h-auto sm:flex sm:justify-center">

          <div className="h-auto p-4 sm:mx-8 sm:w-[50%]">
              <div className="">
                <hr className="border-t-4 border-black opacity-80 sm:w-[10%] w-[15%] mb-10"/>
                <h2 className="text-4xl opacity-80 font-bold">Consigue ahora el mejor producto del mercado</h2>
              </div>
              <div className="mt-8">
                <p className="text-2xl opacity-80">Maurex se centra en el valor comercial y la confianza. Hemos proporcionado una variedad de aplicaciones de alta calidad a empresas de todos los tamaños, desde startups unipersonales hasta empresas como Pinterest, Asmodee, universidades y organizaciones sin fines de lucro.</p>
              </div>

              <button className="mt-10">
                <Link to='/our-work'
                className="p-3 font-semibold text-base rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center w-[250px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform"> CÓMO TRABAJAMOS
                <img className="w-[25px] inline-block ml-2" src="assets/Icons/flecha-pequena-derecha.png" alt="" />
                </Link>
              </button>
          </div>

          <div className="flex-col p-4 sm:mx-8 sm:w-[50%]">
            <OurServices
              title='Desarrollo Web'
              description='Creamos páginas web robustas y escalables que mejoran la experiencia del usuario y la presencia de tu negocio en línea.'
              icon='assets/Icons/angulo-derecho.png'
              number={1}
              link='/web-development'
            />

            <OurServices
              title='Aplicaciones Móviles'
              description='Diseñamos y desarrollamos apps móviles intuitivas y eficientes para conectar tu negocio con los clientes dondequiera que estén.'
              icon='assets/Icons/angulo-derecho.png'
              number={2}
              link=''
            />

            <OurServices
              title='Software a Medida'
              description='Desarrollamos soluciones personalizadas que automatizan procesos, mejoran la eficiencia y reducen costos operativos.'
              icon='assets/Icons/angulo-derecho.png'
              number={3}
              link=''
            />

            <OurServices
              title='Consultoría Tecnológica'
              description='Te guiamos en la adopción de las tecnologías más adecuadas para el crecimiento de tu empresa.'
              icon='assets/Icons/angulo-derecho.png'
              number={4}
              link=''
            />
          </div>

        </div>
      </section>

      <section className="h-auto mt-14 color-sections-dos">
        {/* Contenido sobre nuestros proyectos */}
        <div className="h-auto p-4 max-w-[1200px] w-full mx-auto">
          <div className="h-auto mt-14">
            <h2 className="text-3xl mt-4 font-bold flex justify-center text-center text-white">Nuestros Proyectos</h2>
            <div className="flex justify-center items-center">
              <p className="text-center mt-4 sm:w-[75%] text-2xl text-white">En Maurex, cada proyecto es un reto y una oportunidad de innovar. Aquí te presentamos algunos de nuestros trabajos más destacados.</p>
            </div>
          </div>

          {/* Utilizamos el componente ServiceBlock con props */}
          <div className="sm:flex-col mt-8 sm:mt-16 mb-16">
            <ServiceBlocks/>
          </div>
        </div>
      </section>

      <section className="h-auto mt-14">
        {/* Contenido Nosotros Maurex */}
        <div className="h-auto p-4 max-w-[1200px] w-full mx-auto">
          <div className="flex justify-center">
            <div className="sm:w-[75%]">
              <div className="flex flex-col items-center">
                <hr className="border-t-4 sm:w-[6%] w-[15%] border-black opacity-80 mb-10"/>
                <h2 className="text-center text-3xl opacity-80 font-bold">Maurex</h2>
              </div>
              <p className="mt-4 text-center text-2xl opacity-80">Hemos construido Maurex con una misión clara: ofrecer soluciones tecnológicas personalizadas que transformen negocios y simplifiquen procesos. Nuestra pasión por la innovación y el desarrollo de software nos permite entregar productos que no solo cumplen, sino que superan las expectativas de nuestros clientes.</p>
            </div>
          </div>
        </div>

        <div className="h-auto p-4 max-w-[1200px] w-full mx-auto mt-10">
          <div className="flex justify-center">
            <div className="sm:w-[75%]">
              <div className="flex flex-col items-center">
                <hr className="border-t-4 sm:w-[6%] w-[15%] border-black opacity-80 mb-10"/>
                <h2 className="text-center text-3xl opacity-80 font-bold">Nuestro Equipo</h2>
              </div>
              <p className="mt-4 text-center text-2xl opacity-80">En Maurex, somos un equipo ágil y altamente especializado. Nos enfocamos en ofrecer soluciones completas, combinando el poder del frontend y backend para crear productos robustos y escalables.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto mt-10">
        {/* Contenido Nuestro Equipo */}
          <div className="flex justify-center">
            <div className="sm:flex sm:justify-around">
              <Equipo 
                img='assets/Img/Joker.jpg'
                location='Colombia'
                flag='/assets/Img/Colombia.png'
                name='John Camargo'
                cargo='Desarrollador Backend'
                conocimientos='Experto en la creación de APIs, manejo de bases de datos y herramientas como Node.js, Python, Django, MongoDB, y PostgreSQL.'
              />

              <Equipo 
                img='assets/Img/JokerDos.jpg'
                location='Colombia'
                flag='/assets/Img/Colombia.png'
                name='Mauricio Sanabria'
                cargo='Desarrollador Frontend'
                conocimientos='Especialista en interfaces intuitivas y herramientas como React, Vite.js, JavaScript, TypeScript, Axios y Tailwind CSS.'
              />
            </div>
          </div>
      </section>

      <section className="mt-14 text-white color-sections">
        <div className="max-w-[1200px] w-full mx-auto h-[auto] p-4 flex justify-center items-center">
          <div className="sm:w-[70%] mt-14 mb-14">
            <div className="">
              <h2 className="text-2xl sm:text-4xl font-bold text-center">La próxima revolución del mercado podría llevar tu sello. ¡Construyámosla juntos!</h2>
            </div>

            <div className="mt-10 flex justify-center ite">
              <button className="p-3 rounded-sm  flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform">
                <a className="font-semibold text-base flex items-center">
                  CONTÁCTANOS
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[auto] mt-10">
        {/* Contenido Nuestras Tecnologías*/}
        <div className="h-[auto] p-4 max-w-[1200px] w-full mx-auto">
          <div className="sm:mx-8">
            <Technologies/>
          </div>
        </div>
      </section>

    </MainLayout>
    
  );
};

export default Home;

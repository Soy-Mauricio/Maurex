import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServiceBlocks from '../blocks/ServiceBlocks';
import OurServices from '../blocks/OurServices';
import Reviews from '../blocks/Reviews';
import Company, { Equipo } from '../blocks/Company';


const Home: React.FC = () => {
  return (
    <>
      <Header/>

      <section className='h-[auto]'>
        {/* Contenido de Bienvenida */}
        <div className='text-white bg-indigo-600 h-[auto]'>
            <div className='h-[auto] p-4 '>
              <h1 className='text-4xl font-bold flex justify-center mt-4'>¡Bienvenidos a Maurex!</h1>
              <p className='mt-4 opacity-90 font-medium'>En Maurex transformamos ideas en soluciones digitales innovadoras, creando productos tecnológicos de alta calidad para potenciar tu negocio. Ofrecemos desarrollo de aplicaciones personalizadas, optimización de procesos y servicios de consultoría para ayudarte a alcanzar tus objetivos.</p>
            </div>

            <div className='p-4'>
              <button className='flex items-center justify-center w-[auto] bg-yellow-500 rounded-3xl'>
                <a className='p-2 font-semibold'>
                  Empezar ahora
                  <img className='w-[14px] inline-block ml-1' src="/public/Icons/angulo-derecho.png" alt="" /></a> 
              </button>
            </div>
        </div>
      </section>

      <section className='h-[auto]'>
        {/* Contenido de Nuestros Servicios */}
        <div className='h-[auto] mt-14 p-4'>
          <div className=''>
            <h1 className='text-3xl text-stone-800 opacity-90 font-bold flex justify-center text-center'>Nuestros Sevicios Incluyen</h1>
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

      <section className='h-[auto] bg-indigo-600'>
        {/* Contenido sobre nuestros proyectos */}
        <div className='h-[auto] mt-14 p-4'>
          <div className=''>
            <h2 className='text-3xl text-stone-800 opacity-90 font-bold flex justify-center text-center'>Nuestros Proyectos</h2>
            <p className='text-center mt-2 font-medium opacity-65'>Cada proyecto es un reto que nos impulsa a seguir innovando. Aquí te presentamos algunos de nuestros trabajos más destacados.</p>
          </div>

          <div className='mt-10 sm:flex h-auto sm:items-center sm:justify-between sm:flex-row-reverse'>

            {/* Utilizamos el componente ServiceBlock con props */}
            <div className='sm:flex-col sm:w-[50%] sm:mr-10'>
              <ServiceBlocks
                icon="/Icons/rayo-ovni.png"
                title="VUELOYA WEB"
                description="Desarrollo de una plataforma e-commerce que aumentó en un 50% las ventas online de nuestro cliente."
                isFirst={true} // Indicamos que este es el primer bloque
              />
              <ServiceBlocks
                icon="/Icons/rayo-ovni.png"
                title="VUELOYA APP"
                description="Aplicación móvil de reserva de servicios con más de 100.000 descargas."
              />
            </div>

          </div>

          <div className='mt-4 w-[50%]'>
            <a href="#" className='flex items-center cursor-pointer'>
              <span className='btn-proyectos sm:mt-4 mt-0 text-stone-800 flex items-center font-semibold border-b-2 border-b-stone-800 hover:bg-stone-800 hover:text-white hover:p-1'>
                PROYECTOS
                <img className='w-[16px] ml-2' src="/public/Icons/flecha-derecha.png" alt="Flecha" />
              </span>
            </a>
          </div>

        </div>
      </section>

      <section className='h-[auto]'>
        {/* Contenido reseñas de los clientes */}
        <div className='h-[auto] mt-14 p-4'>
          <div className=''>
            <h2 className='text-3xl text-stone-800 opacity-90 font-bold flex justify-center text-center'>Nuestros Clientes</h2>
          </div>
          
          <div className='mt-10'>
            <Reviews
              img="/public/Img/PaisajeUno.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum, perspiciatis eligendi quae reiciendis distinctio voluptate, natus reprehenderit excepturi blanditiis consequuntur inventore nisi accusamus omnis minus deleniti tempore temporibus rem."
              isFirst={true} // Indicamos que este es el primer bloque
            />

            <Reviews
              img="/public/Img/PaisajeUno.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum, perspiciatis eligendi quae reiciendis distinctio voluptate, natus reprehenderit excepturi blanditiis consequuntur inventore nisi accusamus omnis minus deleniti tempore temporibus rem."
            />
          </div>

        </div>
      </section>

      <section>
          {/* Contenido Nosotros Maurex */}
          <div className='h-[auto] mt-14 p-4'>
            <div className=''>
              <h2 className='text-3xl text-stone-800 opacity-90 font-bold'>Conoce Maurex</h2>
              <p className='mt-4'>Hemos construido Maurex con una misión clara: ofrecer soluciones tecnológicas personalizadas que transformen negocios y simplifiquen procesos. Nuestra pasión por la innovación y el desarrollo de software nos permite entregar productos que no solo cumplen, sino que superan las expectativas de nuestros clientes.</p>
            </div>

            <Company 
              tittle="Misión"
              description="Transformar ideas en soluciones tecnológicas mediante el uso de las herramientas más avanzadas, creando software a medida que impulse el crecimiento y la eficiencia de nuestros clientes."
            />
            <Company 
              tittle="Visión"
              description="Ser referentes en la industria del desarrollo de software por nuestra calidad, compromiso y capacidad de adaptación a las nuevas tecnologías."
            />
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

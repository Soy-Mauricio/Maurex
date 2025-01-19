import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ServicesWeb from '../components/webSections/ServicesWeb';
import Reviews from '../components/ourWorkSections/Reviews';
import Trajectory from '../components/ourWorkSections/Trajectory';
import PortfolioWeb from '../components/webSections/PortfolioWeb';
import OurProcess from '../components/webSections/OurProcess';
import Technologies from '../components/homeSections/Technologies';

const Web: React.FC = () => {
  return (
      
    <MainLayout>

    <section className="h-auto color-sections">
      {/* Contenido de Bienvenida */}
      <div className="text-white max-w-[1200px] w-full mx-auto h-[auto] flex items-center">
        <div className="sm:h-[650px] h-[850px] p-4 sm:mx-8 mb-4 flex flex-col items-center justify-center">
          <div className="text-center sm:w-[65%]">
            <h1 className="text-5xl font-bold mt-4">Nos especializamos en el desarrollo web para impulsar tus objetivos comerciales.</h1>
            <p className="mt-8 text-xl font-medium">En Maurex, combinamos experiencia y tecnología para asegurar que su producto haga una diferencia en el mercado. Desde optimizar la experiencia del usuario y perfeccionar el diseño de productos, hasta implementar un desarrollo ágil y efectivo, nos aseguramos de que cada aspecto de su presencia digital esté alineado con sus objetivos comerciales.</p>
          </div>
          <div className="mt-20 flex justify-center">
            <button className="color-btn p-3 rounded-lg flex items-center justify-center w-[200px] transform transition-transform duration-700 hover:scale-105 will-change-transform backface-visibility-hidden">
              <a className="font-semibold text-base flex items-center">
                CONTÁCTANOS
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="h-auto my-20">
      <div className="p-4 max-w-[1200px] w-full mx-auto">
        <div className="flex justify-center">
            <h2 className="icon-three text-center text-4xl opacity-80 font-bold w-[50%]">Servicios de desarrollo de aplicaciones web</h2>
        </div>
      </div>

      <div className="flex justify-center sm:p-10 p-0 sm:my-0 my-10">
        <div className="sm:flex sm:justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ServicesWeb
                img='/assets/Img/Responsive.svg'
                service='Diseño Responsive'
                text='Creamos interfaces atractivas que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario óptima.'
            />
            <ServicesWeb
                img='/assets/Img/Frontend.svg'
                service='Desarrollo Frontend'
                text='Para interfaces intuitivas y dinámicas que capturan la atención y mejoran la navegación.'
            />
            <ServicesWeb
                img='/assets/Img/Backend.svg'
                service='Desarrollo de Backend'
                text='Para una estructura sólida que garantiza un rendimiento eficiente y seguro.'
            />
            <ServicesWeb
                img='/assets/Img/APIs.svg'
                service='Integración de APIs'
                text='Conectamos tu web con servicios externos para ampliar su funcionalidad y mejorar la interacción.'
            />
            <ServicesWeb
                img='/assets/Img/Consultancy.svg'
                service='Consultoría Tecnológica'
                text='Para orientación estratégica en la elección de tecnologías que potencien tu proyecto web.'
            />
            <ServicesWeb
                img='/public/assets/Img/Support.svg'
                service='Mantenimiento y Soporte'
                text='Para un rendimiento continuo y actualizaciones regulares que mantienen tu sitio web en su mejor estado.'
            />
          </div>
        </div>
      </div>
    </section>

    <section className="h-auto">
      <div className="h-auto p-4 max-w-[1200px] w-full mx-auto mt-20">
        <div className="sm:mx-8 flex">
          <div className="flex justify-start w-[60%]">
            <div className="w-[90%]">
              <h2 className="icon text-5xl opacity-80 font-bold">Desarrollo Web de Calidad</h2>
              <div className="mt-12 text-2xl opacity-80 ">
                <p className="mb-4">En Maurex, abordamos el desarrollo web con un enfoque claro y eficiente. Te acompañamos en cada paso, desde la planificación hasta el lanzamiento. Analizamos tu proyecto, investigamos el mercado y te asesoramos sobre la tecnología adecuada, la arquitectura y las mejoras necesarias para mantener tu producto competitivo.
                </p>
                <p>
                Nos centramos en crear soluciones que generen resultados. Desarrollamos productos de manera rápida y eficaz, con un equipo dedicado y un diseño de alta calidad, asegurando que tu producto no solo funcione bien, sino que también se destaque en el mercado. En Maurex, escribimos código que impulsa el éxito.
                </p>
              </div>
            </div>
          </div>

          <div className="ml-10 w-[40%] flex items-center">
            <img className="object-cover h-[600px]" src="/public/assets/Img/web-design.webp" alt="" />
          </div>
        </div>
      </div>
    </section>


    <section className="h-auto my-20 color-sections-dos">
      {/* Contenido de Bienvenida */}
      <div className="max-w-[1200px] w-full mx-auto h-auto flex items-center">
        <div className="h-auto mb-4 w-full my-20">
          <div className="mt-10 p-4 sm:mx-8 text-white flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col">
              <h2 className="icon-two text-4xl font-bold mb-10">Testimonios de clientes</h2>
              <span className="text-xl italic">Tenemos más de 10+ reseñas con una puntuación media de</span>
            </div>

            <div className="mt-8 sm:mt-0 flex flex-col  justify-around items-center">
              <div className="puntuacion sm:text-9xl text-7xl font-extrabold">5.0</div>
              <div className="text-3xl">★ ★ ★ ★ ★</div>
            </div>
          </div>

          <div className="p-4 sm:mx-8">
            <div className="flex justify-center mt-14 mb-12">
              <Reviews/>
            </div>

            <div className="my-20 text-xl italic text-white">
              <Trajectory 
                projects='+10 proyectos completados.'
                hours='+500 horas de desarrollo acumuladas.'
                satisfaction='100% de satisfacción en entregas puntuales.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="h-auto my-20">
      <div className="h-auto p-4 max-w-[1200px] w-full mx-auto">
        <div className="sm:mx-8 flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="w-[70%] flex flex-col">
              <h2 className="icon-three text-4xl font-bold text-center ">Una muestra de nuestro portafolio de desarrollo web</h2>
              <div className="mt-10 text-2xl opacity-80">
                <p className="mb-4 text-center text-lg font-semibold opacity-75">
                  Desde la conceptualización hasta el lanzamiento, seguimos un proceso ágil para asegurar que cada proyecto se complete a tiempo y dentro del presupuesto.
                </p>
              </div>
            </div>
          </div>
          
          <PortfolioWeb 
            title='VueloYA'
            description='VueloYA es una innovadora aplicación diseñada para transformar la manera en que las personas buscan, reservan y gestionan sus vuelos. Con un enfoque en la simplicidad y la eficiencia, VueloYA se destaca en un mercado saturado por plataformas poco intuitivas, ofreciendo una experiencia de usuario clara y amigable.'
            button='Más Información'
            img='/public/assets/Img/web-design.webp'
          />
          <PortfolioWeb 
            title='VueloYA'
            description='VueloYA es una innovadora aplicación diseñada para transformar la manera en que las personas buscan, reservan y gestionan sus vuelos. Con un enfoque en la simplicidad y la eficiencia, VueloYA se destaca en un mercado saturado por plataformas poco intuitivas, ofreciendo una experiencia de usuario clara y amigable.'
            button='Más Información'
            img='/public/assets/Img/web-design.webp'
          />
        </div>
      </div>
    </section>

    <section className="h-auto color-sections-dos my-20">
      <div className="h-auto p-4 max-w-[1200px] w-full mx-auto">
        <div className="sm:mx-8 flex flex-col justify-center text-white mt-20">
          <div className="flex justify-center">
            <div className="w-[80%]">
              <h2 className="icon-four text-4xl font-bold text-center">Nuestro Proceso</h2>
              <div className="mt-10 text-2xl opacity-80">
                <p className="mb-4 text-center text-lg font-semibold">
                  Desde la idea inicial hasta el lanzamiento final, adoptamos un enfoque ágil que garantiza la entrega puntual y dentro del presupuesto, maximizando la eficiencia y adaptándonos a tus necesidades en cada etapa del proyecto..
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center sm:h-[500px]">
            <OurProcess />
          </div>
        </div>
      </div>
    </section>

    <section className="h-auto my-20">
      {/* Contenido Nuestras Tecnologías*/}
      <div className="h-auto p-4 max-w-[1200px] w-full mx-auto">
        <div className="sm:mx-8">
          <Technologies/>
        </div>
      </div>
    </section>

    </MainLayout>

  );
}

export default Web;
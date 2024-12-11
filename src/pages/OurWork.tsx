// src/pages/HowWeWork.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom'
import HowWork from '../components/ourWorkSections/HowWork';
import Technologies from '../components/homeSections/Technologies';
import Reviews from '../components/ourWorkSections/Reviews';
import Trajectory from '../components/ourWorkSections/Trajectory';

const OurWork: React.FC = () => {
  return (
    <MainLayout>
      <section className='h-[auto] color-sections'>
        {/* Contenido de Bienvenida */}
        <div className='text-white max-w-[1200px] w-full mx-auto h-[auto] flex items-center'>
            <div className='h-[auto] p-4 sm:mx-8 sm:w-[75%] mb-4'>
              <div className=''>
                <h1 className='sm:text-5xl text-4xl font-bold mt-4'>Transformamos tus ideas en soluciones de software personalizadas.</h1>
                <p className='mt-6 text-2xl font-medium'>En Maurex, combinamos creatividad, tecnología y compromiso para desarrollar soluciones de software que impulsan el éxito de nuestros clientes. Nuestro equipo trabaja mano a mano contigo para crear productos innovadores y de alta calidad.</p>
              </div>

              <div className='mt-10'>
                <div className='mt-10'>
                    <button className='p-3 rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center w-[250px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform'>
                        <Link to='/our-work' className='font-semibold text-base flex items-center'> TRABAJA CON NOSTROS </Link>
                        <img className='w-[26px] inline-block' src="assets/Icons/angulo-pequeno-derecha.png" alt="" /> 
                    </button>
                </div>
              </div>
            </div>
        </div>
      </section>


      <section className='h-[auto] mt-24'>
        {/* Contenido de Bienvenida */}
        <div className='max-w-[1200px] w-full mx-auto h-[auto] flex items-center'>
            <div className='h-[auto] p-4 sm:mx-8 sm:w-[75%] mb-4'>
                <div className=''>
                    <hr className='border-t-4 border-black opacity-80 sm:w-[6%] w-[15%] mb-10'/>
                    <h1 className='text-4xl opacity-80 font-bold'>¿Cómo Trabajamos?</h1>
                </div>

                <div>
                    <HowWork 
                      title="Reunión inicial"
                      description="Todo comienza escuchando tus necesidades. Analizamos tus objetivos para diseñar una solución que realmente marque la diferencia."
                      number={1}
                      img='/public/assets/Img/Teams.png'
                    />

                    <HowWork 
                      title="Planeación"
                      description="Creamos un plan detallado, priorizando tus metas, plazos y presupuesto. Definimos claramente cada etapa del proyecto"
                      number={2}
                      img='/public/assets/Img/TeamsBusiness.png'
                    />

                    <HowWork 
                      title="Diseño y desarrollo"
                      description="Nuestro equipo combina diseño intuitivo con desarrollo eficiente, asegurando una experiencia de usuario excepcional."
                      number={3}
                      img='/public/assets/Img/Design.png'
                    />

                    <HowWork 
                      title="Pruebas"
                      description="Realizamos pruebas exhaustivas para garantizar que el producto final sea seguro, estable y funcional."
                      number={4}
                      img='/public/assets/Img/Tests.png'
                    />

                    <HowWork 
                      title="Implementación y soporte"
                      description="Lanzamos tu proyecto con éxito y ofrecemos soporte continuo para asegurarnos de que todo funcione como lo planeaste."
                      number={5}
                      img='/public/assets/Img/Support.png'
                    />
                </div>

            </div>
        </div>
      </section>

      <section className='h-[auto] mt-10'>
        {/* Contenido Nuestras Tecnologías*/}
        <div className='h-[auto] p-4 max-w-[1200px] w-full mx-auto'>
          <div className='sm:mx-8'>
            <div className='flex justify-center sm:w-[75%]'>
              <div className=''>
                <div className='flex mb-8'>
                  <hr className="border-t-4 sm:w-[6%] w-[15%] border-black opacity-80 my-4" />
                </div>
                <h2 className='text-3xl opacity-80 font-bold'>Tecnologías que utilizamos</h2>
                <p className='mt-4 text-2xl opacity-80 sm:w-[85%]'>En Maurex utilizamos un stack tecnológico sólido y moderno para ofrecer soluciones de software robustas y escalables. Al combinar estas herramientas, garantizamos proyectos de alta calidad, optimizados para cumplir con tus necesidades y los estándares más exigentes del mercado.</p>
              </div>
            </div>

            <Technologies/>

          </div>
        </div>
      </section>

      <section className='h-[auto] mt-24 color-sections-dos'>
        {/* Contenido de Bienvenida */}
        <div className='max-w-[1200px] w-full mx-auto h-[auto] flex items-center'>
            <div className='h-[auto] p-4 sm:mx-8 mb-4 w-full'>
                <div className='mt-12 text-white flex justify-between items-center'>
                  <div className=''>
                    <hr className='border-t-4 border-white sm:w-[10%] w-[15%] mb-10'/>
                    <h2 className='text-4xl font-bold'>Testimonios de clientes</h2>
                    <div className='mt-8'>
                      <span className='text-xl italic'>Tenemos más de 10+ reseñas con una puntuación media de</span>
                    </div>
                  </div>
                  <div className='mt-4 sm:mt-0 sm:flex-col flex items-center'>
                    <div className='puntuacion text-8xl font-extrabold'>4.9</div>
                    <div className='ml-4 sm:ml-0 text-2xl flex justify-center'>★ ★ ★ ★ ★</div>
                  </div>
                </div>

                <div className='flex justify-center mt-14 mb-12'>
                  <Reviews/>
                </div>

                <div className='mt-20 mb-10 text-xl italic text-white'>
                  <Trajectory 
                    projects="+10 proyectos completados."
                    hours="+500 horas de desarrollo acumuladas."
                    satisfaction="100% de satisfacción en entregas puntuales."
                  />
                </div>

            </div>
        </div>
      </section>

      <section className='h-auto'>
        <div className='max-w-[1200px] w-full mx-auto h-[auto] p-4 flex justify-center items-center'>
            <div className='sm:w-[70%] mt-14 mb-14 p-4'>
              <div className=''>
                <div className='flex justify-center mb-8'>
                    <hr className="border-t-4 sm:w-[6%] w-[15%] border-black opacity-80 my-4" />
                </div>
                <h2 className='text-2xl sm:text-4xl font-bold text-center text-stone-900 opacity-90'>¿Tienes un proyecto en mente?</h2>
              </div>

              <div className='mt-10 mb-5 flex justify-center ite'>
                  <button className='p-3 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-sm flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform'>
                    <a className='font-semibold text-base flex items-center opacity-80'>
                      CONTÁCTANOS
                    </a>
                  </button>
                </div>
            </div>
        </div>
      </section>


    </MainLayout>
  );
};

export default OurWork;

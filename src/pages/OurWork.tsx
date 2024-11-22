// src/pages/HowWeWork.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom'

const OurWork: React.FC = () => {
  return (
    <MainLayout>
      <section className='h-[auto] bg-indigo-600'>
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
                    <hr className='border-t-4 border-black opacity-80 sm:w-[8%] w-[15%] mb-10'/>
                    <h1 className='text-4xl opacity-80 font-bold'>Nuestro Proceso</h1>
                </div>

                <div>
                    
                </div>

            </div>
        </div>
      </section>


    </MainLayout>
  );
};

export default OurWork;

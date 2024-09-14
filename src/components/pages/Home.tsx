import React from 'react';
import Header from '../layout/Header';
import ServiceBlock from '../blocks/ServiceBlocks';
import ImagenesBlocks from '../blocks/ImagenesBlocks';


const Home: React.FC = () => {
  return (
    <>
      <Header/>

      <section className='h-[auto] '>
        {/* Contenido de bienvenida */}
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

        {/* Contenido sobre nuestro trabajo */}
        <div className='h-[auto] mt-10 p-4'>
          <div className='h-[auto]'>
            <h2 className='text-3xl text-stone-800 opacity-90 font-bold flex justify-center text-center'>Meet the AI Writing Assistant for Your Newsletter</h2>
          </div>

          <div className='mt-8'>
            {/* Utilizamos el componente ServiceBlock con props */}
            <ServiceBlock
              icon="/public/Icons/rayo-ovni.png"
              title="GET CONTENT SUGGESTIONS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae quas perspiciatis."
            />
            <ServiceBlock
              icon="/public/Icons/rayo-ovni.png"
              title="GET CONTENT SUGGESTIONS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae quas perspiciatis."
            />
            <ServiceBlock
              icon="/public/Icons/rayo-ovni.png"
              title="GET CONTENT SUGGESTIONS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae quas perspiciatis."
            />

            <div>
              <ImagenesBlocks/>
            </div>
          </div>

        </div>

      </section>

    </>
  );
};

export default Home;

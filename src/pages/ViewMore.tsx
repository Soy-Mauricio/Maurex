import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Views from '../components/viewMoreSections/Views'

const ViewMore: React.FC = () => {
  return (
    <MainLayout>
      
      <section className="h-auto color-sections">
        {/* Contenido de Bienvenida */}
        <div className="text-white max-w-[1200px] w-full mx-auto h-[auto] flex items-center">
            <div className="sm:h-[650px] h-[850px] p-4 sm:mx-8 mb-4 flex flex-col items-center justify-center">
              <div className="text-center sm:w-[65%]">
                  <h1 className="sm:text-5xl text-4xl font-bold mt-4">VUELOYA</h1>
                <p className="mt-6 text-xl">Desarrollamos una aplicación innovadora que revoluciona la experiencia de búsqueda y reserva de vuelos. Con VueloYA, los usuarios pueden explorar opciones de vuelo de manera rápida y sencilla, mientras que las empresas aéreas pueden capturar información clave de sus clientes potenciales, enriqueciendo sus bases de datos y fortaleciendo sus estrategias de fidelización.</p>
              </div>
              <div className="mt-20 flex justify-center">
                <button className="p-3 flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform">
                  <a className="font-semibold text-base flex items-center">
                    CONTÁCTANOS
                  </a>
                </button>
              </div>
            </div>
        </div>
      </section>
    
      <section className="h-auto">
        <Views />
      </section>

    </MainLayout>
  )
}

export default ViewMore
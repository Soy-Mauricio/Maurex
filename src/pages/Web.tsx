import React from 'react'
import MainLayout from '../layouts/MainLayout';

const Web: React.FC = () => {
    return (
        
        <MainLayout>

            <section className="h-auto color-sections">
                {/* Contenido de Bienvenida */}
                <div className="text-white max-w-[1200px] w-full mx-auto h-auto flex justify-center items-center">
                    <div className="h-[650px] p-4 sm:mx-8 sm:w-[60%] mb-4 flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-4xl font-bold mt-4">Nos dedicamos a impulsar sus metas comerciales, más allá del simple desarrollo web.</h1>
                            <p className="mt-8 text-2xl font-medium">En Maurex, combinamos experiencia y tecnología para asegurar que su producto haga una diferencia en el mercado. Desde optimizar la experiencia del usuario y perfeccionar el diseño de productos, hasta implementar un desarrollo ágil y efectivo, nos aseguramos de que cada aspecto de su presencia digital esté alineado con sus objetivos comerciales.</p>
                        </div>

                        <div className="mt-10">
                            <button className="p-3 rounded-sm flex items-center justify-center w-[200px] bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 will-change-transform">
                                <a className="font-semibold text-base flex jus items-center">
                                    CONTRÁTANOS
                                </a>
                                <img className="w-[26px] inline-block" src="assets/Icons/angulo-pequeno-derecha.png" alt="" /> 
                            </button>
                        </div>
                    </div>

                    <div className="w-[40%] sm:flex hidden">
                        <img className="object-cover" src="/assets/Img/Website.svg" alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div>
                    
                </div>
            </section>

        </MainLayout>

    );
}

export default Web;
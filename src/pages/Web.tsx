import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ServicesWeb from '../components/webSections/ServicesWeb';

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

            <section className="h-auto">
                <div className="p-4 max-w-[1200px] w-full mx-auto mt-20">
                    <div className="flex justify-center">
                        <div className="sm:w-[75%]">
                            <div className="flex flex-col items-center">
                                <hr className="border-t-4 sm:w-[6%] w-[15%] border-black opacity-80 mb-10"/>
                                <h2 className="text-center text-4xl opacity-80 font-bold">Servicios de desarrollo de aplicaciones web</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-20">
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

            

        </MainLayout>

    );
}

export default Web;
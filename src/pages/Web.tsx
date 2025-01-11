import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ServicesWeb from '../components/webSections/ServicesWeb';

const Web: React.FC = () => {
    return (
        
        <MainLayout>

        <section className="h-auto color-sections">
            {/* Contenido de Bienvenida */}
            <div className="text-white max-w-[1200px] w-full mx-auto h-auto flex justify-center items-center">
                <div className="sm:h-[650px] h-[875px] p-4 sm:mx-8 sm:w-[60%] mb-4 flex flex-col justify-center">
                    <div className="">
                        <h1 className="sm:text-5xl text-4xl font-bold mt-4">Nos especializamos en el desarrollo web para impulsar tus objetivos comerciales.</h1>
                        <p className="mt-4 text-2xl font-medium">En Maurex, combinamos experiencia y tecnología para asegurar que su producto haga una diferencia en el mercado. Desde optimizar la experiencia del usuario y perfeccionar el diseño de productos, hasta implementar un desarrollo ágil y efectivo, nos aseguramos de que cada aspecto de su presencia digital esté alineado con sus objetivos comerciales.</p>
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

                <div className="w-[40%] sm:flex hidden">
                    <img className="object-cover" src="assets/Img/Website.svg" alt="" />
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

        <section className="auto mt-10">
            <div className="h-[auto] p-4 max-w-[1200px] w-full mx-auto">
                <div className="sm:mx-8">
                    <div className="flex justify-start">
                        <div className="w-[60%]">
                            <h2 className="text-with-icon text-3xl opacity-80 font-bold">Desarrollo Web de Calidad</h2>
                            <div className="mt-4 text-2xl opacity-80 sm:w-[85%]">
                                <p className="mb-4">En Maurex, abordamos el desarrollo web con un enfoque claro y eficiente. Te acompañamos en cada paso, desde la planificación hasta el lanzamiento. Analizamos tu proyecto, investigamos el mercado y te asesoramos sobre la tecnología adecuada, la arquitectura y las mejoras necesarias para mantener tu producto competitivo.
                                </p>
                                <p>
                                Nos centramos en crear soluciones que generen resultados. Desarrollamos productos de manera rápida y eficaz, con un equipo dedicado y un diseño de alta calidad, asegurando que tu producto no solo funcione bien, sino que también se destaque en el mercado. En Maurex, escribimos código que impulsa el éxito.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </MainLayout>

    );
}

export default Web;
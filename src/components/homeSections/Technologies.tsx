import React, { useState } from 'react'

interface Technology {
    nametech: string;
    logotech: string;
}


const Technologies: React.FC = () => {
    const [showMobile, setShowMobile] = useState(false);

    // Array de tecnologías de backend
    const backendTechnologies: Technology[] = [
        { name: 'Node JS', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Django', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Python', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Type Script', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Django REST', logo: 'assets/Logos/Logo-NodeJS.png' },
    ];

    // Array de tecnologías de frontend
    const frontendTechnologies: Technology[] = [
        { name: 'React', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Vite.js', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'React', logo: 'assets/Logos/Logo-NodeJS.png' },
        // Agrega más tecnologías según sea necesario
    ];

    // Array de tecnologías móviles
    const mobileTechnologies: Technology[] = [
        { name: 'React Native', logo: 'assets/Logos/Logo-NodeJS.png' },
        { name: 'Flutter', logo: 'assets/Logos/Logo-NodeJS.png' },
    ];

    // Array de tecnologías android
    const androidTechnologies: Technology[] = [
        { name: 'Kotlin', logo: 'assets/Logos/Logo-NodeJS.png' },
    ];

    // Función para alternar entre tecnologías web y móviles
    const toggleTechnologies = (isMobile: boolean) => {
        setShowMobile(isMobile);
    };

    return (
        <>

            <div className="flex flex-col justify-center">
                <h2 className="icon text-4xl font-bold text-colorAction-TITTLE">Tecnologías que utilizamos</h2>
                <p className="mt-12 text-2xl sm:w-[75%] opacity-80">En Maurex utilizamos un stack tecnológico sólido y moderno para ofrecer soluciones de software robustas y escalables. Al combinar estas herramientas, garantizamos proyectos de alta calidad, optimizados para cumplir con tus necesidades y los estándares más exigentes del mercado.</p>
            </div>

            <div className="flex justify-between gap-2 items-center mt-20 text-xl font-semibold">
                <span
                    onClick={() => toggleTechnologies(false)}
                    className={`w-[50%] cursor-pointer p-2 rounded-full text-center text-colorAction-TITTLE ${!showMobile ? 'bg-colorAction-ACTION text-white' : 'border-[2px]'}`}
                >
                    Web
                </span>
                <span
                    onClick={() => toggleTechnologies(true)}
                    className={`w-[50%] cursor-pointer p-2 rounded-full text-center text-colorAction-TITTLE ${showMobile ? 'bg-colorAction-ACTION text-white' : 'border-[2px]'}`}
                >
                    Móviles
                </span>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-4 sm:h-[350px]">
                {!showMobile ? (

                    <>

                        <div>
                            <span className="font-bold text-lg text-colorAction-TITTLE">
                                Backend
                            </span>
                            <div className="flex flex-wrap gap-6 w-[100%] mt-4">
                                {backendTechnologies.map((tech, index) => (
                                    <div className="flex flex-col items-center">
                                        <div key={index} className="p-2">
                                            <img src={tech.logo} alt="" className="w-20 h-20"/>
                                        </div>
                                        <span className="font-semibold mt-2">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-lg text-colorAction-TITTLE">
                                Frontend
                            </span>
                            <div className="flex flex-wrap gap-6 w-[100%] mt-4">
                                {frontendTechnologies.map((tech, index) => (
                                    <div className="flex flex-col items-center">
                                        <div key={index} className="p-2">
                                            <img src={tech.logo} alt="" className="w-20 h-20"/>
                                        </div>
                                        <span className="font-semibold mt-2">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>

                ) : (

                    <>

                        <div>
                            <span className="font-bold text-lg">Android</span>
                            <div className="flex flex-wrap gap-6 w-full mt-4">
                                {androidTechnologies.map((tech, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="p-2">
                                            <img src={tech.logo} alt="" className="w-20 h-20"/>
                                        </div>
                                        <span className="font-semibold mt-2">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-lg">Híbrido</span>
                            <div className="flex flex-wrap gap-6 w-full mt-4">
                                {mobileTechnologies.map((tech, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="p-2">
                                            <img src={tech.logo} alt="" className="w-20 h-20"/>
                                        </div>
                                        <span className="font-semibold mt-2">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </>

                )}
            </div>

        </>
    );
}

export default Technologies;
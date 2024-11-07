import React, { useState } from 'react'

interface Technology {
    nametech: string;
    logotech: string;
}


const Technologies: React.FC = () => {
    const [showMobile, setShowMobile] = useState(false);

    // Array de tecnologías de backend
    const backendTechnologies: Technology[] = [
        { name: 'Node JS', logo: '/Logo/Logo-NodeJS.png' },
        { name: 'Django', logo: '/Logo/Logo-NodeJS.png' },
        { name: 'Python', logo: '/Logo/Logo-NodeJS.png' },
        { name: 'Type Script', logo: '/Logo/Logo-NodeJS.png' },
        { name: 'Django REST', logo: '/Logo/Logo-NodeJS.png' },
    ];

    // Array de tecnologías de frontend
    const frontendTechnologies: Technology[] = [
        { name: 'React', logo: '/path/to/react-logo.png' },
        { name: 'Vite.js', logo: '/path/to/vue-logo.png' },
        { name: 'React', logo: '/path/to/vue-logo.png' },
        // Agrega más tecnologías según sea necesario
    ];

    // Array de tecnologías móviles
    const mobileTechnologies: Technology[] = [
        { name: 'React Native', logo: '/Logo/Logo-ReactNative.png' },
        { name: 'Flutter', logo: '/Logo/Logo-Flutter.png' },
    ];

    // Array de tecnologías android
    const androidTechnologies: Technology[] = [
        { name: 'Kotlin', logo: '/Logo/Logo-Kotlin.png' },
    ];

    // Función para alternar entre tecnologías web y móviles
    const toggleTechnologies = (isMobile: boolean) => {
        setShowMobile(isMobile);
    };

    return (
        <>

            <div className='flex justify-between gap-2 items-center mt-10 text-xl font-semibold'>
                <span
                    onClick={() => toggleTechnologies(false)}
                    className={`w-[50%] cursor-pointer p-2 rounded-full text-center ${!showMobile ? 'bg-indigo-600 text-white' : 'border-[1px]'}`}
                >
                    Web
                </span>
                <span
                    onClick={() => toggleTechnologies(true)}
                    className={`w-[50%] cursor-pointer p-2 rounded-full text-center ${showMobile ? 'bg-indigo-600 text-white' : 'border-[1px]'}`}
                >
                    Móviles
                </span>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-4 sm:h-[350px]'>
                {!showMobile ? (

                    <>

                        <div className=''>
                            <span className='font-bold text-lg'>
                                Backend
                            </span>
                            <div className='flex flex-wrap gap-6 w-[100%] mt-4'>
                                {backendTechnologies.map((tech, index) => (
                                    <div className='flex flex-col items-center'>
                                        <div key={index} className='bg-red-400 p-3'>
                                            <img src={tech.logo} alt="" className='w-20 h-20' />
                                        </div>
                                        <span className='font-semibold mt-2'>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=''>
                            <span className='font-bold text-lg'>
                                Frontend
                            </span>
                            <div className='flex flex-wrap gap-6 w-[100%] mt-4'>
                                {frontendTechnologies.map((tech, index) => (
                                    <div className='flex flex-col items-center'>
                                        <div key={index} className='bg-red-400 p-3'>
                                            <img src={tech.logo} alt="" className='w-20 h-20' />
                                        </div>
                                        <span className='font-semibold mt-2'>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>

                ) : (

                    <>

                        <div className=''>
                            <span className='font-bold text-lg'>Android</span>
                            <div className='flex flex-wrap gap-6 w-full mt-4'>
                                {androidTechnologies.map((tech, index) => (
                                    <div key={index} className='flex flex-col items-center'>
                                        <div className='bg-red-400 p-3'>
                                            <img src={tech.logo} alt="" className='w-20 h-20'/>
                                        </div>
                                        <span className='font-semibold mt-2'>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=''>
                            <span className='font-bold text-lg'>Multiplataforma</span>
                            <div className='flex flex-wrap gap-6 w-full mt-4'>
                                {mobileTechnologies.map((tech, index) => (
                                    <div key={index} className='flex flex-col items-center'>
                                        <div className='bg-red-400 p-3'>
                                            <img src={tech.logo} alt="" className='w-20 h-20'/>
                                        </div>
                                        <span className='font-semibold mt-2'>{tech.name}</span>
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
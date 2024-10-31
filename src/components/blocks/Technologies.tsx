import React from 'react'

interface Technology {
    nametech: string;
    logotech: string;
}


const Technologies: React.FC<TechnologiesProps> = () => {

    // Array de tecnologías de backend
    const backendTechnologies: Technology[] = [
        { name: 'Node.js', logo: '' },
        { name: 'Django', logo: '' },
        { name: 'Python', logo: '' },
        { name: 'Type Script', logo: '' },
    ];

    // Array de tecnologías de frontend
    const frontendTechnologies: Technology[] = [
        { name: 'React', logo: '/path/to/react-logo.png' },
        { name: 'Vite.js', logo: '/path/to/vue-logo.png' },
        { name: 'React', logo: '/path/to/vue-logo.png' },
        // Agrega más tecnologías según sea necesario
    ];

    return (
        <>

        <div className='flex justify-between items-center mt-10 bg-yellow-500 text-xl font-semibold'>
            <span className='w-[50%] bg-slate-400 text-center p-2 rounded-full'>Tecnologías Web</span>
            <span className='w-[50%] ml-2 bg-slate-400 text-center p-2 rounded-full'>Tecnologías Móviles</span>
        </div>

        <div className='flex justify-between mt-4'>
            <div className='w-[48%]'>
                <span className='font-bold text-lg'>
                    Backend
                </span>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    {backendTechnologies.map((tech, index) => (
                        <div className='bg-green-300'>
                            <div key={index} className='bg-red-400'>
                                <img src={tech.logo} alt="" className='w-8 h-8 mr-2' />
                            </div>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-[48%]'>
                <span className='font-bold text-lg'>
                    Frontend
                </span>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    {frontendTechnologies.map((tech, index) => (
                        <div>
                            <div key={index} className='bg-red-400'>
                                <img src={tech.logo} alt="" className='w-8 h-8 mr-2' />
                            </div>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </>
    );
}

export default Technologies;
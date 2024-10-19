import React from 'react';
interface EquipoProps {
    tittle: string;
    description: string;
    name: string;
    cargo: string;
    img: string;
    conocimientos: string;
}

const Equipo: React.FC<EquipoProps> = ({ tittle, description, name, cargo, img, conocimientos }) => {
    return (
        <div className=''>
            <div className='mt-4'>
                <h2 className='text-3xl text-stone-800 opacity-90 font-bold'>{tittle}</h2>
                <p className='mt-4'>{description}</p>
            </div>

            <div className='bg-colorCard mt-5 p-2'>

                <div className='flex'>
                    <div>
                        <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
                    </div>
                    <div className='ml-2'>
                        <h2 className='text-stone-800 opacity-90 font-bold'>{name}</h2>
                        <p className='text-stone-800 opacity-80'>{cargo}</p>
                    </div>
                </div>
                <div className='mt-1'>
                    <p className='text-stone-800 opacity-80'>{conocimientos}</p>
                </div>

            </div>

        </div>
    );
}

export default Equipo;
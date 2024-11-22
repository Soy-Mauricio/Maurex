import React from 'react';
interface EquipoProps {
    name: string;
    cargo: string;
    img: string;
    icon: string;
    conocimientos: string;
}

const Equipo: React.FC<EquipoProps> = ({name, cargo, img, icon, conocimientos }) => {
    return (
        <div className='mt-12 p-2 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] sm:w-[40%] transition ease-in-out delay-150 hover:-translate-y-1 duration-300 cursor-pointer will-change-transform'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div>
                        <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
                    </div>
                    <div className='ml-2'>
                        <h2 className='text-stone-800 opacity-90 font-bold'>{name}</h2>
                        <p className='text-stone-800 opacity-80'>{cargo}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-[30px] p-1 rounded-full' src={icon} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-1'>
                <p className='text-stone-800 opacity-80'>{conocimientos}</p>
            </div>
        </div>
    );
}

export default Equipo;
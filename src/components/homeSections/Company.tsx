import React from 'react';
interface EquipoProps {
    name: string;
    cargo: string;
    img: string;
    location: string;
    flag: string
    conocimientos: string;
}

const Equipo: React.FC<EquipoProps> = ({name, cargo, img, location, flag, conocimientos}) => {
    return (
        <div className="container mx-auto px-6 sm:w-[400px] flex justify-center items-center"> {/* Margen entre cartas */}
            <div className="mb-10 sm:mb-0 flex flex-col justify-center items-center bg-slate-50 sm:p-10 rounded-lg  mx-auto sm:h-[500px] h-auto shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-transform duration-700 hover:scale-105 will-change-transform backface-visibility-hidden cursor-pointer">
                <div className="flex justify-center items-center mb-2">
                    <img className="sm:mt-0 mt-3 w-[100px]" src={img} alt="Flag" />
                </div>
                <p className="text-xl italic">{name}</p>
                <div className="flex items-center">
                    <p className="text-black opacity-85 italic">{location}</p>
                    <img className="w-5 ml-2" src={flag} alt="" />
                </div>
                <div className="sm:mt-10 text-center sm:p-0 p-4">
                    <p className="font-semibold text-xl">{cargo}</p>
                    <p className="text-black opacity-85 italic">{conocimientos}</p>
                    <div className="flex justify-center items-center mt-4 text-xl text-colorAction-ACTION">
                        <p>★ ★ ★ ★ ★</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipo;
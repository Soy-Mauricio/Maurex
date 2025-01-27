import React from 'react';
interface ServicesWebProps {
    img: string;
    service: string;
    text: string;
}

const ServicesWeb: React.FC<ServicesWebProps> = ({img, service, text}) => {
    return (
        <div className="mx-auto sm:w-[275px] w-[250px] flex justify-center items-center"> {/* Margen entre cartas */}
            <div className="flex flex-col justify-center items-center bg-slate-50 p-4 rounded-lg  mx-auto h-[400px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-transform duration-700 hover:scale-105 will-change-transform backface-visibility-hidden cursor-pointer">
                <div className="h-[50%]">
                    <div className="mb-4 mt-10">
                        <img className=" w-[125px]" src={img} alt="Flag" />
                    </div>
                </div>
                <div className="h-[50%]">
                    <div className="mb-4 text-center">
                        <p className="text-xl italic font-medium">{service}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-black italic">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesWeb;
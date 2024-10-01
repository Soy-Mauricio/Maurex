import React from 'react';
import ImagenesBlocks from './ImagenesBlocks';
interface ServiceBlockProps {
    icon: string;
    title: string;
    description: string;
    isFirst?: boolean; // Nueva propiedad opcional para identificar si es el primero
}

const ServiceBlocks: React.FC<ServiceBlockProps> = ({ icon, title, description, isFirst }) => {
    return (
        <div className={`mt-8 ${isFirst ? 'sm:mt-0' : ''}`}>
          <div className='font-bold text-stone-800 opacity-90 flex items-center'>
            <img className='w-[30px] mr-2 bg-blue-100 p-2 rounded-2xl' src={icon} alt='' />
            <h1>{title}</h1>
          </div>
          <div className='mt-2'>
            <p className='opacity-60'>{description}</p>
            <ImagenesBlocks/>
          </div>
        </div>
    );
}

export default ServiceBlocks;
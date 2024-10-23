import React from 'react';
import ImagenesBlocks from './ImagenesBlocks';
interface ServiceBlockProps {
    title: string;
    description: string;
    icons: string;
    isFirst?: boolean; // Nueva propiedad opcional para identificar si es el primero
}

const ServiceBlocks: React.FC<ServiceBlockProps> = ({title, description, icons, isFirst }) => {
    return (
      <div className={`sm:flex items-center justify-around mt-12 ${isFirst ? 'sm:mt-0' : ''}`}>
        <div className='sm:w-[50%] sm:h-[60vh] mt-5 sm:mt-0'>
          <ImagenesBlocks/>
        </div>
        <div className='text-white flex items-start sm:w-[40%] h-auto'>
          <div className='h-auto'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='text-lg opacity-85 mt-2'>{description}</p>
            <div className='mt-14 flex items-center'>
              <a className='cursor-pointer' href="">VER MÁS</a>
              <img className='w-[22px] ml-2' src={icons} alt="Siguiente" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ServiceBlocks;
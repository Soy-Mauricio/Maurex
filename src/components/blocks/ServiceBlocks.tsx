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
      <div className={`sm:flex items-center justify-evenly mt-12 ${isFirst ? 'sm:mt-0' : ''}`}>
        <div className=' text-white flex items-start sm:w-[50%]'>
          <img className='w-[30px] mr-2 bg-yellow-500 p-2 rounded-2xl' src={icon} alt='' />
          <div className='sm:w-[80%]'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <p className='font-medium opacity-85'>{description}</p>
          </div>
        </div>
        <div className='sm:w-[40%] sm:h-[40vh] mt-5 sm:mt-0'>
          <ImagenesBlocks/>
        </div>
      </div>
    );
}

export default ServiceBlocks;
import React from 'react';

interface ServiceBlockProps {
    icon: string;
    title: string;
    description: string;
    isFirst?: boolean; // Nueva propiedad opcional para identificar si es el primero
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ icon, title, description, isFirst }) => {
    return (
        <div className={`mt-5 ${isFirst ? 'sm:mt-0' : ''}`}>
          <div className='font-bold text-stone-800 opacity-90 flex items-center'>
            <img className='w-[30px] mr-2 bg-blue-100 p-2 rounded-2xl' src={icon} alt='' />
            <h3>{title}</h3>
          </div>
          <div className='mt-2 opacity-60'>
            <p>{description}</p>
          </div>
        </div>
    );
}

export default ServiceBlock;
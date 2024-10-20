import React from 'react'

interface OurServicesProps {
    img: string;
    title: string;
    description: string;
    number: number;
}

const OurServices: React.FC<OurServicesProps> = ({ img, title, description, number }) => {

  const isEven = number % 2 === 0;
  const isTwoOrFour = number === 2 || number === 4;

  return (
    <div className='mt-2'>
      <div className='flex'>
        <div className="sm:flex items-center justify-around">
          <div className={`sm:w-[50%] sm:flex flex ${isEven ? 'order-1' : 'order-2'}`}>
            <div className={`${isTwoOrFour ? 'sm:text-end' : ''}`}>
              <h1 className='font-bold text-xl opacity-80'>{title}</h1>
              <h3 className='font-medium opacity-65'>{description}</h3>
            </div>
          </div>
          <div className={`mt-5 sm:w-[30%] ${isEven ? 'order-2' : 'order-1'}`}>
            <img className='h-full w-full object-cover object-center' src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
import React from 'react'

interface OurServicesProps {
    img: string;
    title: string;
    description: string;
    number: number;
}

const OurServices: React.FC<OurServicesProps> = ({ img, title, description, number }) => {
  return (
    <div className='mt-10'>
      <ul className='pl-10 border-[1px] border-stone-200'>
        <li className='flex relative items-start'>
          <div className='rounded-full border-[1px] border-stone-200 h-[25px] w-[25px] flex items-center justify-center absolute left-[-40px] transform -translate-x-1/2 font-bold'>
            {number}
          </div>
          <div className=''>
            <div className="flex-col items-center">
              <div>
                <h1 className='font-bold text-stone-800 opacity-90'>{title}</h1>
                <h3>{description}</h3>
              </div>
              <div className='mt-5'>
                <img className='h-full w-full object-cover' src={img} alt="" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OurServices;
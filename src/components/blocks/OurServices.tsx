import React from 'react'

interface OurServicesProps {
    icon: string;
    title: string;
    description: string;
    number: number;
}

const OurServices: React.FC<OurServicesProps> = ({ icon, title, description, number }) => {
  return (
    <div className="bg-red-400 mt-10">
      <ul className='pl-10'>
        <li className='flex relative items-start'>
          <div className='rounded-full border-s border-stone-500 h-[25px] w-[25px] flex items-center justify-center absolute left-[-40px] transform -translate-x-1/2 font-bold'>
            {number}
          </div>
          <div className='mb-40'>
            <div className="flex-col items-center">
              <div>
                <h1 className='font-bold text-stone-800 opacity-90'>{title}</h1>
                <h3>{description}</h3>
              </div>
              <div>
                <img className="w-[30px] mr-2 bg-blue-100 p-2 rounded-2xl" src={icon} alt="" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OurServices;
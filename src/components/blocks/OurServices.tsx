import React from 'react'

interface OurServicesProps {
    title: string;
    description: string;
    icon: string;
    number: number;
}

const OurServices: React.FC<OurServicesProps> = ({title, description, number, icon}) => {

    return (

      <div className={`${number !== 4 ? 'mb-6' : ''} bg-slate-50 border-b-[1px] hover:border-b-indigo-500 h-[200px] flex items-center justify-center flex-col cursor-pointer group`}>
        <div className='flex items-center h-auto'>
          <a className='h-[100%] p-5'>
            <span className='flex items-center justify-between gap-8 relative'>
              <h5 className='font-semibold text-xl opacity-80 w-[30%]'>{title}</h5>
              <p className='font-medium opacity-70 w-[70%] transition-all duration-200 ease-in-out group-hover:scale-75 group-hover:opacity-0'>{description}</p>
              <span className='absolute left-[80%] transition-all duration-300 ease-in-out transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-300 flex items-center justify-center'>
                <span className='invertir-colores border-[1px] border-indigo-500 p-6 rounded-full  hover:bg-indigo-500'>
                  <img className='w-[20px]' src={icon} alt="siguiente" />
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>

    );
}

export default OurServices;
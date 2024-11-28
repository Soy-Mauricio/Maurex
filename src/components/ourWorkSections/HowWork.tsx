import React from 'react'

interface HowWorkProps {
    title: string;
    description: string;
    number: number;
}

const HowWork: React.FC<HowWorkProps> = ({title, description, number}) => {

    return (

      <div className='mt-10'>
        <div className='flex items-center font-semibold text-xl'>
            <p className='mr-1 border-[1px] border-black rounded-full w-[35px] h-[35px] flex items-center justify-center'>{number}</p>
            <h4>{title}</h4>
        </div>
        
        <div className=' p-5 flex justify-center items-center'>
            <div className='italic border-l-[1px] border-black mt-2 text-xl'>
                <p className='ml-2'>{description}</p>
            </div>
        </div>
      </div>

    );
}

export default HowWork;
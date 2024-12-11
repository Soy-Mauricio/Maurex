import React from 'react'

interface HowWorkProps {
    title: string;
    description: string;
    number: number;
    img: string;
}

const HowWork: React.FC<HowWorkProps> = ({title, description, number, img}) => {

    return (

      <div className='mt-10'>
        <div className='flex items-center font-semibold text-xl'>
            <p className='mr-1 border-[1px] border-black rounded-full w-[35px] h-[35px] flex items-center justify-center'>{number}</p>
            <h4>{title}</h4>
        </div>
        
        <div className=' p-5 flex flex-col justify-center items-center'>
            <div className='italic border-l-[1px] border-black mt-2 text-xl'>
                <p className='ml-2'>{description}</p>
            </div>
            <div className='mt-8'>
                <img className='w-[300px] h-[300px]' src={img} alt="" />
            </div>
        </div>
      </div>

    );
}

export default HowWork;
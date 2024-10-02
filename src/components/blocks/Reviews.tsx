import React from 'react';

interface ReviewsProps {
    img: string;
    description: string;
    isFirst?: boolean; // Nueva propiedad opcional para identificar si es el primero
}

const Reviews: React.FC<ReviewsProps> = ({ img, description, isFirst }) => {
    return (
        <div className={`mt-10 bg-colorCard/50 h-auto rounded-lg ${isFirst ? 'sm:mt-0' : ''}`}>
            <div className='p-2 flex justify-center'>
                <div className='mt-4 w-[40%] h-[110px] rounded-full bg-slate-500'>
                    <img className='w-[100%] h-[100%] rounded-full' src={img} alt="" />
                    <div className='flex justify-center mt-2'>
                        <h2 className='font-bold text-stone-800'>VueloYA</h2>
                    </div>
                </div>
            </div>
            <div className='p-2 mt-8'>
                <p className='text-center mb-4'>{description}</p>
            </div>
        </div>
    );
}

export default Reviews;
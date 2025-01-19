import React from 'react'
import { Link } from 'react-router-dom';

interface PortfolioProps {
    title: string;
    description: string;
    button: string;
    img: string;
}

const PortfolioWeb: React.FC<PortfolioProps> = ({title, description, button, img}) => {

    return (

        <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col w-[50%]">
                <div className="flex">
                    <h3 className="text-4xl font-semibold ">{title}</h3>
                </div>

                <div className="mt-10">
                    <p className="text-lg opacity-75">{description}</p>
                </div>

                <button className="mt-10 bg-black text-white w-[160px] transform transition-transform duration-700 hover:scale-105 will-change-transform backface-visibility-hidden">
                    <Link to='/view-more'
                    className="text-lg flex justify-center p-2"> {button}
                    </Link>
                </button>
            </div>

            <div className="flex justify-center mt-10 w-[60%] ml-12">
                <img className="h-[500px] w-full object-cover" src={img} alt="" />
            </div>
        </div>

    );
}

export default PortfolioWeb;
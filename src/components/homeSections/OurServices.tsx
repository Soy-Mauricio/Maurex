import React from 'react'
import { Link } from 'react-router-dom';

interface OurServicesProps {
  title: string;
  description: string;
  icon: string;
  number: number;
  link: string;
}

const OurServices: React.FC<OurServicesProps> = ({title, description, number, link, icon}) => {

  return (
    <div className={`${number !== 4 ? "mb-6" : ""} bg-slate-50 border-b-[1px] border-stone-400 hover:border-b-colorAction-ACTION h-[200px] flex items-center justify-center flex-col cursor-pointer group`}>
      <div className="flex items-center h-auto">
        <Link className="h-auto p-5" to={link}>
          <span className="sm:flex sm:items-center sm:justify-between relative">
            <h5 className="font-semibold text-xl text-colorAction-TITTLE sm:w-[30%] sm:mb-0 mb-2">{title}</h5>
            <p className="opacity-70 sm:w-[70%] sm:transition-all sm:duration-200 sm:ease-in-out sm:group-hover:scale-75 sm:group-hover:opacity-0">{description}</p>
            <span className="absolute left-[80%] transition-all duration-300 ease-in-out transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-300 flex items-center justify-center">
              <span className="invertir-colores border-[1px] border-colorAction-ACTION p-6 rounded-full  hover:bg-colorAction-ACTION sm:flex hidden">
                <img className="w-[20px]" src={icon} alt="siguiente" />
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
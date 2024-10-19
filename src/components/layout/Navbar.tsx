import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='max-w-[1200px] w-full mx-auto'>
      <div className='flex justify-between items-center relative sm:mx-8'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold cursor-pointer'>
          <a href="">MAU</a><a className='text-yellow-400 transition-all duration-700' href="">REX</a>
        </div>

        {/* Botón del menú hamburguesa */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <img className='w-[28px]' src="/public/Icons/menu-hamburguesa.png" alt="Open Icon" />
          </button>
        </div>

        {/* Menú de navegación */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-indigo-600 md:bg-transparent md:relative md:flex md:items-center md:justify-end z-50 transform transition-transform duration-700 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className='flex flex-col md:flex-row md:space-x-8 items-center justify-center h-full'>
            <div className='flex items-center justify-center w-[auto] mb-4 md:mb-0'>
              <a href="#" className='text-white text-xl md:text-lg hover:text-slate-300 transition-all duration-700'>
                Nosotros
                <img className='w-[15px] h-[14px] ml-1 md:hidden inline-block' src="/public/Icons/angulo-derecho.png" alt="" />
                </a>

            </div>
            <div className='flex items-center justify-center w-[auto] mb-4 md:mb-0'>
              <a href="#" className="text-white text-xl md:text-lg hover:text-slate-300 transition-all duration-700">
                Servicios
                <img className='w-[15px] h-[14px] ml-1 md:hidden inline-block' src="/public/Icons/angulo-derecho.png" alt="" />
                </a>

            </div>
            <div className='flex items-center justify-center w-[auto]'>
              <a href="#" className="text-white text-xl md:text-lg hover:text-slate-300 transition-all duration-700">
                Contacto
                <img className='w-[15px] h-[14px] ml-1 md:hidden inline-block' src="/public/Icons/angulo-derecho.png" alt="" />
                </a>
            </div>
          </div>

          {/* Botón para cerrar el menú en pantallas pequeñas */}
          {isOpen && (
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white md:hidden">
              <img className='w-[25px]' src="/public/Icons/cruz.png" alt="Close Icon"/>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
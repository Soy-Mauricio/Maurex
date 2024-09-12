import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <>
        <header className='bg-slate-900 p-4 flex justify-between'>
          <img className='sm:w-[50px] w-[30px] cursor-pointer' src="/public/Img/Gato.jpg" alt="Logo" />
          <Navbar />
        </header>
    </>
  )
}

export default Header;

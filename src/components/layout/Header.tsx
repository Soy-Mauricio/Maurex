import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <>
        <header className='bg-indigo-600 p-4 flex justify-between'>
          <Navbar />
        </header>
    </>
  )
}

export default Header;
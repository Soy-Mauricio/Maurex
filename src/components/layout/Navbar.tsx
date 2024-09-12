import React from 'react'

const Navbar: React.FC = () => {
  return (

    <nav className='flex justify-between'>
        <>

            <ul className='nav-links text-white bg-blue-700 items-center hidden sm:flex sm:justify-between text-[18px] sm:w-[400px]'>
                <li><a href="/about">Nosotros</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>

            <img className='w-[25px] cursor-pointer sm:hidden' src="/public/Icons/menu-hamburguesa.png" alt="" />

        </>
    </nav>

  )
}

export default Navbar

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='relative w-full bg-stone-100'>

      <div className='grid mt-14 gap-4 p-4 max-w-[1200px] w-full mx-auto h-[auto]'>
        {/* Columnas individuales */}
        <div className='flex flex-col lg:flex-row justify-around items-start space-y-6 lg:space-y-0'>
          <div>
            <h2 className='font-bold text-stone-800 opacity-90'>CONTACTANOS</h2>
            <ul className='text-stone-800 opacity-50'>
              <li className='mt-4'>
                <a className='font-medium' href="">+57 3227863768</a>
                <p className='text-xs'>Celular</p>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">maurex@gmail.com</a>
                <p className='text-xs'>Correo</p>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Villavicencio - Colombia</a>
                <p className='text-xs'>Dirección</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-stone-800 opacity-90'>MAUREX</h2>
            <ul className='text-stone-800 opacity-50'>
              <li className='mt-4'>
                <a className='font-medium' href="">Sobre Nosotros</a>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Servicios</a>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Proyectos</a>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Nuestro Equipo</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-stone-800 opacity-90'>Redes Sociales</h2>
            <ul className='text-stone-800 opacity-50'>
              <li className='mt-4'>
                <a className='font-medium' href="">Instagram</a>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Twitter</a>
              </li>
              <li className='mt-4'>
                <a className='font-medium' href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className='mt-4 bg-black opacity-10 h-[2px]' />

        <div>
          <p className='text-center font-bold text-stone-800 opacity-80'>
            © 2024 MAUREX DERECHOS RESERVADOS.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

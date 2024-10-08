import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='relative w-full'>

      <div className='grid mt-14 gap-4 p-4 '>
        {/* Columnas individuales */}
        <div>
          <h2 className='font-bold text-stone-800 opacity-90'>TECNOLOGÍAS</h2>
          <div><img src="" alt="" /></div>
        </div>

        <div className='mt-4'>
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

        <div className='mt-4'>
          <h2 className='font-bold text-stone-800 opacity-90'>MAUREX</h2>
          <ul className='text-stone-800 opacity-50'>
            <li className='mt-4'>
              <a className='font-medium' href="">Sobre Nosotros</a>
            </li>
            <li className='mt-4'>
              <a className='font-medium' href="">Nuestro Equipo</a>
            </li>
            <li className='mt-4'>
              <a className='font-medium' href="">Proyectos</a>
            </li>
          </ul>
        </div>

        <div className='mt-4'>
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

        <hr />

        <div>
          <p className='text-center'>
            © 2024 MAUREX DERECHOS RESERVADOS.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;

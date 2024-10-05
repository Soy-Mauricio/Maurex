import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='relative w-full'>
      {/* Contenedor grid que tiene 2 columnas en pantallas pequeñas y 4 en pantallas grandes */}
      <div className='grid grid-cols-2 md:grid-cols-4 mt-14 gap-4 p-4 justify-center mx-auto'>
        {/* Columnas individuales */}
        <div>
          <div>Columna 1</div>
        </div>
        <div>
          <div>Columna 2</div>
        </div>
        <div>
          <div>Columna 3</div>
        </div>
        <div>
          <div>Columna 4</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

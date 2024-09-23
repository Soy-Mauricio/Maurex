import { useState, useEffect } from 'react';

import BiciUno from '/Proyecto Mauro/Maurex/public/Img/BiciUno.jpg';
import BiciDos from '/Proyecto Mauro/Maurex/public/Img/BiciDos.jpg';
import BiciTres from '/Proyecto Mauro/Maurex/public/Img/BiciTres.jpg';

const ImagenesBlocks: React.FC = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagenes = [BiciUno, BiciDos, BiciTres];

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagenes.length);
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <div className='sm:w-[50%] h-[50vh] mt-5 sm:mt-0'>
      <img className='h-full w-full object-cover rounded' src={imagenes[currentImageIndex]} alt="" />
    </div>
  )
}

export default ImagenesBlocks

import { useState, useEffect } from 'react';

import BiciUno from '../../assets/Img/BiciUno.jpg';
import BiciDos from '../../assets/Img/BiciDos.jpg';
import BiciTres from '../../assets/Img/BiciTres.jpg';

const ImagenesBlocks: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagenes = [BiciUno, BiciDos, BiciTres];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagenes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <>
      <img
        className='h-full w-full object-cover object-center rounded'
        src={imagenes[currentImageIndex]}
        alt="Imagen de bicicleta"
      />
    </>
  );
}

export default ImagenesBlocks;


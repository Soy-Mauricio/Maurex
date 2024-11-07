import { useState, useEffect } from 'react';

import BiciUno from '/Img/BiciUno.jpg';
import BiciDos from '/Img/BiciDos.jpg';
import BiciTres from '/Img/BiciTres.jpg';

const ImagenesBlocks: React.FC = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagenes = [BiciUno, BiciDos, BiciTres];

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagenes.length);
    }, 6000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <>
      <img className='h-full w-full object-cover object-center rounded' src={imagenes[currentImageIndex]} alt="" />
    </>
  )
}

export default ImagenesBlocks

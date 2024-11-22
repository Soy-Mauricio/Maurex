import React from 'react';
import Slider from 'react-slick'; // Importa Slider desde react-slick
import ImagenesBlocks from './ImagenesBlocks';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Slide {
    title: string;
    description: string;
    icons: string;
    logos: string;
}


const slidesData: Slide[] = [
  {
    title: "VueloYA",
    description: "VueloYA es una aplicación de compra de tiquetes aéreos diseñada y desarrollada por Maurex para facilitar el proceso de búsqueda y reserva de vuelos nacionales e internacionales. El objetivo principal era crear una solución accesible y eficiente para los usuarios, permitiendo una experiencia de reserva rápida, sin fricciones y con opciones de filtrado personalizadas.",
    icons: "assets/Icons/angulo-pequeno-derecha.png",
    logos: "Hola"
  },
  {
    title: "Plastisol",
    description: "Plastisol es una plataforma de venta de productos plásticos diseñada y desarrollada por Maurex para simplificar el proceso de búsqueda y cotización. Nuestro objetivo principal es ofrecer una solución accesible y eficiente para los usuarios, permitiendo una experiencia de compra rápida, sin complicaciones y con opciones de cotización personalizadas.",
    icons: "assets/Icons/angulo-pequeno-derecha.png",
    logos: "Bye"
  },
  // Puedes añadir más slides aquí
];


const ServiceBlocks: React.FC = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 3000, // Velocidad de transición
    slidesToShow: 1, // Cuántos slides mostrar a la vez
    slidesToScroll: 1, // Cuántos slides desplazar al hacer clic
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad del autoplay
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className='container group mb-10'>
          <div className="sm:flex items-center justify-around">
            <div className="sm:w-[50%] sm:h-[60vh] mt-5 sm:mt-0">
              <ImagenesBlocks />
            </div>
            <div className="text-white flex items-start sm:w-[40%] h-auto">
              <div className="h-auto sm:p-0 p-4">
                <h1 className="font-bold text-2xl sm:mt-0 mt-6">{slide.title}</h1>
                <p className="text-lg opacity-85 mt-2">{slide.description}</p>
                <div className="mt-6 sm:mt-14 flex items-center sm:transition-all sm:duration-300 sm:ease-in-out sm:transform sm:translate-x-[-20px] sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
                  <a className="cursor-pointer border-b-[1px] border-transparent hover:border-white w-[70px] transition-all duration-500" href="#">
                    VER MÁS
                  </a>
                  <img className="w-[22px]" src={slide.icons} alt="Siguiente" />
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </Slider>
  );
};

export default ServiceBlocks;
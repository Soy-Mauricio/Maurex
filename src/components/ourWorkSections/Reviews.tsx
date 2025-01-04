import React from 'react';
import Slider from 'react-slick'; // Importa Slider desde react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Reviews {
    description: string;
    company: string;
    user: string;
    flag: string;
    location: string;
    punctuation: string;
}

const reviewsData: Reviews[] = [
    {
        description: "Trabajar con Maurex fue una experiencia excepcional; su equipo entendió nuestras necesidades y aportó mejoras clave, logrando que Plastisol tenga una plataforma funcional que conecta mejor con nuestros clientes.",
        company: "Plastisol",
        user: "Daniel Camargo, Admin",
        flag: "/assets/Img/Colombia.png",
        location: "Villavicencio, Colombia",
        punctuation: "5.0",
    },
    {
        description: "Trabajar con Maurex fue una experiencia excepcional...",
        company: "VueloYA",
        user: "Sena, Instituto",
        flag: "/assets/Img/Colombia.png",
        location: "Cundinamarca, Colombia",
        punctuation: "5.0",
    },
    {
        description: "Trabajar con Maurex fue una experiencia excepcional...",
        company: "Maurex",
        user: "Sena, Instituto",
        flag: "/assets/Img/Colombia.png",
        location: "Villavicencio, Colombia",
        punctuation: "5.0",
    },
];

const Reviews: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        centerPadding: "50px",
        responsive: [
            {
                breakpoint: 768, // Ancho de pantalla en el que se aplica la configuración
                settings: {
                    slidesToShow: 1, // Mostrar solo 1 carta en pantallas pequeñas
                    centerPadding: "0px", // Elimina el padding lateral en pantallas pequeñas
                },
            },
        ],
    };

    return (
        <>
            <div className="container mx-auto ">
                <Slider {...settings}>
                    {reviewsData.map((review, index) => (
                        <div key={index} className="px-4 mb-10">
                            <div className="flex flex-col justify-center items-center bg-slate-50 p-5 sm:p-10 rounded-lg shadow-md sm:w-[80%] mx-auto sm:h-[500px] h-[550px]">
                                <p className="sm:text-xl text-lg text-center sm:text-start">"{review.description}"</p>
                                <div className="mt-10 text-center">
                                    <p className="font-semibold text-xl">{review.company}</p>
                                    <p className="text-black opacity-85 italic">{review.user}</p>
                                    <div className="flex justify-center items-center mt-4">
                                        <img className="mr-2 w-5" src={review.flag} alt="Flag" />
                                        <p className="text-black opacity-85">{review.location}</p>
                                    </div>
                                    <div className="flex justify-center items-center mt-4 text-xl text-colorAction-ACTION">
                                        <p className="mr-2 font-semibold">{review.punctuation}</p>
                                        <p>★ ★ ★ ★ ★</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Reviews;

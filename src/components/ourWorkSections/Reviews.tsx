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
        user: "Laura Gómez, CEO",
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
        slidesToShow: 2, // Cuántas cartas mostrar a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true, // Centrado
        centerPadding: "50px", // Espaciado lateral
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <Slider {...settings}>
                    {reviewsData.map((review, index) => (
                        <div key={index} className="px-4 mb-10"> {/* Margen entre cartas */}
                            <div className="flex flex-col justify-center items-center bg-slate-50 p-10 rounded-lg shadow-md w-[80%] mx-auto h-[500px]">
                                <p className="text-xl">"{review.description}"</p>
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

import { useState, useEffect } from "react";

interface Section {
  id: number;
  tittle: string;
  text: string;
  image: string;
}

const ImageTextSync: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const textSections: Section[] = [
    { id: 0, tittle: "DESAFÍO", text: "Desarrollar VueloYA fue un reto que requirió enfrentar diversos desafíos. Desde la creación de una plataforma intuitiva para un mercado competitivo hasta la integración de múltiples funcionalidades, como la gestión de reservas y la optimización de precios, hubo que encontrar soluciones innovadoras. Uno de los mayores retos fue ofrecer una experiencia de usuario fluida y rápida, especialmente en un entorno móvil, donde la accesibilidad y la facilidad de uso son esenciales. A pesar de estos obstáculos, logramos crear una app eficiente y fácil de usar, que ofrece a los usuarios una experiencia única en la compra de tiquetes de vuelo.", image: "/src/assets/Img/ImgUno.jpg" },
    { id: 1, tittle: "SOLUCIÓN", text: "Frente a los desafíos de desarrollar VueloYA, adoptamos un enfoque centrado en la innovación y la eficiencia. Simplificamos procesos complejos con una interfaz amigable que guía al usuario paso a paso. Para garantizar velocidad y precisión, utilizamos herramientas tecnológicas avanzadas y establecimos conexiones seguras con proveedores de vuelos. Además, realizamos pruebas constantes para mejorar el rendimiento y la usabilidad de la app. Estas soluciones nos permitieron transformar una idea en una plataforma que resuelve necesidades reales de nuestros usuarios.", image: "/src/assets/Img/ImgDos.jpg" },
    { id: 2, tittle: "IMPACTO", text: "VueloYA ha marcado un antes y un después en la manera en que las personas buscan y reservan vuelos. Al simplificar procesos y ofrecer una experiencia intuitiva, hemos logrado hacer más accesible y eficiente la planificación de viajes. Nuestro enfoque en la innovación ha reducido el tiempo de búsqueda y ha democratizado el acceso a tarifas competitivas. Además, hemos generado un impacto positivo al transformar un mercado saturado y poco intuitivo en una solución moderna que conecta a los usuarios con sus destinos soñados de manera fácil y confiable.", image: "/src/assets/Img/ImgTres.jpg" },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLDivElement>(".text-section");

    let newActiveIndex = activeIndex;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        newActiveIndex = index;
      }
    });

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="flex">
      {/* Image Section */}
      <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center bg-gray-200 overflow-hidden">
        <img
          src={textSections[activeIndex].image}
          alt={`Image ${activeIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 space-y-16 px-8">
        {textSections.map((section) => (
          <div
            key={section.id}
            className="text-section h-screen flex flex-col items-start justify-center p-10"
          >
            <h2 className="text-2xl font-bold mb-4">{section.tittle}</h2>
            <p className="text-xl max-w-[500px]">{section.text}</p>
          </div>
        ))}

        <div className='flex justify-center'>
          <button
            className='border-[1px] border-black p-5 rounded-full mb-20 invertir-colores hover:bg-black hover:-translate-y-2 transition-transform duration-500'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
          <img className="w-[28px]" src="/public/assets/Icons/angulo-arriba.png" alt="" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImageTextSync;

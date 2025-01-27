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
    { id: 0, tittle: 'DESAFÍO', text: 'Desarrollar VueloYA fue un reto que requirió enfrentar diversos desafíos...', image: '/src/assets/Img/ImgUno.jpg'},
    { id: 1, tittle: 'SOLUCIÓN', text: 'Frente a los desafíos de desarrollar VueloYA, adoptamos un enfoque centrado...', image: '/src/assets/Img/ImgDos.jpg'},
    { id: 2, tittle: 'IMPACTO', text: 'VueloYA ha marcado un antes y un después en la manera en que las personas buscan...', image: '/src/assets/Img/ImgTres.jpg'},
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
    <div className="flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen sticky top-0 flex items-center justify-center bg-gray-200 overflow-hidden">
        <img
          src={textSections[activeIndex].image}
          alt={`Image ${activeIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-16 px-8">
        {textSections.map((section) => (
          <div
            key={section.id}
            className="text-section h-50 lg:h-screen flex flex-col items-start justify-center p-10"
          >
            <h2 className="text-2xl font-bold mb-4 text-colorAction-TITTLE">{section.tittle}</h2>
            <p className="text-xl max-w-[500px]">{section.text}</p>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            className="invertir-colores border-[1px] border-black p-5 rounded-full mb-20 hover:bg-black hover:-translate-y-2 transition-transform duration-500"
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
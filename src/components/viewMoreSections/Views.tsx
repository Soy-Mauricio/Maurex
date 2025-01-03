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
    { id: 0, tittle: "H", text: "Texto sobre el proyecto 1", image: "/src/assets/Img/ImgUno.jpg" },
    { id: 1, tittle: "J", text: "Descripción del proyecto 2", image: "/src/assets/Img/ImgDos.jpg" },
    { id: 2, tittle: "K", text: "Detalles del proyecto 3", image: "/src/assets/Img/ImgTres.jpg" },
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
      <div className="w-1/2 space-y-16 p-8">
        {textSections.map((section) => (
          <div
            key={section.id}
            className="text-section h-screen flex flex-col items-start justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">{section.tittle}</h2>
            <p className="text-xl">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTextSync;

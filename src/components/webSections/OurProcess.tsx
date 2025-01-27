import React from 'react';

interface Process {
    icon: string;
    title: string;
    description: string;
}

const PocessData: Process[] = [
  {
    icon: "/public/assets/Icons/Conocimiento.png",
    title: "CONOCIMIENTO",
    description: "Queremos entender el problema y al cliente y definir una solución."
  },
  {
    icon: "/public/assets/Icons/Descubrimiento.png",
    title: "DESCUBRIMIENTO",
    description: "Verificamos la estrategia inicial del producto para el mercado con nuestros futuros clientes."
  },
  {
    icon: "/public/assets/Icons/Design.png",
    title: "DISEÑO",
    description: "Creamos prototipos interactivos y diseños visuales."
  },
  {
    icon: "/public/assets/Icons/Desarrollo.png",
    title: "DESARROLLO",
    description: "Construimos y optimizamos tu sitio web."
  },
  {
    icon: "/public/assets/Icons/Lanzamiento.png",
    title: "LANZAMIENTO",
    description: "Aseguramos un despliegue exitoso y ofrecemos soporte continuo."
  }
];

const OurProcess: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-5">
      {PocessData.map((process, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="invertir-colores w-[200px] hover:bg-white hover:text-black flex flex-col justify-center cursor-pointer items-center p-4 rounded-lg h-[350px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-transform duration-700 hover:scale-105 will-change-transform backface-visibility-hidden">
            <div className="h-[40%] flex flex-col items-center">
              <div className="mb-2 mt-5">
                <img className="w-[50px]" src={process.icon} alt="Process" />
              </div>
            </div>
            <div className="h-[40%]">
              <div className="mb-4 text-center">
                <p className="font-semibold">{process.title}</p>
              </div>
              <div className="text-center">
                <p className="italic">{process.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurProcess;

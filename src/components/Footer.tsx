import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-stone-100">

      <div className="mt-14 p-4 max-w-[1200px] w-full mx-auto h-[auto]">
        {/* Columnas individuales */}
        <div className="mt-4 flex flex-col lg:flex-row justify-around items-start space-y-6 lg:space-y-0">
          <div>
            <h2 className="font-bold">CONTACTANOS</h2>
            <ul className="text-black opacity-80">
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">+57 3227863768</a>
                <p className="text-xs">Celular</p>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">maurex@gmail.com</a>
                <p className="text-xs">Correo</p>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">Villavicencio - Colombia</a>
                <p className="text-xs">Dirección</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">MAUREX</h2>
            <ul className="text-black opacity-80">
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">Sobre Nosotros</a>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">Servicios</a>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">Proyectos</a>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION" href="">Nuestro Equipo</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">REDES SOCIALES</h2>
            <ul className="text-black opacity-80">
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION flex items-center" href="">
                  Instagram
                </a>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION flex items-center" href="">
                  Twitter
                </a>
              </li>
              <li className="mt-4">
                <a className="font-medium hover:text-colorAction-ACTION flex items-center" href="">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="mt-4 bg-black opacity-40 h-[2px]"/>

        <div className="mt-4">
          <p className="text-center text-stone-800 opacity-80">
            © Maurex 2024. Todos los derechos reservados.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

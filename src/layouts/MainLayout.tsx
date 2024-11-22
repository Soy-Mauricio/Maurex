import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children} {/* Aquí se insertará el contenido específico de cada página */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
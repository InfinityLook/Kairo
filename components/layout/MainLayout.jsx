import React from 'react';
import CompanionOrb from '../CompanionOrb';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Horní lišta */}
      <header className="p-4 bg-white shadow-sm font-bold text-xl text-blue-900">
        Kairo
      </header>
      
      {/* Hlavní obsah stránky */}
      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Kairo koule v rohu (bude na každé stránce) */}
      <CompanionOrb />
      
      {/* Spodní menu */}
      <nav className="fixed bottom-0 w-full bg-white border-t p-4 flex justify-around">
        <button className="text-sm">Úkoly</button>
        <button className="text-sm">Sešity</button>
        <button className="text-sm">Kredity</button>
      </nav>
    </div>
  );
};

export default MainLayout;

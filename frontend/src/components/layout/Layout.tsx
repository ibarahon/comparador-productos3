import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              Comparador de Productos
            </h1>
            <nav>
              <a href="/" className="text-blue-600 hover:text-blue-800 mr-4">
                Inicio
              </a>
              <a href="/busqueda" className="text-blue-600 hover:text-blue-800 mr-4">
                Búsqueda
              </a>
              <a href="/comparar" className="text-blue-600 hover:text-blue-800">
                Comparar
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}


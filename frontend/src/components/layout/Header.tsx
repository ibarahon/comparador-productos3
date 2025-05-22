import Link from 'next/link';
import { Search } from '../search/Search';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ComparaPro
          </Link>
          <div className="w-full md:w-auto">
            <Search />
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Inicio
            </Link>
            <Link href="/busqueda" className="text-gray-700 hover:text-blue-600">
              Productos
            </Link>
            <Link href="/comparar" className="text-gray-700 hover:text-blue-600">
              Comparar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

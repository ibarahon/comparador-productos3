export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ComparaPro</h3>
            <p className="text-gray-300">
              Encuentra y compara los mejores productos de Amazon, AliExpress y Temu.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="/busqueda" className="text-gray-300 hover:text-white">Productos</a></li>
              <li><a href="/comparar" className="text-gray-300 hover:text-white">Comparar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300">
              ¿Tienes alguna pregunta o sugerencia?<br />
              <a href="mailto:info@comparapro.com" className="text-blue-400 hover:underline">
                info@comparapro.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ComparaPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

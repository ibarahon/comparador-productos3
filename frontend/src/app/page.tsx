import { Layout } from '@/components/layout/Layout';
import { Search } from '@/components/search/Search';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ProductCard } from '@/components/product/ProductCard';
import Link from 'next/link';

// Datos de ejemplo para la página de inicio
const featuredProducts = [
  {
    id: 'amazon_123',
    name: 'Auriculares Bluetooth con Cancelación de Ruido',
    platform: 'amazon',
    price: { current: 59.99, original: 79.99, currency: '$' },
    ratings: { average: 4.5, count: 1250 },
    images: { main: 'https://via.placeholder.com/300?text=Auriculares' }
  },
  {
    id: 'aliexpress_456',
    name: 'Smartwatch Deportivo Resistente al Agua',
    platform: 'aliexpress',
    price: { current: 29.99, original: 49.99, currency: '$' },
    ratings: { average: 4.2, count: 830 },
    images: { main: 'https://via.placeholder.com/300?text=Smartwatch' }
  },
  {
    id: 'temu_789',
    name: 'Cámara de Seguridad WiFi 1080p',
    platform: 'temu',
    price: { current: 19.99, original: 39.99, currency: '$' },
    ratings: { average: 3.9, count: 450 },
    images: { main: 'https://via.placeholder.com/300?text=Camara' }
  },
  {
    id: 'amazon_234',
    name: 'Batería Externa 20000mAh',
    platform: 'amazon',
    price: { current: 24.99, original: 34.99, currency: '$' },
    ratings: { average: 4.7, count: 2100 },
    images: { main: 'https://via.placeholder.com/300?text=Bateria' }
  }
];

const categories = [
  { id: 'electronics', name: 'Electrónica', image: 'https://via.placeholder.com/150?text=Electrónica' },
  { id: 'home', name: 'Hogar', image: 'https://via.placeholder.com/150?text=Hogar' },
  { id: 'fashion', name: 'Moda', image: 'https://via.placeholder.com/150?text=Moda' },
  { id: 'beauty', name: 'Belleza', image: 'https://via.placeholder.com/150?text=Belleza' },
  { id: 'sports', name: 'Deportes', image: 'https://via.placeholder.com/150?text=Deportes' },
  { id: 'toys', name: 'Juguetes', image: 'https://via.placeholder.com/150?text=Juguetes' },
];

export default function Home( ) {
  return (
    <Layout>
      <section className="py-12 bg-blue-50 rounded-lg mb-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Compara productos y ahorra</h1>
          <p className="text-xl mb-8">Encuentra el mejor precio en Amazon, AliExpress y Temu</p>
          <div className="max-w-2xl mx-auto">
            <Search size="lg" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Categorías Populares</h2>
          <Link href="/categorias" className="text-blue-600 hover:underline">
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Productos Destacados</h2>
          <Link href="/busqueda" className="text-blue-600 hover:underline">
            Ver más
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cómo Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Busca un producto</h3>
            <p className="text-gray-600">Ingresa el nombre del producto que estás buscando</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Compara precios</h3>
            <p className="text-gray-600">Analiza las diferentes opciones y sus características</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Elige la mejor opción</h3>
            <p className="text-gray-600">Selecciona el producto que mejor se adapte a tus necesidades</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

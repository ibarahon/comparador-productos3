'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/product/ProductCard';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const category = searchParams.get('category') || '';
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortOption, setSortOption] = useState('relevance');
  
  useEffect(() => {
    // En un entorno real, aquí se realizaría la llamada a la API
    // Para este ejemplo, simulamos la carga de datos
    setLoading(true);
    
    // Simulación de datos de ejemplo
    const mockProducts = [
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
      },
      {
        id: 'aliexpress_567',
        name: 'Funda de Silicona para iPhone 13',
        platform: 'aliexpress',
        price: { current: 5.99, original: 12.99, currency: '$' },
        ratings: { average: 4.0, count: 320 },
        images: { main: 'https://via.placeholder.com/300?text=Funda' }
      },
      {
        id: 'temu_890',
        name: 'Lámpara LED de Escritorio con USB',
        platform: 'temu',
        price: { current: 15.99, original: 25.99, currency: '$' },
        ratings: { average: 4.3, count: 180 },
        images: { main: 'https://via.placeholder.com/300?text=Lampara' }
      }
    ];
    
    // Filtrar por categoría si es necesario
    let filteredProducts = mockProducts;
    if (category ) {
      // En un entorno real, aquí se filtrarían los productos por categoría
      // Para este ejemplo, simplemente mostramos todos
    }
    
    // Filtrar por búsqueda si es necesario
    if (query) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [query, category]);
  
  const handlePlatformFilter = (platform) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(platform)) {
        return prev.filter(p => p !== platform);
      } else {
        return [...prev, platform];
      }
    });
  };
  
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
  };
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  
  // Aplicar filtros a los productos
  let filteredProducts = products;
  
  if (selectedPlatforms.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      selectedPlatforms.includes(product.platform)
    );
  }
  
  filteredProducts = filteredProducts.filter(product => 
    product.price.current >= priceRange.min && product.price.current <= priceRange.max
  );
  
  // Aplicar ordenación
  switch (sortOption) {
    case 'price_asc':
      filteredProducts.sort((a, b) => a.price.current - b.price.current);
      break;
    case 'price_desc':
      filteredProducts.sort((a, b) => b.price.current - a.price.current);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.ratings.average - a.ratings.average);
      break;
    default:
      // Por defecto, no cambiamos el orden
      break;
  }
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Plataformas</h3>
              <div className="space-y-2">
                {['amazon', 'aliexpress', 'temu'].map(platform => (
                  <div key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`platform-${platform}`}
                      checked={selectedPlatforms.includes(platform)}
                      onChange={() => handlePlatformFilter(platform)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={`platform-${platform}`} className="ml-2 text-sm text-gray-700 capitalize">
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Rango de Precio</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange.max)}
                  className="w-20 p-1 text-sm border border-gray-300 rounded"
                  min="0"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceRangeChange(priceRange.min, Number(e.target.value))}
                  className="w-20 p-1 text-sm border border-gray-300 rounded"
                  min={priceRange.min}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Ordenar por</h3>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="w-full p-2 text-sm border border-gray-300 rounded"
              >
                <option value="relevance">Relevancia</option>
                <option value="price_asc">Precio: menor a mayor</option>
                <option value="price_desc">Precio: mayor a menor</option>
                <option value="rating">Valoración</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">
              {query ? `Resultados para: "${query}"` : category ? `Categoría: ${category}` : 'Todos los productos'}
            </h1>
            <p className="text-gray-600 mt-1">
              {filteredProducts.length} productos encontrados
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-80"></div>
              ))}
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-xl font-medium mb-2">No se encontraron resultados</h2>
                  <p className="text-gray-600">Intenta con otra búsqueda o ajusta los filtros</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { PlatformBadge } from '@/components/ui/PlatformBadge';
import { RatingStars } from '@/components/ui/RatingStars';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { ProductCard } from '@/components/product/ProductCard';

export default function ProductPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  
  useEffect(() => {
    // En un entorno real, aquí se realizaría la llamada a la API
    // Para este ejemplo, simulamos la carga de datos
    setLoading(true);
    
    // Simulación de datos de ejemplo
    const mockProducts = {
      'amazon_123': {
        id: 'amazon_123',
        name: 'Auriculares Bluetooth con Cancelación de Ruido',
        platform: 'amazon',
        description: 'Auriculares inalámbricos con tecnología de cancelación activa de ruido, batería de larga duración y sonido de alta calidad. Perfectos para viajes, trabajo y uso diario.',
        price: { current: 59.99, original: 79.99, currency: '$' },
        ratings: { average: 4.5, count: 1250 },
        images: { 
          main: 'https://via.placeholder.com/600?text=Auriculares',
          gallery: [
            'https://via.placeholder.com/600?text=Auriculares_1',
            'https://via.placeholder.com/600?text=Auriculares_2',
            'https://via.placeholder.com/600?text=Auriculares_3'
          ]
        },
        specifications: {
          'Marca': 'AudioTech',
          'Modelo': 'AT-500',
          'Tipo': 'Over-ear',
          'Conectividad': 'Bluetooth 5.0',
          'Batería': '30 horas',
          'Peso': '250g',
          'Color': 'Negro'
        },
        availability: true,
        shipping: {
          free: true,
          estimatedDelivery: '2-3 días'
        }
      },
      'aliexpress_456': {
        id: 'aliexpress_456',
        name: 'Smartwatch Deportivo Resistente al Agua',
        platform: 'aliexpress',
        description: 'Reloj inteligente con múltiples modos deportivos, monitoreo de frecuencia cardíaca, notificaciones de mensajes y llamadas. Resistente al agua hasta 50 metros.',
        price: { current: 29.99, original: 49.99, currency: '$' },
        ratings: { average: 4.2, count: 830 },
        images: { 
          main: 'https://via.placeholder.com/600?text=Smartwatch',
          gallery: [
            'https://via.placeholder.com/600?text=Smartwatch_1',
            'https://via.placeholder.com/600?text=Smartwatch_2',
            'https://via.placeholder.com/600?text=Smartwatch_3'
          ]
        },
        specifications: {
          'Marca': 'FitPro',
          'Modelo': 'FP-200',
          'Pantalla': '1.3" AMOLED',
          'Batería': '7 días',
          'Resistencia al agua': 'IP68',
          'Compatibilidad': 'Android/iOS',
          'Color': 'Negro/Azul/Rojo'
        },
        availability: true,
        shipping: {
          free: true,
          estimatedDelivery: '15-20 días'
        }
      },
      'temu_789': {
        id: 'temu_789',
        name: 'Cámara de Seguridad WiFi 1080p',
        platform: 'temu',
        description: 'Cámara de seguridad con resolución Full HD, visión nocturna, detección de movimiento y audio bidireccional. Fácil instalación y control desde aplicación móvil.',
        price: { current: 19.99, original: 39.99, currency: '$' },
        ratings: { average: 3.9, count: 450 },
        images: { 
          main: 'https://via.placeholder.com/600?text=Camara',
          gallery: [
            'https://via.placeholder.com/600?text=Camara_1',
            'https://via.placeholder.com/600?text=Camara_2',
            'https://via.placeholder.com/600?text=Camara_3'
          ]
        },
        specifications: {
          'Marca': 'SecureView',
          'Modelo': 'SV-100',
          'Resolución': '1080p',
          'Conectividad': 'WiFi 2.4GHz',
          'Almacenamiento': 'Tarjeta SD/Nube',
          'Visión nocturna': 'Hasta 10m',
          'Color': 'Blanco'
        },
        availability: true,
        shipping: {
          free: false,
          cost: 2.99,
          estimatedDelivery: '7-12 días'
        }
      }
    };
    
    // Productos similares de ejemplo
    const mockSimilarProducts = [
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
    
    setTimeout(( ) => {
      setProduct(mockProducts[id] || mockProducts['amazon_123']);
      setSimilarProducts(mockSimilarProducts);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
            <div className="w-full md:w-1/2">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-6">El producto que estás buscando no existe o ha sido eliminado.</p>
          <Link href="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="mb-6">
        <Link href="/busqueda" className="text-blue-600 hover:underline flex items-center">
          ← Volver a resultados
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-w-1 aspect-h-1">
              <Image 
                src={product.images.main} 
                alt={product.name}
                width={600}
                height={600}
                className="object-contain"
              />
              <div className="absolute top-4 left-4">
                <PlatformBadge platform={product.platform} />
              </div>
            </div>
            
            {product.images.gallery && (
              <div className="p-4 flex gap-2 overflow-x-auto">
                {product.images.gallery.map((image, index) => (
                  <button 
                    key={index}
                    className="flex-shrink-0 w-20 h-20 border rounded overflow-hidden"
                  >
                    <Image 
                      src={image} 
                      alt={`${product.name} - Imagen ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <RatingStars rating={product.ratings.average} />
            <span className="ml-2 text-sm text-gray-600">
              {product.ratings.average} ({product.ratings.count} valoraciones)
            </span>
          </div>
          
          <div className="mb-6">
            <PriceDisplay 
              current={product.price.current} 
              original={product.price.original} 
              currency={product.price.currency} 
            />
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="mr-2">
                {product.availability ? (
                  <span className="text-green-600 font-medium">En stock</span>
                ) : (
                  <span className="text-red-600 font-medium">Agotado</span>
                )}
              </span>
              
              {product.shipping && (
                <span>
                  {product.shipping.free ? (
                    <span className="text-green-600">Envío gratis</span>
                  ) : (
                    <span>Envío: {product.price.currency}{product.shipping.cost}</span>
                  )}
                  {product.shipping.estimatedDelivery && (
                    <span className="ml-2">
                      Entrega estimada: {product.shipping.estimatedDelivery}
                    </span>
                  )}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <a 
              href={`https://${product.platform}.com/product/${product.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary flex-1 text-center"
            >
              Ver en {product.platform}
            </a>
            
            <Link 
              href={`/comparar?ids=${product.id}`}
              className="btn btn-secondary flex-1 text-center"
            >
              Añadir a comparación
            </Link>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">Especificaciones</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <dl className="divide-y divide-gray-200">
                {Object.entries(product.specifications ).map(([key, value]) => (
                  <div key={key} className="py-2 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Productos Similares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

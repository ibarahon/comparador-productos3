'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { PlatformBadge } from '@/components/ui/PlatformBadge';
import { RatingStars } from '@/components/ui/RatingStars';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const productIds = searchParams.get('ids')?.split(',') || [];
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
        description: 'Auriculares inalámbricos con tecnología de cancelación activa de ruido, batería de larga duración y sonido de alta calidad.',
        price: { current: 59.99, original: 79.99, currency: '$' },
        ratings: { average: 4.5, count: 1250 },
        images: { main: 'https://via.placeholder.com/300?text=Auriculares' },
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
        description: 'Reloj inteligente con múltiples modos deportivos, monitoreo de frecuencia cardíaca, notificaciones de mensajes y llamadas.',
        price: { current: 29.99, original: 49.99, currency: '$' },
        ratings: { average: 4.2, count: 830 },
        images: { main: 'https://via.placeholder.com/300?text=Smartwatch' },
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
        description: 'Cámara de seguridad con resolución Full HD, visión nocturna, detección de movimiento y audio bidireccional.',
        price: { current: 19.99, original: 39.99, currency: '$' },
        ratings: { average: 3.9, count: 450 },
        images: { main: 'https://via.placeholder.com/300?text=Camara' },
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
      },
      'amazon_234': {
        id: 'amazon_234',
        name: 'Batería Externa 20000mAh',
        platform: 'amazon',
        description: 'Batería externa de alta capacidad con carga rápida y múltiples puertos USB.',
        price: { current: 24.99, original: 34.99, currency: '$' },
        ratings: { average: 4.7, count: 2100 },
        images: { main: 'https://via.placeholder.com/300?text=Bateria' },
        specifications: {
          'Marca': 'PowerMax',
          'Modelo': 'PM-20K',
          'Capacidad': '20000mAh',
          'Puertos': '2x USB-A, 1x USB-C',
          'Carga rápida': 'Sí',
          'Peso': '350g',
          'Color': 'Negro'
        },
        availability: true,
        shipping: {
          free: true,
          estimatedDelivery: '1-2 días'
        }
      }
    };
    
    // Filtrar productos por IDs
    const selectedProducts = productIds
      .map(id => mockProducts[id] )
      .filter(Boolean);
    
    setTimeout(() => {
      setProducts(selectedProducts);
      setLoading(false);
    }, 500);
  }, [productIds]);
  
  if (loading) {
    return (
      <Layout>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="h-96 bg-gray-200 rounded w-full"></div>
        </div>
      </Layout>
    );
  }
  
  if (products.length === 0) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">No hay productos para comparar</h1>
          <p className="text-gray-600 mb-6">Selecciona productos para añadirlos a la comparación.</p>
          <Link href="/busqueda" className="btn btn-primary">
            Buscar productos
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Obtener todas las especificaciones únicas
  const allSpecifications = products.reduce((specs, product) => {
    Object.keys(product.specifications).forEach(key => {
      if (!specs.includes(key)) {
        specs.push(key);
      }
    });
    return specs;
  }, []);
  
  return (
    <Layout>
      <div className="mb-6">
        <Link href="/busqueda" className="text-blue-600 hover:underline flex items-center">
          ← Volver a resultados
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">Comparación de Productos</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 border-b"></th>
              {products.map(product => (
                <th key={product.id} className="p-4 text-center bg-gray-50 border-b min-w-[250px]">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-2">
                      <Image 
                        src={product.images.main} 
                        alt={product.name}
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <PlatformBadge platform={product.platform} className="mb-2" />
                    <Link href={`/producto/${product.id}`} className="font-medium text-blue-600 hover:underline">
                      {product.name}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 font-medium border-b">Precio</td>
              {products.map(product => (
                <td key={`${product.id}-price`} className="p-4 text-center border-b">
                  <div className="font-bold text-lg">
                    {product.price.currency}{product.price.current}
                  </div>
                  {product.price.original && (
                    <div className="text-sm text-gray-500 line-through">
                      {product.price.currency}{product.price.original}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-b">Valoración</td>
              {products.map(product => (
                <td key={`${product.id}-rating`} className="p-4 text-center border-b">
                  <div className="flex justify-center">
                    <RatingStars rating={product.ratings.average} />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {product.ratings.average} ({product.ratings.count})
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-b">Disponibilidad</td>
              {products.map(product => (
                <td key={`${product.id}-availability`} className="p-4 text-center border-b">
                  {product.availability ? (
                    <span className="text-green-600 font-medium">En stock</span>
                  ) : (
                    <span className="text-red-600 font-medium">Agotado</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-b">Envío</td>
              {products.map(product => (
                <td key={`${product.id}-shipping`} className="p-4 text-center border-b">
                  {product.shipping.free ? (
                    <span className="text-green-600">Envío gratis</span>
                  ) : (
                    <span>Envío: {product.price.currency}{product.shipping.cost}</span>
                  )}
                  <div className="text-sm text-gray-600 mt-1">
                    {product.shipping.estimatedDelivery}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium border-b">Descripción</td>
              {products.map(product => (
                <td key={`${product.id}-description`} className="p-4 text-center border-b">
                  <p className="text-sm text-gray-700">{product.description}</p>
                </td>
              ))}
            </tr>
            
            {/* Especificaciones */}
            {allSpecifications.map(spec => (
              <tr key={spec}>
                <td className="p-4 font-medium border-b">{spec}</td>
                {products.map(product => (
                  <td key={`${product.id}-${spec}`} className="p-4 text-center border-b">
                    {product.specifications[spec] || '-'}
                  </td>
                ))}
              </tr>
            ))}
            
            <tr>
              <td className="p-4 font-medium border-b">Enlace</td>
              {products.map(product => (
                <td key={`${product.id}-link`} className="p-4 text-center border-b">
                  <a 
                    href={`https://${product.platform}.com/product/${product.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-block"
                  >
                    Ver en {product.platform}
                  </a>
                </td>
               ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

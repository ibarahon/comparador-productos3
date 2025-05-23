import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  rating?: number;
  platform?: string;
  description?: string;
  onCompare?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  platform,
  description,
  onCompare
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          {platform && (
            <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
              {platform}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              ${price.toFixed(2)}
            </span>
            {rating && (
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
          
          {onCompare && (
            <button
              onClick={() => onCompare(id)}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Comparar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

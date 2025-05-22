import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlatformBadge } from '../ui/PlatformBadge';
import { RatingStars } from '../ui/RatingStars';
import { PriceDisplay } from '../ui/PriceDisplay';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    platform: string;
    price: {
      current: number;
      original?: number;
      currency: string;
    };
    ratings: {
      average: number;
      count: number;
    };
    images: {
      main: string;
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.id}`}>
      <div className="product-card p-4 h-full flex flex-col">
        <div className="relative mb-4">
          <PlatformBadge platform={product.platform} className="absolute top-2 left-2 z-10" />
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
            <Image 
              src={product.images.main} 
              alt={product.name}
              width={300}
              height={300}
              className="product-image"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="mt-2 flex items-center">
            <RatingStars rating={product.ratings.average} />
            <span className="ml-1 text-xs text-gray-500">({product.ratings.count})</span>
          </div>
        </div>
        <div className="mt-4">
          <PriceDisplay 
            current={product.price.current} 
            original={product.price.original} 
            currency={product.price.currency} 
          />
        </div>
      </div>
    </Link>
  );
}

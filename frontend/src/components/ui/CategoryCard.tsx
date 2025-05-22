import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/busqueda?category=${category.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <Image 
            src={category.image} 
            alt={category.name}
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="p-2 text-center">
          <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}

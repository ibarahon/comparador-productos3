import React from 'react';

interface PriceDisplayProps {
  current: number;
  original?: number;
  currency: string;
}

export function PriceDisplay({ current, original, currency }: PriceDisplayProps) {
  const formatPrice = (price: number) => {
    return `${currency}${price.toFixed(2)}`;
  };

  const calculateDiscount = () => {
    if (!original || original <= current) return null;
    const discount = Math.round(((original - current) / original) * 100);
    return discount;
  };

  const discount = calculateDiscount();

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-lg font-medium text-gray-900">
          {formatPrice(current)}
        </span>
        
        {original && original > current && (
          <span className="ml-2 text-sm text-gray-500 line-through">
            {formatPrice(original)}
          </span>
        )}
      </div>
      
      {discount && (
        <span className="text-sm font-medium text-green-600">
          {discount}% de descuento
        </span>
      )}
    </div>
  );
}

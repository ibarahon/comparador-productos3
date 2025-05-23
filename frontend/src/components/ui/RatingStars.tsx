import React from 'react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = true
}: RatingStarsProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrellas llenas
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400">
          ★
        </span>
      );
    }

    // Media estrella
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 relative">
          ☆
          <span className="absolute left-0 top-0 overflow-hidden w-1/2">
            ★
          </span>
        </span>
      );
    }

    // Estrellas vacías
    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center space-x-1 ${getSizeClasses()}`}>
      <div className="flex">
        {renderStars()}
      </div>
      {showNumber && (
        <span className="text-gray-600 text-sm ml-1">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
}

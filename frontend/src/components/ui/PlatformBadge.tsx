import React from 'react';

interface PlatformBadgeProps {
  platform: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export default function PlatformBadge({ 
  platform, 
  variant = 'default' 
}: PlatformBadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getVariantClasses()}`}
    >
      {platform}
    </span>
  );
}

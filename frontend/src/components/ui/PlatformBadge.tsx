import React from 'react';

interface PlatformBadgeProps {
  platform: string;
  className?: string;
}

export function PlatformBadge({ platform, className = '' }: PlatformBadgeProps) {
  const getBadgeColors = () => {
    switch (platform.toLowerCase()) {
      case 'amazon':
        return 'bg-amazon text-white';
      case 'aliexpress':
        return 'bg-aliexpress text-white';
      case 'temu':
        return 'bg-temu text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPlatformName = () => {
    switch (platform.toLowerCase()) {
      case 'amazon':
        return 'Amazon';
      case 'aliexpress':
        return 'AliExpress';
      case 'temu':
        return 'Temu';
      default:
        return platform;
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getBadgeColors()} ${className}`}>
      {getPlatformName()}
    </span>
  );
}

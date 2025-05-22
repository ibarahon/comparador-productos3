'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Search({ size = 'md' }: SearchProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/busqueda?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const sizeClasses = {
    sm: 'h-10 text-sm',
    md: 'h-12 text-base',
    lg: 'h-14 text-lg',
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          className={`w-full px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${sizeClasses[size]}`}
        />
        <button
          type="submit"
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-md px-3 ${
            size === 'sm' ? 'py-1 text-sm' : size === 'lg' ? 'py-2 text-lg' : 'py-1.5'
          }`}
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

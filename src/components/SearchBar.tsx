import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/services';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof servicesList>([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = servicesList.filter(
        service =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl mx-4">
        <div className="p-4 flex items-center border-b">
          <input
            type="text"
            placeholder="Search services..."
            className="flex-1 p-2 border-none focus:outline-none text-gray-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close search"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-4">
            {results.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                {service.icon}
                <div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {searchQuery && results.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No services found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
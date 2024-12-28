import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { SearchBar } from './SearchBar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-indigo-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md hover:bg-indigo-600 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="ml-4">
              <h1 className="text-xl font-bold">UP Government Services</h1>
            </Link>
          </div>
          
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-md hover:bg-indigo-600 transition-colors"
            aria-label="Open search"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
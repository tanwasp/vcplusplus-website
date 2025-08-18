'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getEnabledPages } from '../../data/pagesConfig';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get navigation items from pages configuration
  const navItems = getEnabledPages().map(page => ({
    name: page.title,
    href: page.path,
    key: page.key
  }));

  return (
    <nav className="bg-maroon text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/vcplusplug_logo.png"
                  alt="VC++ Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <h1 className="text-2xl font-bold">VC++</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`px-3 py-2 rounded-md font-medium transition-colors ${
                      currentPage === item.key
                        ? 'bg-white/10'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-maroon/95">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                    currentPage === item.key
                      ? 'bg-white/10'
                      : 'hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
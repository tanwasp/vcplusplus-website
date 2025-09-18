"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getEnabledPages } from "../../data/pagesConfig";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get navigation items from pages configuration
  const navItems = getEnabledPages().map((page) => ({
    name: page.title,
    href: page.path,
    key: page.key,
  }));

  return (
    <nav className="bg-gradient-to-r from-maroon to-maroon-light text-white shadow-2xl backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/vcplusplug_logo.png"
                    alt="VC++ Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight group-hover:text-white/90 transition-colors duration-300">
                  VC++
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                      currentPage === item.key
                        ? "bg-white/20 text-white shadow-lg"
                        : "hover:bg-white/10 hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {currentPage !== item.key && (
                      <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-2 bg-gradient-to-b from-maroon-dark/50 to-transparent backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${
                  currentPage === item.key
                    ? "bg-white/20 text-white translate-x-2"
                    : "hover:bg-white/10 hover:translate-x-2"
                } animate-fade-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

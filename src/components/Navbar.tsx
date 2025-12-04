'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              InkWorksPublishing
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="#books" className="text-gray-700 hover:text-primary-500 transition-colors">
              Books
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary-500 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-500 transition-colors">
              Testimonials
            </Link>
            <button className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#books"
              className="block px-3 py-2 text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-2 text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <button className="w-full mt-2 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

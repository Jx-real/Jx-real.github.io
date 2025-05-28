import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md shadow-purple-900/20 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center space-x-2 text-xl font-semibold text-white"
          >
            <Sparkles className="h-6 w-6 text-[#6a00ff]" />
            <span>Zyph Client</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-purple-200 hover:text-[#6a00ff] transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-purple-200 hover:text-[#6a00ff] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#6a00ff] to-purple-600 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-200 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 shadow-lg rounded-b-lg border border-purple-900/20">
            <div className="px-4 py-3 space-y-3">
              <a
                href="#features"
                className="block text-sm font-medium text-purple-200 hover:text-[#6a00ff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block text-sm font-medium text-purple-200 hover:text-[#6a00ff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#"
                className="block px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#6a00ff] to-purple-600 rounded-full hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
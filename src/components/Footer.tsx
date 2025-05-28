import React from 'react';
import { Sparkles, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 text-xl font-semibold mb-4">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span>Zyph Client</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Illuminating your digital experience with powerful tools and beautiful interfaces. 
              Designed for creators, built for performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Testimonials', 'Documentation', 'Changelog'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Community', 'Contact', 'Support', 'FAQ', 'Legal'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-center">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4 text-center">
              Get the latest updates and news delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-r-lg hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Zyph Client. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
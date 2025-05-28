import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 pb-8 md:pt-28 md:pb-16 overflow-hidden bg-black relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative">
          {/* Background Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6a00ff] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6a00ff] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 right-40 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="animate-gradient bg-gradient-to-r from-[#6a00ff] to-purple-600 bg-clip-text text-transparent">
                Zyph Client
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              The Future Of Copy Mods | The only cheat you will ever use.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#"
                className="px-8 py-4 text-lg font-medium text-white animate-gradient bg-gradient-to-r from-[#6a00ff] to-purple-600 rounded-full hover:shadow-[0_8px_30px_rgb(106,0,255,0.3)] transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Download <ArrowDown className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-lg font-medium text-white animate-gradient bg-gradient-to-r from-[#6a00ff] to-purple-600 rounded-full hover:shadow-[0_8px_30px_rgb(106,0,255,0.3)] transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
        
        {/* Featured Video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(106,0,255,0.3)]">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Zyph Client Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
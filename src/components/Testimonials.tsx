import React from 'react';
import { testimonials } from '../config/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight animate-gradient bg-gradient-to-r from-[#6a00ff] to-purple-600 bg-clip-text text-transparent">
          Reviews
        </h2>
      </div>
      <div className="relative w-full">
        <div className="flex gap-8 animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[400px] min-h-[200px] bg-black/30 backdrop-blur-lg rounded-xl p-8 
                transform transition-all duration-500 hover:-translate-y-6
                shadow-[0_0_30px_rgba(106,0,255,0.3)] hover:shadow-[0_0_50px_rgba(106,0,255,0.5)]
                border border-purple-900/30 flex flex-col justify-between"
            >
              <p className="text-purple-200 text-xl mb-6 leading-relaxed">"{testimonial.content}"</p>
              <p className="text-white font-semibold text-lg">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
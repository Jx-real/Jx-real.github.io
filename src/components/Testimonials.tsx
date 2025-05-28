import React from 'react';
import { testimonials } from '../config/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="relative w-full">
        <div className="flex gap-8 animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[400px] bg-black/30 backdrop-blur-lg rounded-xl p-8 
                transform transition-all duration-500 hover:-translate-y-6
                shadow-[0_0_30px_rgba(106,0,255,0.3)] hover:shadow-[0_0_50px_rgba(106,0,255,0.5)]
                border border-purple-900/30"
            >
              <p className="text-purple-200 text-lg mb-6">"{testimonial.content}"</p>
              <p className="text-white font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
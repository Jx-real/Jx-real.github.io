import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;
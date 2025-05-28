import React from 'react';
import { Shield, Zap } from 'lucide-react';

const featureItems = [
  {
    icon: <Shield className="h-8 w-8 text-[#6a00ff]" />,
    title: 'Undetectable',
    description: 'Advanced protection systems ensure you stay undetected while using our client.'
  },
  {
    icon: <Zap className="h-8 w-8 text-[#6a00ff]" />,
    title: 'Lightning Fast',
    description: 'Optimized performance with minimal impact on your game experience.'
  }
];

const Features = () => {
  return (
    <section id="features\" className="section-padding overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zyph Client?
          </h2>
          <p className="text-lg text-purple-200">
            Experience gaming excellence with our premium features.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-lg rounded-xl p-8 shadow-[0_8px_30px_rgb(106,0,255,0.2)] hover:shadow-[0_8px_30px_rgb(106,0,255,0.3)] transition-all duration-500 transform hover:-translate-y-2 border border-purple-900/20"
            >
              <div className="mb-4 inline-block p-3 bg-purple-900/20 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
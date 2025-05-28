import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small projects',
    features: [
      { name: 'Up to 5 projects', included: true },
      { name: 'Basic analytics', included: true },
      { name: '10GB storage', included: true },
      { name: 'Email support', included: true },
      { name: 'Custom domain', included: false },
      { name: 'Advanced security', included: false },
      { name: 'API access', included: false },
      { name: 'White labeling', included: false },
    ],
    ctaText: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses and teams',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'Advanced analytics', included: true },
      { name: '50GB storage', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom domain', included: true },
      { name: 'Advanced security', included: true },
      { name: 'API access', included: true },
      { name: 'White labeling', included: false },
    ],
    ctaText: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For organizations requiring maximum capability',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'Custom analytics', included: true },
      { name: 'Unlimited storage', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Multiple custom domains', included: true },
      { name: 'Enterprise security', included: true },
      { name: 'Full API access', included: true },
      { name: 'White labeling', included: true },
    ],
    ctaText: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Background Decoration */}
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-semibold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  
                  <a 
                    href="#"
                    className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-md' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
                
                <div className="border-t border-gray-100 p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No, all plans are month-to-month. You can cancel at any time without penalty.'
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes, you can save 20% by choosing annual billing on any of our plans.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
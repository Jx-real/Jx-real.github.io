import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about Zyph Client or need help getting started? Our team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">info@zyphclient.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Innovation Way, Tech City, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {/* Background Decoration */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales Question">Sales Question</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
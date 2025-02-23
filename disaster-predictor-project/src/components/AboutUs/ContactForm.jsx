import React, { useState } from 'react';
import { Heart, User, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses = `
    w-full bg-white/10 border border-white/20 rounded-lg py-3 px-12 
    text-white placeholder-gray-400 focus:outline-none focus:ring-2 
    focus:ring-blue-400 transition-all duration-300
  `;

  return (
    <div className="lg:w-1/2 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-red-400" />
          <h2 className="text-sm font-medium uppercase tracking-wider">Join Our Mission</h2>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Building Resilience Together
        </h1>
        
        <p className="mb-8 text-gray-200">
          Support our community in times of need. Your skills and compassion can help rebuild lives and restore hope.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Your Name"
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="relative group">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Contact Number"
              className={inputClasses}
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>

          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold 
              py-3 px-6 rounded-lg transition-all duration-300 transform 
              hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25"
          >
            Join Our Team
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
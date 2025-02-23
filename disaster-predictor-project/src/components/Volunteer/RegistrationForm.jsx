import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin, Calendar, BookOpen } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    location: '',
    availability: '',
    skills: ''
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
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
          <input
            type="text"
            placeholder="Full Name"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <input
              type="tel"
              placeholder="Contact Number"
              className={inputClasses}
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </div>

          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <input
              type="email"
              placeholder="Email Address"
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="relative group">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
          <input
            type="text"
            placeholder="Your Location"
            className={inputClasses}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>

        <div className="relative group">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
          <select
            className={inputClasses}
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            required
          >
            <option value="">Select Availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>

        <div className="relative group">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
          <textarea
            placeholder="Tell us about your skills and experience"
            className={`${inputClasses} h-32 py-3`}
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold 
            py-3 px-6 rounded-lg transition-all duration-300 shadow-lg 
            hover:shadow-blue-500/25"
        >
          Register as Volunteer
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
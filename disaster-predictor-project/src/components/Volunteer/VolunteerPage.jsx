import React from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import ImpactSection from './ImpactSection';
import OpportunitiesGrid from './OpportunitiesGrid';

const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 px-4"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4"
        >
          Join Our Volunteer Team
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Make a difference in your community by joining our network of dedicated volunteers
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ImpactSection />
          <RegistrationForm />
        </div>
      </div>

      {/* Opportunities Section */}
      <OpportunitiesGrid />
    </div>
  );
};

export default VolunteerPage;
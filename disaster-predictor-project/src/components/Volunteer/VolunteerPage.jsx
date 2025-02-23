import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Heart, ArrowRight } from 'lucide-react';
import OpportunitiesGrid from './OpportunitiesGrid';
import { useNavigate } from 'react-router-dom';

const VolunteerPage = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Globe2, value: '50+', label: 'Countries' },
    { icon: Users, value: '10K+', label: 'Active Volunteers' },
    { icon: Heart, value: '100K+', label: 'Lives Impacted' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 
              text-transparent bg-clip-text">
              Join Our Mission
            </span>
            <br />
            <span className="text-white">Save Lives Together</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 
              max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-300">
              Be part of our global network of volunteers dedicated to disaster relief and recovery.
              Your skills can make a real difference.
            </p>
          </motion.div>

          <motion.button
            onClick={() => navigate('/volunteer/register')}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl 
              font-semibold flex items-center gap-2 mx-auto shadow-lg shadow-blue-500/25 
              hover:shadow-blue-500/40 transition-all duration-300"
          >
            Start Volunteering
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl 
                border border-white/10 text-center hover:border-blue-500/50 hover:bg-blue-500/5 
                transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 
                transition-transform" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="relative pb-24">
        <OpportunitiesGrid />
      </div>
    </div>
  );
};

export default VolunteerPage;
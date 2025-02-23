import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsDetail = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to News
        </button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h1 className="text-3xl font-bold text-white mb-4">
            Severe Weather Warning: Tropical Storm Approaching
          </h1>
          
          <div className="text-gray-400 mb-6">
            {new Date().toLocaleDateString()} | Weather Alert
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              A powerful tropical storm is approaching the southeastern coastline, 
              bringing potential risks of heavy rainfall and strong winds. Emergency 
              services are on high alert, and residents in coastal areas are advised 
              to prepare emergency kits.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Safety Measures
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Prepare emergency supplies</li>
              <li>Stay informed about weather updates</li>
              <li>Secure outdoor items</li>
              <li>Have evacuation plans ready</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Emergency Contacts
            </h2>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300">Emergency Services: 911</p>
              <p className="text-gray-300">Storm Helpline: 1-800-555-0000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsDetail;
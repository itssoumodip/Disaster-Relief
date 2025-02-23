import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BreakingNews = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-29 mb-8"
    >
      <div className="bg-gradient-to-r from-red-500/10 to-red-900/10 backdrop-blur-sm 
        border border-red-500/20 rounded-xl overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
            <h2 className="text-xl font-bold text-white">Breaking News</h2>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Severe Weather Warning: Tropical Storm Approaching
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              A powerful tropical storm is approaching the southeastern coastline, 
              bringing potential risks of heavy rainfall and strong winds. Emergency 
              services are on high alert, and residents in coastal areas are advised 
              to prepare emergency kits.
            </p>

            <div className="flex items-center justify-between mt-6">
              <span className="text-gray-400 text-sm">
                Updated: {new Date().toLocaleDateString()}
              </span>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/news/latest')}
                className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 
                  text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 
          animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default BreakingNews;
import React from 'react';
import { motion } from 'framer-motion';

const NewsAlert = ({ location, headline, details }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10"
    >
      {location && <h2 className="text-2xl font-bold text-white mb-2">{location}</h2>}
      {headline && <h3 className="text-xl font-semibold text-white/90 mb-4">{headline}</h3>}
      {details && <p className="text-white/80 leading-relaxed">{details}</p>}
      {!location && !headline && !details && (
        <p className="text-gray-400 text-center py-8">No alerts at this time</p>
      )}
    </motion.div>
  );
};

export default NewsAlert;
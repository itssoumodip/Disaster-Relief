import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReliefProgram = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/10 to-blue-900/10 backdrop-blur-sm 
            border border-blue-500/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Relief Program
          </h2>
          <p className="text-gray-300 mb-6">
            Make a difference by joining our volunteer network. Help communities recover and rebuild.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/volunteer')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white 
              rounded-lg flex items-center gap-2 transition-colors"
          >
            Join as Volunteer
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReliefProgram;
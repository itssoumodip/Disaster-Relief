import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsAlert from './NewsAlert';
import NewsCarousel from './NewsCarousel';

const MainContent = () => {
  const navigate = useNavigate();

  const handleSosClick = () => {
    navigate('/sos-alert');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 text-center"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6"
      >
        Disaster <span className="text-blue-500">Predictor</span>
      </motion.h1>
      <motion.p 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
      >
        Stay informed and prepared with real-time disaster predictions and emergency response coordination.
      </motion.p>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex gap-4 justify-center"
      >
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
          Get Started
        </button>
        <button className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
          Learn More
        </button>
      </motion.div>

      <main className="p-4 md:p-8">
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-8">BREAKING NEWS</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <NewsAlert />
          <NewsCarousel />
        </div>

        {/* Join Section */}
        <div className="mt-8 justify-center flex flex-col items-center px-2 py-1">
          <button 
            onClick={() => navigate('/volunteer')}
            className="bg-[#B15B5B] text-white px-4 py-3 rounded-2xl md:text-md text-sm font-semibold shadow-lg hover:bg-[#9c4f4f] transition-colors"
          >
            Join our Relief Program as a Volunteer and Make a Real Difference in the Lives of Those in Need!
          </button>
        </div>

        {/* Emergency Status */}
        <div className="fixed bottom-6 right-6 flex items-center space-x-2" onClick={handleSosClick}> 
          <span className="text-white text-sm font-bold text-right">
            EMERGENCY
            <br />
            SOS
          </span>
          <div className="w-12 h-12 rounded-full bg-[#b70000] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#ff0707]" />
          </div>
        </div>
      </main>
    </motion.section>
  );
};

export default MainContent;
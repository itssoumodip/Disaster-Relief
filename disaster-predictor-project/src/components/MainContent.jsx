import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import NewsAlert from './NewsAlert';
import NewsCarousel from './NewsCarousel';
import sosService from '../services/sosService';

const MainContent = () => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [sosStatus, setSosStatus] = useState(null);

  const handleSosClick = async () => {
    try {
      setSending(true);
      setSosStatus('sending');
      await sosService.sendSOS();
      setSosStatus('success');
      // Optional: Navigate to SOS page after successful send
      // navigate('/sos-alert');
    } catch (error) {
      setSosStatus('error');
      console.error('Failed to send SOS:', error);
    } finally {
      setSending(false);
      // Reset status after 3 seconds
      setTimeout(() => setSosStatus(null), 3000);
    }
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

        {/* Emergency Status Button with Feedback */}
        <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2">
          <AnimatePresence>
            {sosStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`text-sm font-bold px-4 py-2 rounded-lg ${
                  sosStatus === 'sending' ? 'bg-yellow-500' :
                  sosStatus === 'success' ? 'bg-green-500' :
                  'bg-red-500'
                } text-white shadow-lg`}
              >
                {sosStatus === 'sending' ? 'Sending SOS...' :
                 sosStatus === 'success' ? 'SOS Sent Successfully!' :
                 'Failed to send SOS'}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleSosClick}
            disabled={sending}
            className="group flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/40 transition-all duration-300"
          >
            <span className="text-white text-sm font-bold text-right">
              EMERGENCY
              <br />
              SOS
            </span>
            <div className={`w-12 h-12 rounded-full bg-[#b70000] ${sending ? 'animate-ping' : 'animate-pulse'} flex items-center justify-center`}>
              <div className="w-8 h-8 rounded-full bg-[#ff0707] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </button>
        </div>
      </main>
    </motion.section>
  );
};

export default MainContent;
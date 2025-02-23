import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import ChatbotIcon from './ChatbotIcon';
import BreakingNews from './BreakingNews';
import NewsSlider from './NewsSlider';
import ReliefProgram from './ReliefProgram';
import { motion } from 'framer-motion';

function HomePage() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load content. Please check your connection.');
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-center p-8 bg-red-500/10 rounded-lg backdrop-blur-sm">
          <p className="text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <ErrorBoundary>
          <BreakingNews />
          <MainContent />
          <ReliefProgram />
          <NewsSlider />
        </ErrorBoundary>
      </div>
      <ChatbotIcon 
        onClick={toggleChatbox} 
        className="fixed bottom-4 right-4" 
      />
    </motion.div>
  );
}

// Add Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white text-center p-8 bg-red-500/10 rounded-lg backdrop-blur-sm">
          <p className="text-lg mb-4">Something went wrong. Please try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default HomePage;
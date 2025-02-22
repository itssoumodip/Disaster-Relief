import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Chatbox from './Chatbox';
import ChatbotIcon from './ChatbotIcon';

function HomePage() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="min-h-screen bg-homepage">
      <MainContent />
      <ChatbotIcon onClick={toggleChatbox} />
      <Chatbox isOpen={isChatboxOpen} onClose={toggleChatbox} />
      <div className="fixed bottom-6 right-6">
        <Link to="/login" className="bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full p-4 text-white font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
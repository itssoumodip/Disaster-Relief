import React, { useState } from 'react';
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
    </div>
  );
}

export default HomePage;
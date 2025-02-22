import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Chatbox from './components/Chatbox';
import ChatbotIcon from './components/ChatbotIcon';
import './App.css';

function App() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="min-h-screen bg-homepage">
      <Header />
      <MainContent />
      <ChatbotIcon onClick={toggleChatbox} />
      <Chatbox isOpen={isChatboxOpen} onClose={toggleChatbox} />
    </div>
  );
}

export default App;
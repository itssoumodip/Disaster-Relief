import React from 'react';
import { Bot } from 'lucide-react';

const ChatbotIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full p-2 shadow-lg"
    >
      <Bot className="w-8 h-8 text-white" />
    </button>
  );
};

export default ChatbotIcon;
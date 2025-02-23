import React from 'react';
import { Bot } from 'lucide-react';
const ChatbotButton = () => {
  const openChatbot = () => {
    window.open("https://relief-bot-jckqrpnf2vzfucjhr62yvg.streamlit.app/", "_blank");
  };

  return (
    <button
      className="fixed bottom-6 left-6 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full p-2 shadow-lg"
      onClick={openChatbot}
    >
      <Bot className="w-8 h-8 text-white" />
    </button>
  );
};

export default ChatbotButton;
import React, { useState } from 'react';
import { Bot, Send, MessageSquare } from 'lucide-react';

const Chatbox = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate chatbot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm Hopper, your AI assistant. How can I help you?", sender: 'bot' },
      ]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 left-4 right-4 md:right-auto md:w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 ease-in-out">
      <header className="bg-gray-700/50 backdrop-blur-sm border-b border-gray-600 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 rounded-full p-2">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">HOPPER</h1>
        </div>
        <button onClick={onClose} className="text-white">X</button>
      </header>

      <main className="p-4 flex flex-col h-80">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
              {message.sender === 'bot' && (
                <div className="bg-cyan-500 rounded-full p-2 mt-2">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`bg-${message.sender === 'user' ? 'cyan-600' : 'gray-700/50'} backdrop-blur-sm rounded-lg p-4 max-w-[80%]`}>
                <p className="text-white">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="bg-gray-600 rounded-full p-2 mt-2">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg p-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400"
          />
          <button onClick={handleSend} className="bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full p-2">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Chatbox;
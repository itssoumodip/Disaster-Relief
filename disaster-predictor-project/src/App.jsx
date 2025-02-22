import React, { useState } from 'react';
import { Clock, Cloud, Menu } from 'lucide-react';
import NewsAlert from './components/NewsAlert';
import NewsCarousel from './components/NewsCarousel';
import './App.css';

function App() {
  const [currentDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-homepage">
      {/* Header */}
      <header className="bg-[#4c9f5000] p-4 flex justify-between items-center border-b border-white/20">
        <div className="flex items-center gap-4">
          <img src="src/assets/ogLogo.png" alt="Impact Relief" className="h-20 w-20" />
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-white text-lg font-bold">ROAD & MAPS</a>
            <a href="#" className="text-white text-lg font-bold">NEWS</a>
            <a href="#" className="text-white text-lg font-bold">WEATHER</a>
            <a href="#" className="text-white text-lg font-bold">ABOUT US</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
              <button className="px-4 py-1 text-white text-lg border-3 rounded-2xl font-bold">SIGN UP</button>
              <button className="px-4 py-1 text-white text-lg border-3 rounded-2xl font-bold">LOGIN</button>
          <div className="text-white text-sm hidden md:block">
            <div className="flex items-center text-lg font-bold gap-2">
              {/* <Clock size={16} /> */}
              {currentDate.toLocaleTimeString('en-US', { 
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            <div>
              {currentDate.toLocaleDateString('en-US', { 
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })}
            </div>
          </div>
          <button className="md:hidden">
            <Menu className="text-white" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8">
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-8">BREAKING NEWS</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <NewsAlert />
          <NewsCarousel />
        </div>

        {/* Join Section */}
        <div className="mt-8">
          <button className="bg-[#B15B5B] text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-[#9c4f4f] transition-colors">
            Join our Relief Program as a Volunteer and Make a Real Difference in the Lives of Those in Need!
          </button>
        </div>

        {/* Emergency Status */}
        <div className="fixed bottom-6 left-6 flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-[#b70000] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#ff0707]" />
          </div>
          <span className="text-white text-sm font-bold">
            EMEREMERGENCY
            <br />
            SOS
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
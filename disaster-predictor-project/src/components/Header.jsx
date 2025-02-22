import React, { useState } from 'react';
import { Menu } from 'lucide-react';

function Header() {
  const [currentDate] = useState(new Date());

  return (
    <header className="bg-gray-600/20 p-4 flex justify-between items-center">
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
        <button className="px-4 py-1 sm:text-lg text-white text-sm border-3 rounded-2xl font-bold">SIGN UP</button>
        <button className="px-4 py-1 sm:text-lg text-white text-sm border-3 rounded-2xl font-bold">LOGIN</button>
        <div className="text-white text-lg font-semibold hidden md:block">
          <div className="flex items-center font-bold gap-2">
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
  );
}

export default Header;
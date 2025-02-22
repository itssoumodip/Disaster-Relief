import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Header() {
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <header className="bg-transparent p-1 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-4">
        <img src="https://images.unsplash.com/vector-1740248627798-ba4a0e70534e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Impact Relief" className="h-20 w-20" />
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-white text-lg font-bold" onClick={() => navigate('/')}>HOME</a>
          <a href="#" className="text-white text-lg font-bold">ROAD & MAPS</a>
          <a href="#" className="text-white text-lg font-bold">NEWS</a>
          <a href="#" className="text-white text-lg font-bold">WEATHER</a>
          <a href="#" className="text-white text-lg font-bold">ABOUT US</a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <button 
          className="px-4 py-1 sm:text-lg text-white text-sm font-bold"
          onClick={() => navigate('/create-account')}
        >
          SIGN UP
        </button>
        <button 
          className="px-4 py-1 sm:text-lg text-white text-sm font-bold"
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>
        <div className="text-white text-lg font-semibold hidden md:block">
          <div className="flex items-center px-5 font-bold gap-2">
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
        <button className="md:hidden px-4">
          <Menu className="text-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;
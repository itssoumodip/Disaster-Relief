import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Add these animation variants at the top of your file
const menuVariants = {
  open: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  closed: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ROAD & MAPS', path: '/maps' },
    { name: 'NEWS', path: '/news' },
    { name: 'WEATHER', path: '/weather' },
    { name: 'ABOUT US', path: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/vector-1740248627798-ba4a0e70534e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Impact Relief" 
            className="h-12 w-12 rounded-lg shadow-md" 
          />
          <nav className="hidden md:flex gap-6 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="px-3 py-2 text-white text-sm font-medium hover:bg-gray-700 rounded-lg transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.path);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            className="px-4 py-2 text-white font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => navigate('/create-account')}
          >
            Sign Up
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-md"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <div className="text-white font-medium bg-white/10 px-4 py-2 rounded-lg">
            <div className="text-sm">
              {currentDate.toLocaleTimeString('en-US', { 
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            <div className="text-xs opacity-75">
              {currentDate.toLocaleDateString('en-US', { 
                month: 'short',
                day: '2-digit'
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu with improved transitions */}
      <div 
        className={`
          z-3 absolute top-full left-0 right-0 
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          bg-black/95 backdrop-blur-lg py-4 px-4 rounded-lg shadow-xl 
          md:hidden border
        `}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href="#"
              className="px-4 py-3 text-white text-sm font-medium 
                bg-gray-800/70 hover:bg-gray-700/90 rounded-lg 
                transition-all duration-300 transform hover:scale-[1.02]
                hover:shadow-lg backdrop-blur-sm
                border border-white/10"
              style={{
                transitionDelay: `${index * 50}ms`
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.path);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-white/10 my-2"></div>
          <div className="flex flex-col gap-2">
            <button 
              className="w-full py-3 text-white font-medium 
                bg-gray-800/70 hover:bg-gray-700/90 
                rounded-lg transition-all duration-300 
                transform hover:scale-[1.02] hover:shadow-lg 
                backdrop-blur-sm border border-white/10"
              onClick={() => {
                navigate('/create-account');
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </button>
            <button 
              className="w-full py-3 bg-blue-600 text-white font-medium 
                hover:bg-blue-700 rounded-lg transition-all duration-300 
                transform hover:scale-[1.02] shadow-md 
                hover:shadow-lg backdrop-blur-sm"
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
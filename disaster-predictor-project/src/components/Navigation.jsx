import React, { useState } from 'react';
import { Menu, X, Home, Cloud, Map, Newspaper, Users } from 'lucide-react';
import './NavigationStyles.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
    { icon: <Cloud className="w-5 h-5" />, label: 'Weather', href: '/weather' },
    { icon: <Map className="w-5 h-5" />, label: 'Roadmap', href: '/roadmap' },
    { icon: <Newspaper className="w-5 h-5" />, label: 'News', href: '/news' },
    { icon: <Users className="w-5 h-5" />, label: 'About Us', href: '/about' },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          Impact Relief
        </div>

        {/* Desktop Menu */}
        <div className="desktopMenu">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="desktopMenuItem"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobileMenu">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobileMenuItem"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
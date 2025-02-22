import React from 'react';
import NewsAlert from './NewsAlert';
import NewsCarousel from './NewsCarousel';

function MainContent() {
  return (
    <main className="p-4 md:p-8">
      <h1 className="text-white text-6xl md:text-8xl font-bold mb-8">BREAKING NEWS</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <NewsAlert />
        <NewsCarousel />
      </div>

      {/* Join Section */}
      <div className="mt-8 justify-center flex flex-col items-center px-2 py-1">
        <button className="bg-[#B15B5B] text-white px-4 py-3 rounded-2xl md:text-md text-sm font-semibold shadow-lg hover:bg-[#9c4f4f] transition-colors">
          Join our Relief Program as a Volunteer and Make a Real Difference in the Lives of Those in Need!
        </button>
      </div>

      {/* Emergency Status */}
      <div className="fixed bottom-6 left-6 flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-[#b70000] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#ff0707]" />
        </div>
        <span className="text-white text-sm font-bold">
          EMERGENCY
          <br />
          SOS
        </span>
      </div>
    </main>
  );
}

export default MainContent;
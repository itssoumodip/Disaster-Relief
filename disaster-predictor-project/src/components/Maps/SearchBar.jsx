import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex gap-4 max-w-2xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter location (e.g., Mumbai)"
        className="flex-1 px-1 py-4 rounded-xl bg-white/10 backdrop-blur-sm 
        border border-white/20 text-white placeholder-white/50 focus:outline-none 
        focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => onSearch(query)}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white 
        rounded-xl transition-all duration-300 font-medium"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
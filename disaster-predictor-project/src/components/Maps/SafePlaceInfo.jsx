import React from 'react';

const SafePlaceInfo = ({ safePlace }) => {
  if (!safePlace) return null;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-bold text-white mb-4">Nearest Safe Place</h2>
      <div className="bg-green-500/10 border-l-4 border-green-500 rounded-r-lg p-4">
        <h3 className="font-medium text-white">{safePlace.name}</h3>
        <p className="text-white/70">
          Distance: {safePlace.distance.toFixed(2)} km
        </p>
      </div>
    </div>
  );
};

export default SafePlaceInfo;
import React from 'react';

const DisasterList = ({ disasters }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-bold text-white mb-4">
        Past Disasters (Last 3 Years)
      </h2>
      <div className="space-y-4">
        {disasters.length === 0 ? (
          <p className="text-white/70">No disasters recorded in this area.</p>
        ) : (
          disasters.map((disaster, index) => (
            <div
              key={index}
              className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-4"
            >
              <h3 className="font-medium text-white">{disaster.title}</h3>
              <p className="text-white/70 text-sm">
                {new Date(disaster.geometry[0].date).toDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisasterList;
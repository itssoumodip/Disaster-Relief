import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';

const WeatherCard = ({ temperature, humidity, windSpeed, condition, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Current Weather</h2>
          <p className="text-gray-600 mt-1 capitalize">{condition}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={condition}
          className="w-20 h-20"
        />
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Cloud className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="text-lg font-semibold">{temperature}°C</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Droplets className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-lg font-semibold">{humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Wind className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="text-lg font-semibold">{windSpeed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
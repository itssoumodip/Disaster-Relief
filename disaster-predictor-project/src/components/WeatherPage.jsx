import React, { useState, useEffect } from 'react';

const WeatherPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');
  const apiKey = '329bfce305b22184509260414a901aca'; // Replace with your OpenWeather API key

  const fetchWeatherData = async (city) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        fetch(currentWeatherUrl),
        fetch(forecastUrl),
      ]);

      if (!currentWeatherResponse.ok) {
        throw new Error('City not found');
      }

      const currentWeatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();

      setCurrentWeather(currentWeatherData);
      setForecast(forecastData.list.filter(item => item.dt_txt.includes('12:00:00')));
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-900 to-blue-950 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-white tracking-tight">
          Weather <span className="text-blue-500">Forecast</span>
        </h1>

        {/* Search Form */}
        <form onSubmit={handleFormSubmit} className="flex justify-center mb-12 drop-shadow-lg">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Search for a city..."
              required
              className="w-full text-white px-6 py-4 text-lg rounded-full border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </form>

        {/* Current Weather Card */}
        {currentWeather && (
          <div className="mb-12 p-8 bg-white rounded-2xl shadow-lg backdrop-blur-sm bg-opacity-90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-6">
                <img
                  className="w-32 h-32"
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{currentWeather.name}</h2>
                  <p className="text-5xl font-bold text-blue-600 my-2">
                    {Math.round(currentWeather.main.temp)}°C
                  </p>
                  <p className="text-lg text-gray-600 capitalize">{currentWeather.weather[0].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-xl font-semibold text-gray-800">{currentWeather.main.humidity}%</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-xl font-semibold text-gray-800">{currentWeather.wind.speed} m/s</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Sunrise</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' })}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Sunset</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Forecast Section */}
        {forecast.length > 0 && (
          <div className="forecast">
            <h2 className="text-2xl font-bold mb-6 text-white">5-Day Forecast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {forecast.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-medium text-gray-500 mb-3">
                    {new Date(item.dt_txt).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                  </h3>
                  <img
                    className="w-16 h-16 mx-auto"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                  />
                  <p className="text-2xl font-bold text-gray-800 text-center my-2">
                    {Math.round(item.main.temp)}°C
                  </p>
                  <p className="text-sm text-gray-600 text-center capitalize">{item.weather[0].description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
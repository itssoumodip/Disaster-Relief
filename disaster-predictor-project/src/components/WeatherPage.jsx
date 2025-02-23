import React from 'react';

const WeatherPage = () => {
  // Sample data for demonstration purposes
  const weatherData = [
    {
      dt: 1618317040,
      temp: { day: 15, min: 10, max: 20 },
      humidity: 80,
    },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <WeatherCard
        temperature={20}
        humidity={60}
        windSpeed={5}
        condition="Clear"
        icon="01d"
      />
      <HistoricalWeather data={weatherData} period="week" />
    </div>
  );
};

export default WeatherPage;
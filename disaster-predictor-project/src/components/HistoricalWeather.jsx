import React from 'react';
import { format } from 'date-fns';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const HistoricalWeather = ({ data, period }) => {
  const chartData = data.map((day) => ({
    date: format(new Date(day.dt * 1000), 'MMM dd'),
    max: Math.round(day.temp.max),
    min: Math.round(day.temp.min),
    humidity: day.humidity,
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {period === 'week' ? '7 Days' : '30 Days'} Forecast
      </h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="max"
              stroke="#ff7300"
              name="Max Temp (°C)"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="min"
              stroke="#387908"
              name="Min Temp (°C)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="humidity"
              stroke="#1e40af"
              name="Humidity (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalWeather;
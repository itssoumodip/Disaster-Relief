import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import NewsPage from './components/NewsPage';
import Navigation from './components/Navigation';
import WeatherPage from './components/WeatherPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
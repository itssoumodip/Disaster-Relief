import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import NewsPage from './components/NewsPage';
import MainContent from './components/MainContent';
import SosAlert from './components/SosAlert';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/main-content" element={<MainContent />} />
            <Route path="/sos-alert" element={<SosAlert />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
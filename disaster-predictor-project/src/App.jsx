import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import NewsPage from './components/NewsPage';
import MainContent from './components/MainContent';
import SosAlert from './components/SosAlert';
import WeatherPage from './components/WeatherPage';
import MapPage from './components/Maps/MapPage';
import AboutPage from './components/AboutUs/AboutPage';
import VolunteerPage from './components/Volunteer/VolunteerPage';
import ScrollToTop from './components/utils/ScrollToTop';
import NewsDetail from './components/NewsDetail';
import ProfilePage from './components/Profile/ProfilePage';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/utils/PrivateRoute';
import AuthPage from './components/auth/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/latest" element={<NewsDetail />} />
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/sos-alert" element={<SosAlert />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/maps" element={<MapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
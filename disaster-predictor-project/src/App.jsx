import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-homepage">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
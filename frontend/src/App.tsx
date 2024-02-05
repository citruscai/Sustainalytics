import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import ActivityDisplayPage from './pages/ActivityDisplay';

function App() {
  const [message, setMessage] = useState('');

  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/activity" element={<ActivityDisplayPage/>}/>
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

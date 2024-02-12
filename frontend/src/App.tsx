import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import ActivityDisplayPage from './pages/ActivityDisplay';
import UsPage from './pages/UsPage';
import CanadaPage from './pages/CanadaPage';
import NorwayUkPage from './pages/NorwayUkPage';
import AustraliaPage from './pages/AustraliaPage';
import DataPage from './pages/DataPage';
import MapPage from './pages/MapPage';
import CountryPage from './pages/CountryPages';



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
          <Route path="/uspage" element={<UsPage/>}/>
          <Route path="/canadapage" element={<CanadaPage/>}/>
          <Route path="/norwayukpage" element={<NorwayUkPage/>}/>
          <Route path="/australiapage" element={<AustraliaPage/>}/>
          <Route path='/data' element={<DataPage/>}/>
          <Route path='/map' element={<MapPage/>}/>
          <Route path="/countries" element={<CountryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
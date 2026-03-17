import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages - Marketing
import Landing from './pages/marketing/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Pages - App
import AppLayout from './components/app/AppLayout';
import Dashboard from './pages/app/Dashboard';
import Requests from './pages/app/Requests';
import RequestFlow from './pages/app/RequestFlow';
import Assets from './pages/app/Assets';
import CreativeDirection from './pages/app/CreativeDirection';
import CreatorProfiles from './pages/app/CreatorProfiles';
import Plans from './pages/app/Plans';
import Settings from './pages/app/Settings';

function App() {
  return (
    <LanguageProvider>
      {/* Global Noise Overlay */}
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* App Routes */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="requests/new" element={<RequestFlow />} />
            <Route path="assets" element={<Assets />} />
            <Route path="direction" element={<CreativeDirection />} />
            <Route path="creators" element={<CreatorProfiles />} />
            <Route path="plans" element={<Plans />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HospitalBeds from './pages/HospitalBeds';
import BloodBankLocator from './pages/BloodBankLocator';
import OrganFinder from './pages/OrganFinder';
import DonorPage from './pages/DonorPage';
import OrganFinderConfirmation from './pages/OrganFinderConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospital-beds" element={<HospitalBeds />} />
            <Route path="/blood-banks" element={<BloodBankLocator />} />
            <Route path="/organ-finder" element={<OrganFinder />} />
            <Route path="/donor" element={<DonorPage />} />
            <Route path="/organ-finder/confirmation" element={<OrganFinderConfirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
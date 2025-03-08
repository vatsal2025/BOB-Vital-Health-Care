import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-gray-800">BOBHealthCare</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/hospital-beds" className="text-gray-600 hover:text-gray-900">
              ICU Beds
            </Link>
            <Link to="/blood-banks" className="text-gray-600 hover:text-gray-900">
              Blood Banks
            </Link>
            <Link to="/organ-finder" className="text-gray-600 hover:text-gray-900">
              Organ Finder
            </Link>
            <Link to="/donor" className="text-gray-600 hover:text-gray-900">
              Become a Donor
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useMemo } from 'react';
import { MapPin, Search, ExternalLink } from 'lucide-react';
import { bloodBanks } from '../data/bloodBanks';

function BloodBankLocator() {
  const [location, setLocation] = useState('');
  const [bloodType, setBloodType] = useState('');

  const filteredBloodBanks = useMemo(() => {
    if (!location && !bloodType) return [];
    
    return bloodBanks.filter(bank => {
      const locationMatch = !location || bank.location === location;
      const hasBloodType = !bloodType || (bank.inventory[bloodType] > 0);
      return locationMatch && hasBloodType;
    });
  }, [location, bloodType]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blood Bank Locator</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Faridabad">Faridabad</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
            <select
              className="w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        
        <button 
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
          onClick={() => {
            if (!location && !bloodType) {
              alert('Please select at least one search criteria');
            }
          }}
        >
          <Search className="h-5 w-5 mr-2" />
          Search Blood Banks
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        {(!location && !bloodType) ? (
          <p className="text-gray-600">Enter a location and blood type to see available blood banks.</p>
        ) : filteredBloodBanks.length === 0 ? (
          <p className="text-gray-600">No blood banks found matching your criteria.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Bank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBloodBanks.map((bank, index) => (
                  <tr key={bank.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bank.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {bloodType ? bank.inventory[bloodType] : 'Select blood type'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a 
                        href={bank.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {bank.address}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BloodBankLocator;
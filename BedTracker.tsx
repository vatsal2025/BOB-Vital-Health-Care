import React, { useState } from 'react';
import { Filter, ChevronDown, MapPin } from 'lucide-react';
import { Button } from "../components/ui/button";
import { LocationType, HospitalType } from '../types';

interface BedTrackerProps {
  onSearch: (location: LocationType, hospitalType: HospitalType) => void;
}

const BedTracker: React.FC<BedTrackerProps> = ({ onSearch }) => {
  const [location, setLocation] = useState<LocationType>("");
  const [hospitalType, setHospitalType] = useState<HospitalType>("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const locations: LocationType[] = ["Bulandshehar", "Gurgaon", "Noida", "Ghaziabad", "Faridabad", "Delhi"];
  const hospitalTypes: HospitalType[] = ["", "Private", "Government"];

  const handleLocationToggle = () => {
    setIsLocationOpen(!isLocationOpen);
    setIsTypeOpen(false);
  };

  const handleTypeToggle = () => {
    setIsTypeOpen(!isTypeOpen);
    setIsLocationOpen(false);
  };

  const handleLocationSelect = (loc: LocationType) => {
    setLocation(loc);
    setIsLocationOpen(false);
  };

  const handleTypeSelect = (type: HospitalType) => {
    setHospitalType(type);
    setIsTypeOpen(false);
  };

  const handleSearch = () => {
    onSearch(location, hospitalType);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-subtle border border-border animate-slide-up space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-medium">Find Available ICU Beds</h2>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Location</label>
          <div className="relative">
            <button
              type="button"
              className="input-field flex items-center justify-between mb-4"
              onClick={handleLocationToggle}
            >
              {location || "Select City"}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLocationOpen && (
              <div className="absolute z-10 bg-white border rounded-md w-full mt-1">
                {locations.map((loc) => (
                  <div key={loc} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLocationSelect(loc)}>
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Type of Hospital</label>
          <div className="relative">
            <button
              type="button"
              className="input-field flex items-center justify-between"
              onClick={handleTypeToggle}
            >
              {hospitalType || "Select Type"}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isTypeOpen && (
              <div className="absolute z-10 bg-white border rounded-md w-full mt-1">
                {hospitalTypes.map((type) => (
                  <div key={type} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleTypeSelect(type)}>
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full mt-4">Search</Button>
    </div>
  );
};

export default BedTracker;


import React, { useState } from 'react';
import Header from '../components/Header';
import BedTracker from '../components/BedTracker';
import HospitalList from '../components/HospitalList';
import Map from '../components/Map';
import { Activity } from 'lucide-react';
import { LocationType, HospitalType } from '../types';
import { hospitals } from '../data/hospitals';

const Index = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("");
  const [selectedType, setSelectedType] = useState<HospitalType>("");

  const handleSearch = (location: LocationType, hospitalType: HospitalType) => {
    setSelectedLocation(location);
    setSelectedType(hospitalType);
    setSearchPerformed(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Hero Section */}
        <div className="w-full mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 rounded-3xl -z-10" />
          <div className="flex items-center justify-center py-10">
            <div className="bg-blue-500/10 p-3 rounded-full mr-4">
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">ICU Bed Tracker</h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <BedTracker onSearch={handleSearch} />
            
            {searchPerformed && (
              <div className="mt-8 animate-fade-in">
                <HospitalList 
                  hospitals={hospitals}
                  location={selectedLocation}
                  hospitalType={selectedType}
                />
              </div>
            )}
          </div>
          
          <div>
            <Map location={selectedLocation || "Bulandshehar"} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

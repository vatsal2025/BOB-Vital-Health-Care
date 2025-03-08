
import React, { useState } from 'react';
import { MapPin, Phone, Ambulance } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Hospital } from '../types';

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const [showContact, setShowContact] = useState(false);
  const [showAmbulance, setShowAmbulance] = useState(false);

  const handleGetDirections = () => {
    const { lat, lng } = hospital.coordinates;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
    if (showAmbulance) setShowAmbulance(false);
  };

  const handleAmbulanceClick = () => {
    setShowAmbulance(!showAmbulance);
    if (showContact) setShowContact(false);
  };

  return (
    <div className="hospital-card bg-white p-4 rounded-lg shadow-sm border border-border animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-foreground">{hospital.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{hospital.address}</p>
          
          {(showContact || showAmbulance) && (
            <div className="mt-2 text-sm text-blue-500 animate-slide-up">
              {showContact && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>{hospital.contactNumber}</span>
                </div>
              )}
              {showAmbulance && (
                <div className="flex items-center space-x-2">
                  <Ambulance className="h-3 w-3" />
                  <span>{hospital.ambulanceNumber}</span>
                </div>
              )}
            </div>
          )}
          
          {hospital.specialization && (
            <p className="text-sm text-muted-foreground mt-1">{hospital.specialization}</p>
          )}
          
          <div className="flex items-center space-x-4 mt-2">
            <div>
              <span className="text-xs text-muted-foreground">Price Range:</span>
              <p className="text-sm">{hospital.priceRange}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Available:</span>
              <p className="text-sm font-bold text-blue-500">{hospital.bedsAvailable} ICU beds</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button 
            className="button-primary px-4 py-2 text-sm flex items-center space-x-2" 
            onClick={handleGetDirections}
          >
            <MapPin className="h-4 w-4" />
            <span>Get Directions</span>
          </Button>
          
          <Button 
            variant="outline" 
            className={`px-3 py-2 text-sm ${showContact ? 'bg-blue-500/10 border-blue-500/30' : ''}`}
            onClick={handleContactClick}
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Contact</span>
          </Button>
          
          <Button 
            variant="outline" 
            className={`px-3 py-2 text-sm ${showAmbulance ? 'bg-blue-500/10 border-blue-500/30' : ''}`}
            onClick={handleAmbulanceClick}
          >
            <Ambulance className="h-4 w-4" />
            <span className="sr-only">Ambulance</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;

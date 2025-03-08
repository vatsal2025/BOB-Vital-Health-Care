
import React from 'react';
import { Hospital, LocationType, HospitalType } from '../types';
import HospitalCard from './HospitalCard';

interface HospitalListProps {
  hospitals: Hospital[];
  location: LocationType;
  hospitalType: HospitalType;
}

const HospitalList: React.FC<HospitalListProps> = ({ 
  hospitals, 
  location, 
  hospitalType 
}) => {
  // Filter hospitals based on location and type
  const filteredHospitals = hospitals.filter(hospital => {
    const locationMatch = !location || hospital.location === location;
    const typeMatch = !hospitalType || hospital.type === hospitalType;
    return locationMatch && typeMatch;
  });

  if (filteredHospitals.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <p className="text-muted-foreground">No hospitals found matching your criteria.</p>
        <p className="text-sm mt-2">Try changing your search parameters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-slide-up">
      {filteredHospitals.map(hospital => (
        <HospitalCard key={hospital.id} hospital={hospital} />
      ))}
    </div>
  );
};

export default HospitalList;

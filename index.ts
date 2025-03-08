
export type LocationType = 
  | "Bulandshehar"
  | "Gurgaon"
  | "Noida" 
  | "Ghaziabad"
  | "Faridabad"
  | "Delhi"
  | "";

export type HospitalType = "Private" | "Government" | "";

export interface Hospital {
  id: string;
  name: string;
  location: LocationType;
  type: HospitalType;
  specialization?: string;
  bedsAvailable: number;
  priceRange: string;
  contactNumber: string;
  ambulanceNumber: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  minBeds?: number;
  maxBeds?: number;
}

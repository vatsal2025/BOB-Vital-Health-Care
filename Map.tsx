
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface MapProps {
  location?: string;
}

const Map: React.FC<MapProps> = ({ location = "Bulandshehar" }) => {
  // Use encoded location for URL
  const encodedLocation = encodeURIComponent(location);
  
  // Use OpenStreetMap instead of Google Maps API (no API key required)
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.35%2C77.6%2C28.55&layer=mapnik&marker=${encodedLocation}`;
  
  // URL for opening in new tab (links to Google Maps since it's better for directions)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  
  return (
    <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-border shadow-subtle bg-muted/50 sticky top-20">
      <div className="absolute inset-0">
        <iframe 
          title="Map"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          src={mapUrl}
          className="w-full h-full"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="absolute top-4 left-4 z-10">
        <a href={googleMapsUrl} 
           target="_blank" 
           rel="noopener noreferrer"
           className="glass-effect px-4 py-2 rounded-lg text-sm flex items-center space-x-2 bg-white/70 hover:bg-white/90 transition-colors cursor-pointer">
          <span>View larger map</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default Map;


import React from 'react';
import { Activity, Droplet, Bed, Heart, User } from 'lucide-react';
import { Button } from "../components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50 animate-slide-down" >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <div className="flex items-center space-x-2">
          <Activity className="h-7 w-7 text-blue-500" />
          <span className="text-2xl font-semibold text-blue-500">BobVitalCare</span>
        </div> */}
        
        {/* <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2 text-foreground/80 hover:text-blue-500 transition-colors">
            <Droplet className="h-5 w-5" />
            <span>Blood nnnBanks</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-foreground/80 hover:text-blue-500 transition-colors">
            <Bed className="h-5 w-5" />
            <span>ICU Beds</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-foreground/80 hover:text-blue-500 transition-colors">
            <Heart className="h-5 w-5" />
            <span>Organ Finder</span>
          </a>
        </nav> */}
        
        {/* <Button className="button-primary flex items-center space-x-2 px-6 py-2">
          <User className="h-4 w-4" />
          <span>Become a donor</span>
        </Button> */}
      </div>
    </header>
  );
};

export default Header;

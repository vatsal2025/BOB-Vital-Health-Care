import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Bed, Vegan as Organ, Heart, Clock, Users, Building2 } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(46, 66, 101, 0.8), rgba(46, 66, 101, 0.9)), url("https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">BOB Vital Health Care</h1>
            <p className="text-xl mb-8">Connecting Lives, Saving Futures</p>
            <Link 
              to="/donor" 
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Become a Donor
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Support</p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="p-6">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare resource management at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/blood-banks" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <Droplet className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-primary">Blood Bank Locator</h2>
              <p className="text-gray-600">Find blood banks with specific blood types available near you.</p>
            </div>
          </Link>

          <Link to="/hospital-beds" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <Bed className="h-12 w-12 text-accent mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-primary">ICU Bed Tracking</h2>
              <p className="text-gray-600">Real-time tracking of available ICU beds in nearby hospitals.</p>
            </div>
          </Link>

          <Link to="/organ-finder" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <Organ className="h-12 w-12 text-secondary mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-primary">Organ Finder</h2>
              <p className="text-gray-600">Connect with organ donation centers and track availability.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-secondary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About BOB Vital Health Care</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize healthcare resource management, BOB Vital Health Care has been at the forefront of connecting patients with critical medical resources since 2025. Our platform seamlessly integrates with hospitals and healthcare providers across the nation, ensuring that life-saving resources are just a click away.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that every second counts in emergency situations. That's why we've developed a robust system that provides real-time updates on blood availability, ICU beds, and organ donations, making it easier for healthcare providers to save lives.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-primary" />
                <p className="text-xl font-semibold text-primary">Committed to Saving Lives</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-gray-600">Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
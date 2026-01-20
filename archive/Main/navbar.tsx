import React from 'react';

interface NavbarProps {
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignupClick }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"></div>
            <span className="text-2xl font-bold text-indigo-900">ArtistsHub</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#web-developers" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Developers
            </a>
            <a href="#architects" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Architects
            </a>
            <a href="#fashion-designers" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Fashion
            </a>
          </div>

          <button
            onClick={onSignupClick}
            className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
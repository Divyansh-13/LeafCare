// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-500 text-white py-4 sticky top-0 z-50 shadow-md w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/*Logo*/}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
          <img src="/logo.png" alt="Leaf Care Logo" className="h-8 sm:h-10" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            LeafCare
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-2 sm:space-x-4 items-center">
          <a href="#about" className="hover:font-bold">About</a>
          <a href="#how-to-use" className="hover:font-bold">How to Use</a>
          <a href="#contact" className="hover:font-bold">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden flex items-center text-white focus:outline-none">
          <span className="material-icons">MENU</span> {/* Or replace with a hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-500 text-white px-4 py-6 space-y-4 shadow-md absolute w-full z-40 top-16 left-0">
          <a href="#about" className="block hover:font-bold">About</a>
          <a href="#how-to-use" className="block hover:font-bold">How to Use</a>
          <a href="#contact" className="block hover:font-bold">Contact</a>
          <Link to="/login" className="block bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Log in
          </Link>
          <Link to="/signup" className="block bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
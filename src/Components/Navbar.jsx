import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { scrollToSection } from '../Redux/ScrollSlice';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = (section) => {
    dispatch(scrollToSection(section));
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Skills', section: 'skills' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-500 flex items-center">
          <Code className="mr-2 text-pink-400" />
          <span>Mitva Shah</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.section)}
              className="text-white hover:text-pink-500 transition-colors"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.section)}
                className="block py-2 text-white/80 hover:text-white"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleScroll("contact")}
              className="block w-full text-center px-4 py-2 bg-pink-700 text-white rounded-full hover:bg-pink-800"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

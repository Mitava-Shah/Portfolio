import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="  px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500 flex items-center">
          <Code className="mr-2 text-pink-400" />
          <span>Mitava Shah</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-pink/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a 
            href="#contact"
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-white/80 hover:text-white"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="block w-full text-center px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
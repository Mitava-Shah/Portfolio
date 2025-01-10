import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-300 hover:text-pink-400 transition-colors duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: FaGithub,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
      label: "LinkedIn"
    },
    {
      href: "https://twitter.com/yourusername",
      icon: FaTwitter,
      label: "Twitter"
    },
    {
      href: "mailto:your.email@example.com",
      icon: FaEnvelope,
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-800 pt-20 pb-6 overflow-hidden">
      {/* Decorative Wave SVG */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          />
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent mb-4">
              About Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate full-stack developer dedicated to creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with 
            <FaHeart className="text-pink-500 animate-pulse" /> 
            by Mitva Shah © {currentYear}
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
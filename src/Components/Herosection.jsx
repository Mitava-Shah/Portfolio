import React from 'react';
import { Download, Layers, Server, Database, Share2 } from 'lucide-react';

const HeroSection = () => {
  const TechSkillBadge = ({ icon: Icon, label }) => (
    <div className="flex items-center bg-white/10 px-3 py-1 rounded-full space-x-2 text-white">
      <Icon size={16} className="text-pink-900" />
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div className="relative px-4 flex items-center justify-center min-h-screen pt-20 bg-gradient-to-tl via-pink-500 from-pink-900 to-white">
      <div className="text-center relative z-10">
        <div className="relative flex flex-row-reverse justify-between items-center">
          {/* Professional Photo Placeholder with Gradient Border */}
          <div className="mx-auto w-1/2 h-48 rounded-full mb-6 
            bg-gradient-to-br from-pink-900 to-black 
            p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-black"></div>
          </div>
          <div className='text-left'>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 
              bg-gradient-to-r from-white to-pink-400 
              bg-clip-text text-transparent">
              Hi, I am Mitava Shah
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 
              bg-gradient-to-r from-white to-pink-400 
              bg-clip-text text-transparent">
              Full-Stack MERN Developer
            </h1>
            <p className="text-xl mb-8 text-white/80">
              Crafting innovative web solutions with cutting-edge technologies.
              Transforming complex ideas into elegant, scalable applications.
            </p>
            {/* Tech Skill Badges */}
            <div className="flex  space-x-2 mb-8">
              <TechSkillBadge icon={Database} label="MongoDB" />
              <TechSkillBadge icon={Share2} label="Express" />
              <TechSkillBadge icon={Layers} label="React" />
              <TechSkillBadge icon={Server} label="Node.js" />

            </div>
            <div className="flex  space-x-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 
                  bg-pink-600 text-white 
                  rounded-full hover:bg-pink-700 
                  transition-all transform hover:-translate-y-1 
                  shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" /> Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center px-6 py-3 
                  border-2 border-white/20 
                  text-white rounded-full 
                  hover:bg-white/10 
                  transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.5"
          d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,160C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.3"
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,186.7C672,203,768,213,864,202.7C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
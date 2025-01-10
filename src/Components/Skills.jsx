import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const TechSkill = ({ icon: Icon, name, description }) => (
  <div className="relative w-60 h-64 perspective">
    <div className="relative w-full h-full transition-transform duration-700 group">
      {/* Card Container with 3D Transformation */}
      <div className="absolute w-full h-full bg-pink-600/80 rounded-2xl transition-transform duration-700 transform [transform-style:preserve-3d] group-hover:rotate-y-180 shadow-xl shadow-pink-500/40 hover:shadow-pink-500/60">
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-2xl backface-hidden flex flex-col items-center justify-center text-center p-6 shadow-inner shadow-pink-400/40 group-hover:opacity-0 transition-opacity duration-500 bg-black">
          <div className="w-36 h-36 rounded-full border-4 border-pink-300/50 flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-90 shadow-lg shadow-pink-500/50 bg-pink-800/50 backdrop-blur-sm">
            <Icon className="w-20 h-20 text-pink-100 drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-bold text-pink-100 drop-shadow-lg">
            {name}
          </h3>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full rounded-2xl backface-hidden rotate-y-180 flex items-center justify-center p-6 text-center shadow-inner shadow-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black backdrop-blur-sm">
          <p className="text-pink-100 text-base leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const technologies = [
    { icon: FaHtml5, name: 'HTML', description: 'Crafting semantic and accessible web structures with modern HTML5 features and best practices.' },
    { icon: FaCss3Alt, name: 'CSS', description: 'Creating responsive and beautiful designs with advanced CSS3 features and animations.' },
    { icon: FaJsSquare, name: 'JavaScript', description: 'Building interactive and dynamic web applications with modern JavaScript (ES6+).' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', description: 'Rapidly building custom designs with utility-first CSS framework.' },
    { icon: FaReact, name: 'React', description: 'Developing scalable and maintainable front-end applications with modern React practices.' },
    { icon: FaNodeJs, name: 'Node.js', description: 'Creating fast and scalable server-side applications and APIs.' },
    { icon: SiExpress, name: 'Express.js', description: 'Building robust backend services and RESTful APIs with Express.js.' },
    { icon: SiMongodb, name: 'MongoDB', description: 'Managing and optimizing NoSQL databases for scalable applications.' },
    { icon: FaGithub, name: 'GitHub', description: 'Collaborating and managing code with modern Git workflow practices.' },
    { icon: FaGitAlt, name: 'Git', description: 'Version control and code management with advanced Git features.' }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-black py-16 px-4 min-h-screen">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-6 animate-pulse">
            <span className="text-white">
              Technology Skill Set
            </span>
          </h2>
          <p className="text-xl text-pink-300 drop-shadow-md">
            Comprehensive Full Stack Development Expertise
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech, index) => (
            <TechSkill
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
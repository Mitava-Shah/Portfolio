import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const TechBadge = ({ label, icon: Icon }) => (
  <div className="flex items-center bg-pink-950/50 px-3 py-1 rounded-full text-pink-200 text-sm">
    <Icon className="mr-1 h-4 w-4" />
    {label}
  </div>
);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-pink-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-pink-600/20 backdrop-blur-sm transition-opacity duration-300 z-20 flex items-center justify-center gap-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative z-30">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} label={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and secure payment integration.",
      image: "/api/placeholder/600/400",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
        { name: "Tailwind", icon: SiTailwindcss }
      ]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/api/placeholder/600/400",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress }
      ]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with interactive visualizations and reporting.",
      image: "/api/placeholder/600/400",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Node.js", icon: FaNodeJs }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-pink-300">
            Showcasing My Latest Development Work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
const TechSkill = ({ icon: Icon, name, description, color }) => (
  <div className="relative w-60 h-64 perspective">
    <div className="relative w-full h-full transition-all duration-700 group">
      {/* Card Container with 3D Transformation */}
      <div className="absolute w-full h-full transition-transform duration-700 
        [transform-style:preserve-3d] group-hover:rotate-y-180 
        rotate-y-0 rounded-2xl">

        {/* Front Side */}
        <div className={`
          absolute w-full h-full ${color} rounded-2xl 
          backface-hidden flex flex-col items-center justify-center 
          text-center p-6 shadow-2xl transition-all duration-500 
          group-hover:opacity-0`}
        >
          {/* Icon Container */}
          <div className="w-36 h-36 rounded-full border-4 border-white 
            flex items-center justify-center mb-4 
            transition-transform duration-300 group-hover:scale-90">
            <Icon className="w-20 h-20 text-white" />
          </div>

          {/* Technology Name */}
          <h3 className="text-2xl font-bold text-white 
            transition-all duration-300 group-hover:opacity-50">
            {name}
          </h3>
        </div>

        {/* Back Side */}
        <div className={`
          absolute w-full h-full ${color} 
          backface-hidden rotate-y-180 
          flex items-center justify-center 
          p-6 text-center rounded-2xl 
          shadow-2xl opacity-0 group-hover:opacity-100`}
        >
          <p className="text-white text-base leading-relaxed 
            transition-all duration-500 transform 
            group-hover:translate-y-0 translate-y-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);



const Skills = () => {
  const technologies = [
    {
      icon: FaHtml5,
      name: 'HTML',
      description: 'HTML (Hypertext Markup Language) is the standard language for creating web pages. It defines the structure and layout of a webpage, using elements like headings, paragraphs, links, images, and more.',
      color: 'bg-orange-500 bg-opacity-90'
    },
    {
      icon: FaCss3Alt,
      name: 'CSS',
      description: 'CSS (Cascading Style Sheets) is used to style and visually format the HTML structure. It controls the layout, color schemes, fonts, and responsiveness of the website, enabling developers to create visually engaging designs.',
      color: 'bg-pink-500 bg-opacity-90'
    },
    {
      icon: FaJsSquare,
      name: 'JavaScript',
      description: 'JavaScript is a dynamic programming language used to add interactivity to web pages. It allows developers to implement features like animations, form validation, and data manipulation.',
      color: 'bg-yellow-500 bg-opacity-90'
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to construct custom designs directly in HTML. It enables rapid development and a flexible approach to styling without writing custom CSS.',
      color: 'bg-teal-500 bg-opacity-90'
    },
    {
      icon: FaReact,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components, manage state, and build dynamic single-page applications with a smooth user experience.',
      color: 'bg-cyan-500 bg-opacity-90'
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      description: 'Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code server-side. It is commonly used for building scalable, high-performance server applications and APIs.',
      color: 'bg-green-500 bg-opacity-90'
    },
    {
      icon: SiExpress,
      name: 'Express.js',
      description: 'Express.js is a minimal and flexible web application framework for Node.js. It simplifies the process of building APIs and web applications by providing robust tools for handling routes, middleware, and HTTP requests.',
      color: 'bg-gray-500 bg-opacity-90'
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      description: 'MongoDB is a NoSQL database used for storing data in a flexible, JSON-like format. It is highly scalable and is commonly used for applications that require a fast, distributed database system.',
      color: ' bg-emerald-500 bg-opacity-90'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      description: 'GitHub is a cloud-based platform for version control and collaborative software development. It allows developers to manage and share code using Git and provides features like pull requests, issues, and GitHub Actions.',
      color: 'bg-purple-500 bg-opacity-90'
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      description: 'Git is a distributed version control system used to track changes in code during development. It allows developers to manage code history, collaborate with others, and efficiently merge changes from multiple contributors.',
      color: 'bg-red-500 bg-opacity-90'
    }
  ];

  return (
  
    <div className="bg-slate-100 py-10 px-4">
      <div className="">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Skill Set</h2>
          <p className="text-xl text-gray-600">
            Comprehensive Full Stack Development Technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {technologies.map((tech, index) => (
            <TechSkill
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Skills;
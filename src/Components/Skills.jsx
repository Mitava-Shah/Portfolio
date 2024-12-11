import React from 'react';
import Slider from 'react-slick';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechIcon = ({ icon: Icon, name, description, color }) => (
  <div className="flex flex-col items-center justify-center group p-6 transition-all duration-500 transform hover:scale-105">
    {/* Icon Circle with Hover Effect */}
    <div
      className={`w-28 h-28 rounded-full border-4 ${color} flex items-center justify-center mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
    >
      <Icon className="w-12 h-12" />
    </div>

    {/* Technology Name */}
    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
      {name}
    </span>

    {/* Technology Description */}
    <p className="text-sm text-gray-600 mt-2 text-center group-hover:text-gray-800 transition-colors">
      {description}
    </p>
  </div>
);

const Skills = () => {
  const technologies = [
    {
      icon: FaHtml5,
      name: 'HTML',
      description: 'HTML (Hypertext Markup Language) is the standard language for creating web pages. It defines the structure and layout of a webpage, using elements like headings, paragraphs, links, images, and more.',
      color: 'border-orange-500 bg-orange-50 hover:bg-orange-100'
    },
    {
      icon: FaCss3Alt,
      name: 'CSS',
      description: 'CSS (Cascading Style Sheets) is used to style and visually format the HTML structure. It controls the layout, color schemes, fonts, and responsiveness of the website, enabling developers to create visually engaging designs.',
      color: 'border-blue-500 bg-blue-50 hover:bg-blue-100'
    },
    {
      icon: FaJsSquare,
      name: 'JavaScript',
      description: 'JavaScript is a dynamic programming language used to add interactivity to web pages. It allows developers to implement features like animations, form validation, and data manipulation.',
      color: 'border-yellow-500 bg-yellow-50 hover:bg-yellow-100'
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to construct custom designs directly in HTML. It enables rapid development and a flexible approach to styling without writing custom CSS.',
      color: 'border-teal-500 bg-teal-50 hover:bg-teal-100'
    },
    {
      icon: FaReact,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components, manage state, and build dynamic single-page applications with a smooth user experience.',
      color: 'border-cyan-500 bg-cyan-50 hover:bg-cyan-100'
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      description: 'Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code server-side. It is commonly used for building scalable, high-performance server applications and APIs.',
      color: 'border-green-500 bg-green-50 hover:bg-green-100'
    },
    {
      icon: SiExpress,
      name: 'Express.js',
      description: 'Express.js is a minimal and flexible web application framework for Node.js. It simplifies the process of building APIs and web applications by providing robust tools for handling routes, middleware, and HTTP requests.',
      color: 'border-gray-500 bg-gray-50 hover:bg-gray-100'
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      description: 'MongoDB is a NoSQL database used for storing data in a flexible, JSON-like format. It is highly scalable and is commonly used for applications that require a fast, distributed database system.',
      color: 'border-emerald-500 bg-emerald-50 hover:bg-emerald-100'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      description: 'GitHub is a cloud-based platform for version control and collaborative software development. It allows developers to manage and share code using Git and provides features like pull requests, issues, and GitHub Actions.',
      color: 'border-purple-500 bg-purple-50 hover:bg-purple-100'
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      description: 'Git is a distributed version control system used to track changes in code during development. It allows developers to manage code history, collaborate with others, and efficiently merge changes from multiple contributors.',
      color: 'border-red-500 bg-red-50 hover:bg-red-100'
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,              // Enable autoplay
  autoplaySpeed: 3000,         // Interval between slides in milliseconds
  pauseOnHover: true,          // Pause autoplay when hovering over the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative bg-white">
      {/* White SVG Wave */}
      <svg
        className="absolute top-[-6rem] left-0 w-full h-24 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f1f5f9"
          fillOpacity="1"
          d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,117.3C672,96,768,64,864,69.3C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="bg-slate-100 py-16 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Skill Set</h2>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive Full Stack Development Technologies
          </p>

          {/* Slider for displaying icons with descriptions */}
          <ReactSlick {...settings}>
            {technologies.map((tech, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <TechIcon
                  icon={tech.icon}
                  name={tech.name}
                  description={tech.description}
                  color={tech.color}
                />
              </div>
            ))}
          </ReactSlick>
        </div>
      </div>
    </div>
  );
};

export default Skills;

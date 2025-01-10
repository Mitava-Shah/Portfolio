import React from 'react';
import { FaGraduationCap, FaLaptop } from 'react-icons/fa';

const TimelineItem = ({ date, title, company, description, Icon, iconBgColor }) => (
    <div className="flex items-start mb-8 relative ">
        <div className={`${iconBgColor} p-3 rounded-full mr-4 absolute -left-10`}>
            <Icon className="w-6 h-6" />
        </div> 
        <div className="flex-grow pl-6">
            <div className="bg-white p-4 rounded-lg shadow-md ">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 mb-1">{company}</p>
                <p className="text-sm text-gray-500 mb-2">{date}</p>
                {description && (
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
);

const AboutMe = () => {
    const timelineData = [
        {
            date: '2021-2024',
            title: 'Bachelor of Computer Applications (BCA)',
            company: 'ROFEL College, Vapi',
            description: [
                'Gained strong foundation in computer applications and software development',
                'Completed comprehensive academic program in computer applications'
            ],
            Icon: FaGraduationCap,
            iconBgColor: 'bg-pink-100 text-pink-600'
        },
        {
            date: 'April 2024 - July 2024',
            title: 'MERN Stack Developer Intern',
            company: 'RnD Technosoft',
            description: [
                'Gained hands-on experience in full-stack web development',
                'Worked on real-world projects using MERN stack technologies',
                'Developed and maintained web applications'
            ],
            Icon: FaLaptop,
            iconBgColor: 'bg-green-100 text-green-600'
        },
        {
            date: 'August 2024 - November 2024',
            title: 'MERN Stack Developer',
            company: 'RnD Technosoft',
            description: [
                'Continued developing robust web applications',
                'Implemented advanced features and optimized existing projects',
                'Collaborated with cross-functional teams to deliver high-quality solutions'
            ],
            Icon: FaLaptop,
            iconBgColor: 'bg-blue-100 text-blue-600'
        }
    ];

    return (
        <div className="relative bg-black">
        {/* White SVG Wave */}
        <svg
            className="absolute top-[-6rem] left-0 w-full h-24 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                fill="#000000"
                fillOpacity="1"
                d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,117.3C672,96,768,64,864,69.3C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div className="bg-black py-12 px-4">
            <div className="w-[90%] mx-auto">
                <h2 className="text-xl md:text-4xl mb-10 text-center font-bold
              bg-gradient-to-r from-white to-pink-400 
              bg-clip-text text-transparent">
                    Professional Journey
                </h2>
                <div className="border-l-4 border-gray-300 pl-4">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
};

export default AboutMe;
import React from 'react';
import { FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, company, description, Icon, iconBgColor, index }) => (
    <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex items-start mb-12 relative group"
    >
        <motion.div 
            whileHover={{ scale: 1.1 }}
            className={`${iconBgColor} p-4 rounded-full mr-4 absolute -left-[4.3rem] shadow-lg transition-all duration-300 ease-in-out`}
        >
            <Icon className="w-6 h-6" />
        </motion.div>
        <div className="flex-grow pl-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 group-hover:border-gray-500">
                <p className="text-sm text-gray-400 mb-2 font-mono">{date}</p>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {title}
                </h3>
                <p className="text-lg text-gray-300 mb-4">{company}</p>
                {description && (
                    <ul className="space-y-2">
                        {description.map((item, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
                            >
                                <div className="w-2 h-2 rounded-full bg-gray-500 mr-3" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </motion.div>
);

const AboutMe = () => {
    const timelineData = [
        {
            date: '2021-2024',
            title: 'Bachelor of Computer Applications',
            company: 'ROFEL College, Vapi',
            description: [
                'Specialized in advanced software development methodologies and computer applications',
                'Achieved academic excellence through comprehensive coursework in modern programming paradigms',
                'Developed strong analytical and problem-solving skills through practical projects'
            ],
            Icon: FaGraduationCap,
            iconBgColor: 'bg-pink-500/20 text-pink-400'
        },
        {
            date: 'April 2024 - July 2024',
            title: 'MERN Stack Developer Intern',
            company: 'RnD Technosoft',
            description: [
                'Engineered full-stack web applications using MongoDB, Express.js, React, and Node.js',
                'Collaborated with senior developers on production-level projects and client deliverables',
                'Implemented responsive designs and optimized application performance'
            ],
            Icon: FaLaptop,
            iconBgColor: 'bg-green-500/20 text-green-400'
        },
        {
            date: 'August 2024 - November 2024',
            title: 'MERN Stack Developer',
            company: 'RnD Technosoft',
            description: [
                'Led development of key features for enterprise web applications',
                'Optimized application performance resulting in 40% improvement in load times',
                'Mentored junior developers and contributed to technical documentation'
            ],
            Icon: FaLaptop,
            iconBgColor: 'bg-blue-500/20 text-blue-400'
        }
    ];

    return (
        <div className="relative bg-black min-h-screen">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
            <div className="relative py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl mb-16 text-center font-bold"
                    >
                        <span className="bg-gradient-to-r from-white via-pink-400 to-blue-500 bg-clip-text text-transparent">
                            Professional Journey
                        </span>
                    </motion.h2>
                    <div className="border-l-4 border-gray-700 pl-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-pink-950/30 hover:bg-pink-950/50 px-4 py-2 rounded-full text-pink-200 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </motion.a>
);

const Input = ({ label, type, placeholder, value, onChange, name }) => (
  <div className="mb-6">
    <label className="block text-pink-200 mb-2 text-sm">{label}</label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="w-full px-4 py-3 rounded-lg bg-pink-950/20 border border-pink-500/20 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-500 transition-colors duration-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-pink-950/20 border border-pink-500/20 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-500 transition-colors duration-300"
      />
    )}
  </div>
);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const socialLinks = [
    {
      href: "mailto:your.email@example.com",
      icon: FaEnvelope,
      label: "Email"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/yourusername",
      icon: FaGithub,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/yourusername",
      icon: FaTwitter,
      label: "Twitter"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-pink-300 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities. Feel free to reach out through the form below or connect via social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <Input
                label="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Subject"
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
              <Input
                label="Message"
                type="textarea"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-semibold hover:from-pink-500 hover:to-pink-400 transition-all duration-300 shadow-lg shadow-pink-500/25"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Available For</h3>
              <ul className="text-pink-200 space-y-2">
                <li>• Full-time Opportunities</li>
                <li>• Freelance Projects</li>
                <li>• Technical Consultations</li>
                <li>• Collaborations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
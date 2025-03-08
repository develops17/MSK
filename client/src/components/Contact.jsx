import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocused({
      ...focused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    setFocused({
      ...focused,
      [field]: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message sent! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative bg-black overflow-hidden min-h-screen py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
          {/* Left Section with just "Let's Talk!" */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center md:items-start"
          >
            <div className="font-unbounded font-bold leading-none text-center md:text-left">
              <h1 className="text-7xl sm:text-8xl md:text-9xl text-white">
                Let's
              </h1>
              <h1 className="text-8xl sm:text-9xl md:text-10xl text-[#D80074] -mt-4">
                Talk
              </h1>
            </div>
          </motion.div>

          {/* Right Section with Form - transparent background with blur effect */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-8 font-unbounded">
              {/* Name field without icon */}
              <div className="group">
                <label 
                  htmlFor="name" 
                  className={`transition-all duration-300 text-sm mb-2 block ${
                    focused.name || formData.name 
                      ? 'text-[#D80074]' 
                      : 'text-gray-400'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className="w-full bg-[#D80074]/10 border-b-2 border-[#D80074]/30 focus:border-[#D80074] px-4 py-3 text-white outline-none transition-all duration-300 hover:border-[#D80074]/50 rounded-md font-unbounded"
                  required
                />
              </div>
              
              {/* Email field without icon */}
              <div className="group">
                <label 
                  htmlFor="email" 
                  className={`transition-all duration-300 text-sm mb-2 block ${
                    focused.email || formData.email 
                      ? 'text-[#D80074]' 
                      : 'text-gray-400'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className="w-full bg-[#D80074]/10 border-b-2 border-[#D80074]/30 focus:border-[#D80074] px-4 py-3 text-white outline-none transition-all duration-300 hover:border-[#D80074]/50 rounded-md font-unbounded"
                  required
                />
              </div>
              
              {/* Message field without icon - changed text to white for consistency */}
              <div className="group">
                <label 
                  htmlFor="message" 
                  className={`transition-all duration-300 text-sm mb-2 block ${
                    focused.message || formData.message 
                      ? 'text-[#D80074]' 
                      : 'text-gray-400'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  className="w-full bg-[#D80074]/10 border-b-2 border-[#D80074]/30 focus:border-[#D80074] px-4 py-3 text-white outline-none transition-all duration-300 min-h-[100px] hover:border-[#D80074]/50 resize-none rounded-md font-unbounded"
                  required
                />
              </div>
              
              {/* Submit button with modern style */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#D80074" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full mt-8 px-8 bg-[#D80074] text-white font-unbounded font-medium py-4 rounded-md transition-all duration-300 ease-in-out flex items-center justify-center hover:shadow-lg hover:shadow-[#D80074]/30 group"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    Send Message 
                    <motion.span 
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
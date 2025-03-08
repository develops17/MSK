import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 font-unbounded transition-all duration-300 ${scrolled ? 'py-0' : 'py-0.5'}`}>
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 -my-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="h-24 w-auto" src="logo1.png" alt="Logo" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 bg-black/50 p-1 rounded-full border border-gray-800">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeLink === link.name 
                      ? 'text-white bg-[#D80074]' 
                      : 'text-gray-300 hover:bg-gray-900 hover:text-[#D80074]'
                  }`}
                  onClick={() => setActiveLink(link.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D80074] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center transition-all duration-300 hover:bg-white hover:text-[#D80074] border border-transparent hover:border-[#D80074] group"
            >
              CONTACT US
              <motion.div
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                <FaArrowRight className="transition-transform group-hover:rotate-45" />
              </motion.div>
            </motion.button>
          </div>
          
          {/* Hamburger Menu - Mobile - Fixed Position */}
          <div className="md:hidden fixed right-4 top-3 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-900/80 border border-gray-800 focus:outline-none"
              aria-label="Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-[#D80074] mb-1.5 block"
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-[#D80074] mb-1.5 block"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-[#D80074] block"
              ></motion.span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-lg pt-16"
          >
            <div className="px-4 py-3 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.name 
                      ? 'bg-[#D80074]/20 text-[#D80074]' 
                      : 'text-gray-300 hover:bg-gray-900 hover:text-[#D80074]'
                  }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* CTA Button - Mobile */}
              <motion.div 
                variants={linkVariants}
                className="pt-2 pb-3"
              >
                <button className="w-full bg-[#D80074] text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center transition-colors duration-300 hover:bg-[#D80074]/80">
                  CONTACT US
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
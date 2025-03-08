import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import VantaBackground from './VantaBackground';
import TypewriterEffect from './TypewriterEffect';

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after a short delay to ensure smooth loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black font-unbounded text-center overflow-hidden">
      {/* Dynamic background */}
      <VantaBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D80074]/10 filter blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D80074]/5 filter blur-[100px] animate-pulse"></div>
      
      {/* Main content container */}
      <motion.div 
        className="px-6 md:px-12 lg:px-32 flex flex-col items-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Branded tag */}
        <motion.div 
          variants={itemVariants}
          className="mb-6"
        >
          <span className="bg-gray-900 text-[#D80074] font-bold px-6 py-2 rounded-full border border-gray-800 text-sm inline-block">
            EVENT MARKETING AGENCY
          </span>
        </motion.div>
        
        {/* Main heading with animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative leading-tight"
          variants={itemVariants}
        >
          MSK GLOBAL: <br className="md:hidden" />
          <span className="bg-[#D80074] text-black font-bold px-2 py-1 inline-block transform -rotate-1 my-2">
            Activating
          </span> <br className="hidden sm:block md:hidden" />
          Brands,
          <span className="relative inline-block mx-2">
            <TypewriterEffect />
          </span>
        </motion.h1>
        
        {/* Megaphone icon with animation - kept in original position */}
        <motion.div
  className="absolute top-60 right-0 sm:right-20 md:right-40 lg:right-60 -mt-4 sm:mt-0"
  variants={iconVariants}
  whileHover="hover"
>
  <FaBullhorn className="text-white bg-[#D80074] p-4 rounded-full text-5xl sm:text-6xl shadow-xl" />
</motion.div>
        
        {/* Subtitle */}
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-satoshi max-w-3xl"
          variants={itemVariants}
        >
          We elevate events through innovation, technology, and unforgettable experiences that drive results for your brand.
        </motion.h2>
        
        {/* CTA Button - OUR SERVICES button removed */}
        <motion.div
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D80074] text-white px-8 py-3 rounded-full text-lg font-bold flex items-center transition-all duration-300 hover:bg-white hover:text-[#D80074] border border-transparent hover:border-[#D80074] shadow-lg shadow-[#D80074]/20 group"
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
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-1 font-satoshi">Scroll Down</span>
          <FaChevronDown className="text-[#D80074]" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}

export default HeroSection;
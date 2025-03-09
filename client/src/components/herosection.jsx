import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import VantaBackground from './VantaBackground';
// import TypewriterEffect from './TypewriterEffect';

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after a short delay to ensure smooth loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animation variants with fade in from TOP to BOTTOM
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },  // Start 30px ABOVE final position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
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
    <section className="relative flex flex-col items-center sm:h-[80vh] md:h-[70vh] w-full bg-black font-unbounded text-center overflow-hidden mb-0">
  {/* Dynamic background */}
  {/* <VantaBackground /> */}
  
  {/* Decorative elements */}
  <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D80074]/10 filter blur-[80px] animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D80074]/5 filter blur-[100px] animate-pulse"></div>
      {/* Main content container - increased horizontal padding */}
      <motion.div 
        className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center z-10 relative mt-[20vh]"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
            {/* Main heading with animation - centered with increased padding */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-6xl lg:text-5xl font-medium text-white mb-6 relative leading-tight mx-auto px-4"
              variants={itemVariants}
            >
              MSK GLOBAL: <br className="md:hidden" />
              <span className="bg-[#D80074] text-black font-medium px-2 py-1 inline-block transform -rotate-1 my-2">
                Activating
              </span> <br className="hidden sm:block md:hidden" />
              Brands,
              <span className="relative inline-block mx-2">
                {/* <TypewriterEffect /> */}
                Driving Growth
              </span> 
              
              <motion.span
                className="inline-flex ml-2 align-middle"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaBullhorn className="text-white bg-[#D80074] px-3 pt-2 pb-1 rounded-full text-5xl sm:text-6xl lg:text-7xl" />
              </motion.span>
            </motion.h1>
            
            {/* Subtitle - centered with increased width */}
            <motion.h2 
              className="text-sm sm:text-xl md:text-1xl text-gray-300 mb-5 font-satoshi mx-auto max-w-2xl px-4"
              variants={itemVariants}
            >
              We elevate Events through Innovation, Technology & Unforgettable Experiences.
            </motion.h2>
            
            {/* CTA Button - centered */}
            <motion.div
              variants={itemVariants}
              className="mx-auto"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="bg-[#D80074] text-white px-8 py-3 rounded-full text-lg font-md flex items-center transition-all duration-300 hover:bg-white hover:text-[#D80074] border border-transparent hover:border-[#D80074] shadow-lg shadow-[#D80074]/20 group outline-none focus:outline-none"
              >
                CONTACT NOW
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
    </section>
  );
}

export default HeroSection;
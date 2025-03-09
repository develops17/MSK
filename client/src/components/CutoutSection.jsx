import React, { useState, useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import AgencyCard from './AgencyCard'
import { motion, useScroll, useTransform } from 'framer-motion'

const CutoutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the image fade-in from bottom
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center h-[55vh] sm:h-[55vh] md:h-[90vh] w-full bg-gradient-to-b from-black via-black-300 via-pink-700 to-black overflow-hidden"
    >
      {/* Marquee background text with responsive speed */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
        <Marquee gradient={false} speed={isMobile ? 150 : 210}>
          <div className="text-4xl sm:text-5xl md:text-9xl font-medium text-white font-unbounded mx-4 whitespace-nowrap">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-4xl sm:text-5xl md:text-9xl font-medium text-white font-unbounded mx-4 whitespace-nowrap">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-4xl sm:text-5xl md:text-9xl font-medium text-white font-unbounded mx-4 whitespace-nowrap">
            Engage - Innovate - Elevate -
          </div>
        </Marquee>
      </div>

      {/* Central image with responsive sizing */}
      <motion.div 
        className="relative z-10 flex justify-center items-end w-full pb-20 sm:pb-20 md:pb-[70px]" 
        variants={imageVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <img 
          src="https://framerusercontent.com/images/tVDg230sxN3guk1uVhxlFkIu1s.png" 
          alt="Cutout" 
          className="w-[85%] sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto mb-0 object-contain" 
        />
      </motion.div>

      {/* Agency card with responsive positioning */}
      <div className="absolute bottom-[0px] sm:bottom-[-20px] md:bottom-[40px] z-50 w-full px-4 md:px-0">
        <AgencyCard />
      </div>
    </section>
  )
}

export default CutoutSection
import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import AgencyCard from './AgencyCard'
import { motion } from 'framer-motion'

const CutoutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <section className="relative flex items-center justify-center h-[45vh] md:h-[90vh] w-full bg-gradient-to-b from-black via-black-300 via-pink-700 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <Marquee gradient={false} speed={210}>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
  <div className="text-5xl md:text-9xl font-medium text-white font-unbounded mx-4">
    Engage - Innovate - Elevate -
  </div>
</Marquee>
      </div>
      <motion.div 
  className="relative z-10 flex justify-center items-end w-full pb-10 md:pb-[70px]" 
  variants={imageVariants}
  initial="hidden"
  animate={isLoaded ? "visible" : "hidden"}
>
  <img 
    src="https://framerusercontent.com/images/tVDg230sxN3guk1uVhxlFkIu1s.png" 
    alt="Cutout" 
    className="w-4/5 md:w-3/4 lg:w-2/3 h-auto mb-0" 
  />
</motion.div>

<div className="absolute bottom-[0px] md:bottom-[40px] z-50 mt-8">
  <AgencyCard />
</div>
    </section>
  )
}

export default CutoutSection
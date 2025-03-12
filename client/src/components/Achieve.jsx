import React, { useRef, useState, useEffect } from 'react';
import { FaLightbulb, FaBullseye, FaUsers, FaStar, FaHandsHelping, FaSmile, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="achievements-section"
      ref={sectionRef}
      className="relative min-h-screen bg-cover bg-center py-6 md:pt-8 md:pb-8 flex flex-col"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-1/2 h-full bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Circles section - at the top */}
      <div className="relative z-10 flex justify-center items-start pt-8 md:pt-16 px-4 gap-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1,
                y: [-15, 0, -15] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.1 },
                y: { 
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.1
                }
              }}
              className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white flex items-center justify-center shadow-lg rounded-full mx-auto"
            >
              <span className="text-center text-xs sm:text-sm md:text-base px-2">13+ Years of Experience</span>
            </motion.div>
          )}
          
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1,
                y: [-15, 0, -15] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: { 
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
              className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white flex items-center justify-center shadow-lg rounded-full mx-auto"
            >
              <span className="text-center text-xs sm:text-sm md:text-base px-2">5000+ Done Projects</span>
            </motion.div>
          )}
          
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1,
                y: [-15, 0, -15] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                y: { 
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.3
                }
              }}
              className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white flex items-center justify-center shadow-lg rounded-full mx-auto"
            >
              <span className="text-center text-xs sm:text-sm md:text-base px-2">300+ Satisfied Brands</span>
            </motion.div>
          )}
          
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1,
                y: [-15, 0, -15] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                y: { 
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.4
                }
              }}
              className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white flex items-center justify-center shadow-lg rounded-full mx-auto"
            >
              <span className="text-center text-xs sm:text-sm md:text-base px-2">30+ Active Countries</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom content container - holds cards and buttons at the bottom */}
      <div className="relative z-10 mt-auto flex flex-col">
        {/* Cards section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-4 px-4 py-4">
          <motion.div 
            className="card bg-black bg-opacity-5 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full md:w-1/4"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex justify-center items-center mb-2">
              <motion.div 
                className="border-2 border-white rounded-lg p-2" 
                style={{ borderRadius: '15px', borderColor: '#D80074' }}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaLightbulb className="text-3xl" style={{ color: '#D80074' }} />
              </motion.div>
            </div>
            <h3 className="text-center text-white font-unbounded mb-1">Innovation</h3>
            <p className="text-center text-white font-satoshi">We combine cutting-edge technology with creativity to deliver unforgettable experiences</p>
          </motion.div>
          <motion.div 
            className="card bg-black bg-opacity-5 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full md:w-1/4"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center items-center mb-2">
              <motion.div 
                className="border-2 border-white rounded-lg p-2" 
                style={{ borderRadius: '15px', borderColor: '#D80074' }}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaBullseye className="text-3xl" style={{ color: '#D80074' }} />
              </motion.div>
            </div>
            <h3 className="text-center text-white font-unbounded mb-1">Customer Acquisition</h3>
            <p className="text-center text-white font-satoshi">We create high-impact strategies that turn audiences into loyal customers.</p>
          </motion.div>
          <motion.div 
            className="card bg-black bg-opacity-5 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full md:w-1/4"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex justify-center items-center mb-2">
              <motion.div 
                className="border-2 border-white rounded-lg p-2" 
                style={{ borderRadius: '15px', borderColor: '#D80074' }}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaUsers className="text-3xl" style={{ color: '#D80074' }} />
              </motion.div>  
            </div>
            <h3 className="text-center text-white font-unbounded mb-1">Client Centric Focus</h3>
            <p className="text-center text-white font-satoshi">Your success is our priority. We prioritize understanding your business goals.</p>
          </motion.div>
        </div>

        {/* Buttons row */}
        <div className="relative z-10 mt-4 mb-4 md:mb-0 flex flex-wrap justify-center gap-3 px-4">
          <motion.button 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-[45px] border border-white/20 text-white font-unbounded text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="text-[#D80074]" />
            Continuous Innovation
          </motion.button>
          <motion.button 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-[45px] border border-white/20 text-white font-unbounded text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="text-[#D80074]" />
            Dedicated Support
          </motion.button>
          <motion.button 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-[45px] border border-white/20 text-white font-unbounded text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="text-[#D80074]" />
            Positive Client Experiences
          </motion.button>
          <motion.button 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md px-6 py-2 rounded-[45px] border border-white/20 text-white font-unbounded text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="text-[#D80074]" />
            Commitment to Excellence
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
import React, { useRef, useState, useEffect } from 'react';
import { FaLightbulb, FaBullseye, FaUsers } from 'react-icons/fa';
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
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-1/2 h-full bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center h-full space-x-4">
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
            className="circle bg-white bg-opacity-10 font-unbounded font-md backdrop-blur-lg w-48 text-white h-48 flex items-center justify-center shadow-lg rounded-full"
            style={{ marginTop: '-350px' }}
          >
            <span className="text-center">13+ Years of Experience</span>
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
            className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-48 h-48 text-white flex items-center justify-center shadow-lg rounded-full"
            style={{ marginTop: '-350px' }}
          >
            <span className="text-center">5000+ Done Projects</span>
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
            className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-48 text-white h-48 flex items-center justify-center shadow-lg rounded-full"
            style={{ marginTop: '-350px' }}
          >
            <span className="text-center">300+ Satisfied Brands</span>
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
            className="circle bg-white bg-opacity-10 font-unbounded backdrop-blur-lg w-48 h-48 text-white flex items-center justify-center shadow-lg rounded-full"
            style={{ marginTop: '-350px' }}
          >
            <span className="text-center">30+ Operating Countries</span>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-around items-end mb-10">
        <motion.div 
          className="card bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg w-1/4"
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
          className="card bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg w-1/4"
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
          className="card bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg w-1/4"
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
    </div>
  );
};

export default AchievementsSection;
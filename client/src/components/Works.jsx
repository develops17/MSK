import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState({});
  const sectionRef = useRef(null);
  const projectRefs = useRef({});

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Visa",
      description: "We designed an immersive experience for Visa's regional leaders and stakeholders by utilizing 360-degree SMD screens displaying interactive content, elevating engagement and event impact.",
      benefits: ["360 degree immersive experience", "100% stakeholder engagement"],
      image: "https://framerusercontent.com/images/kdj8c0XjQznAjUX4vXXe541UESc.jpg?scale-down-to=2048",
      category: "Events"
    },
    {
      id: 2,
      title: "Getz Pharma",
      description: "We organized Pakistan's largest private conference with over 5,000 attendees, creating a cutting-edge visual experience with 23 synchronized screens, immersive content, and the country's largest stage screen.",
      benefits: ["5000+ attendees", "1367 SMD blocks mapped"],
      image: "https://framerusercontent.com/images/kdj8c0XjQznAjUX4vXXe541UESc.jpg?scale-down-to=2048",
      category: "Events"
    },
    {
      id: 3,
      title: "LemFi",
      description: "We executed dynamic on-ground activations, trade events, and strategic partnerships to establish LemFi's brand presence in competitive markets, driving customer acquisition and engagement.",
      benefits: ["5000+ customers acquired", "70% increase in awareness"],
      image: "https://framerusercontent.com/images/kdj8c0XjQznAjUX4vXXe541UESc.jpg?scale-down-to=2048",
      category: "Marketing"
    },
    {
      id: 4,
      title: "Pepsi Co",
      description: "We orchestrated captivating drone shows across the country to launch STING, creating unforgettable experiences that drove brand awareness and consumer engagement.",
      benefits: ["13 drone shows", "25M+ eyeballs"],
      image: "https://framerusercontent.com/images/kdj8c0XjQznAjUX4vXXe541UESc.jpg?scale-down-to=2048",
      category: "Drone Shows"
    },
  ];

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

  // Set up individual observers for each project card
  useEffect(() => {
    const observers = {};

    // Create an observer for each project
    projects.forEach(project => {
      observers[project.id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Update state when a project becomes visible
            setVisibleProjects(prev => ({
              ...prev,
              [project.id]: true
            }));
            observers[project.id].unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
    });

    // Start observing each project ref
    projects.forEach(project => {
      const ref = projectRefs.current[project.id];
      if (ref) {
        observers[project.id].observe(ref);
      }
    });

    // Clean up observers
    return () => {
      projects.forEach(project => {
        if (projectRefs.current[project.id]) {
          observers[project.id]?.unobserve(projectRefs.current[project.id]);
        }
      });
    };
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { 
      y: -20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-unbounded py-16 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-64 h-96 rounded-full bg-[#D80074]/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#D80074]/5 filter blur-3xl"></div>
      
      {/* Section title */}
      <div className="text-center py-10 mb-12 relative z-10">
        <button className="bg-gray-900 text-[#D80074] font-bold px-8 py-3 rounded-full border border-gray-800 hover:bg-[#D80074]/10 transition-all duration-300">
          PROJECTS
        </button>
        <h2 className="text-2xl md:text-3xl font-md mt-6">
          ENGAGING EXPERIENCES, <span className="text-[#D80074]">MEANINGFUL IMPACTS</span>
        </h2>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            ref={el => projectRefs.current[project.id] = el}
            className={`bg-gray-900/80 rounded-2xl border border-gray-800 overflow-hidden transform hover:translate-y-[-5px] transition-all ${
              visibleProjects[project.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '1.2s',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="relative overflow-hidden h-128">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
              />
              <div className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : ''}`}>
                <button className="bg-[#D80074] text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all">
                  View Project
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-[#D80074] text-white text-xs py-1 px-3 rounded-full">
                {project.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#D80074] mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.benefits.map((benefit, index) => (
                  <span key={index} className="bg-gray-800 text-xs text-white px-3 py-1 rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div 
        className={`text-center mt-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '0.8s' }}
      >
        <button className="px-8 py-3 rounded-full border-2 border-[#D80074] text-[#D80074] font-bold hover:bg-[#D80074] hover:text-white transition-all duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default WorkSection;
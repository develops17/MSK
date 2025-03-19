import React, { useState } from 'react';
import { ArrowRight, Layers, Calendar, Lightbulb, Megaphone, FileText, Glasses, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Services() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: -30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const serviceCards = [
    {
      icon: <Megaphone className="text-[#D80074] h-8 w-8" />,
      title: "Experiential Marketing",
      description: "We craft unforgettable brand experiences that engage, excite, and leave a lasting impact. From interactive activations to sensory-driven campaigns, we bring brands closer to their audiences.",
      extendedDescription: "Our experiential marketing campaigns create immersive brand moments that consumers remember. By engaging multiple senses and creating interactive touchpoints, we help brands establish genuine connections that traditional marketing cannot achieve. Each campaign is strategically designed to meet specific marketing objectives while delivering measurable ROI.",
      clientLogos: ["/clients/client1.png", "/clients/client2.png", "/clients/client3.png"],
      previousProjects: [
        { name: "Summer Pop-up Experience for Nike", link: "#" },
        { name: "Interactive Product Launch for Samsung", link: "#" },
        { name: "Multi-city Roadshow for Coca-Cola", link: "#" }
      ]
    },
    {
      icon: <Calendar className="text-[#D80074] h-8 w-8" />,
      title: "Events",
      description: "From large-scale productions to intimate gatherings, we design and execute events that captivate and connect. Every detail is meticulously planned to create seamless and memorable moments.",
      extendedDescription: "Whether organizing corporate conferences, product launches, or exclusive brand experiences, our events team handles every aspect with precision. We combine creative concept development with flawless logistical execution to ensure every event achieves its objectives. Our approach focuses on creating meaningful connections between brands and their audiences.",
      clientLogos: ["/clients/client4.png", "/clients/client5.png", "/clients/client6.png"],
      previousProjects: [
        { name: "Annual Tech Conference for Microsoft", link: "#" },
        { name: "VIP Product Launch for Audi", link: "#" },
        { name: "Charity Gala for Red Cross", link: "#" }
      ]
    },
    {
      icon: <Glasses className="text-[#D80074] h-8 w-8" />,
      title: "Immersive Tech",
      description: "Blending cutting-edge AR, VR, and AI, we create immersive brand interactions that push boundaries. Our tech-driven solutions redefine storytelling and engagement.",
      extendedDescription: "Our team of tech innovators develops custom AR/VR experiences, interactive installations, and AI-powered engagements that create wow moments for consumers. We stay at the forefront of technological advancement to offer brands unique ways to tell their stories and showcase their products. Each solution is designed to be both cutting-edge and accessible to mainstream audiences.",
      clientLogos: ["/clients/client7.png", "/clients/client8.png", "/clients/client9.png"],
      previousProjects: [
        { name: "VR Product Experience for Sony", link: "#" },
        { name: "AR Retail Installation for Adidas", link: "#" },
        { name: "AI-Powered Customer Journey for BMW", link: "#" }
      ]
    },
    {
      icon: <ShoppingBag className="text-[#D80074] h-8 w-8" />,
      title: "Retail & Affiliate Marketing",
      description: "We drive sales through strategic in-store activations and affiliate partnerships that enhance brand visibility. Our data-driven approach ensures measurable growth and impact.",
      extendedDescription: "Our retail and affiliate marketing programs drive conversions by creating engaging in-store experiences and building powerful partnership networks. We help brands maximize their retail presence through custom POP displays, interactive kiosks, and trained brand ambassadors. Our affiliate programs connect brands with influential partners to expand reach and drive measurable sales.",
      clientLogos: ["/clients/client10.png", "/clients/client11.png", "/clients/client12.png"],
      previousProjects: [
        { name: "Nationwide In-Store Campaign for L'Oréal", link: "#" },
        { name: "Affiliate Network Development for Amazon", link: "#" },
        { name: "Pop-up Shop Experience for Sephora", link: "#" }
      ]
    },
    {
      icon: <FileText className="text-[#D80074] h-8 w-8" />,
      title: "Content",
      description: "We craft compelling visual and digital content that resonates with audiences across platforms. From high-quality production to storytelling, we turn ideas into impactful brand narratives.",
      extendedDescription: "Our content studio produces stunning visual assets, engaging video content, and interactive digital experiences that tell brand stories across multiple platforms. With a focus on quality and strategic distribution, we ensure that every piece of content contributes to broader marketing objectives while maintaining brand consistency. Our in-house production team handles everything from concept development to final delivery.",
      clientLogos: ["/clients/client13.png", "/clients/client14.png", "/clients/client15.png"],
      previousProjects: [
        { name: "Brand Story Video Series for Patagonia", link: "#" },
        { name: "Social Media Content Campaign for Netflix", link: "#" },
        { name: "Interactive Brand Guide for Tesla", link: "#" }
      ]
    },
    {
      icon: <Lightbulb className="text-[#D80074] h-8 w-8" />,
      title: "Drone Light Shows",
      description: "As pioneers in drone entertainment, we create breathtaking aerial performances that mesmerize audiences. Our synchronized drone displays transform the night sky into a canvas of light and motion.",
      extendedDescription: "Our drone light shows represent the perfect blend of art and technology, offering brands an innovative way to capture audience attention. Using hundreds of synchronized drones, we create dynamic 3D formations, animations, and brand messages in the sky. These spectacular displays generate massive social sharing and media coverage while creating unforgettable brand moments that audiences remember long after the event.",
      clientLogos: ["/clients/client16.png", "/clients/client17.png", "/clients/client18.png"],
      previousProjects: [
        { name: "New Year Celebration for Dubai Tourism", link: "#" },
        { name: "Product Launch Spectacle for Apple", link: "#" },
        { name: "Festival Opening Ceremony for Coachella", link: "#" }
      ]
    }
  ];

  const toggleCard = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen z-0 bg-black text-white font-unbounded">
      <Navbar />
      
      <div className="container mx-auto px-4 py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-[#D80074] font-semibold text-sm mb-4">
              SERVICES
            </div>
            <h2 className="text-4xl font-medium">How We Bring Brands to Life</h2>
          </div>
          <button className="mt-6 md:mt-0 bg-[#D80074] hover:bg-[#D80074]/90 text-white px-6 py-3 rounded-full flex items-center font-medium transition-colors">
            VIEW ALL SERVICES
            <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((service, index) => (
            <motion.div 
              key={index}
              className={`bg-gray-900 rounded-3xl p-8 flex flex-col ${
                expandedCardIndex === index ? "md:col-span-2" : ""
              } cursor-pointer transition-all duration-300`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => toggleCard(index)}
            >
              <div className="flex justify-between items-start">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                
                {expandedCardIndex === index && (
                  <button 
                    className="text-gray-400 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCardIndex(null);
                    }}
                  >
                    <X className="h-6 w-6" />
                  </button>
                )}
              </div>
              
              <h3 className="text-2xl font-medium mb-6">{service.title}</h3>
              
              <div className="flex-grow">
                <p className="text-gray-400 mb-6 font-satoshi">
                  {service.description}
                </p>
              </div>
              
              <AnimatePresence>
                {expandedCardIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-800 pt-6 mt-4">
                      <h4 className="text-xl font-medium mb-4">About this Service</h4>
                      <p className="text-gray-300 mb-8 font-satoshi">
                        {service.extendedDescription}
                      </p>
                      
                      <h4 className="text-xl font-medium mb-4">Previous Work</h4>
                      <ul className="space-y-3 mb-8">
                        {service.previousProjects.map((project, idx) => (
                          <li key={idx} className="font-satoshi">
                            <a 
                              href={project.link}
                              className="text-[#D80074] hover:underline flex items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ArrowRight className="h-4 w-4 mr-2" />
                              {project.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-xl font-medium mb-4">Clients We've Worked With</h4>
                      <div className="flex flex-wrap gap-4 items-center">
                        {service.clientLogos.map((logo, idx) => (
                          <div key={idx} className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                            {/* Placeholder for client logo */}
                            <span className="text-xs text-center text-gray-400">Client Logo</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {expandedCardIndex !== index && (
                <button 
                  className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCard(index);
                  }}
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Services;
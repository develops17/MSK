import React from 'react';
import { ArrowRight, Layers, Calendar, Lightbulb, Megaphone, FileText, Glasses, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

function Services() {
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
      description: "We craft unforgettable brand experiences that engage, excite, and leave a lasting impact. From interactive activations to sensory-driven campaigns, we bring brands closer to their audiences."
    },
    {
      icon: <Calendar className="text-[#D80074] h-8 w-8" />,
      title: "Events",
      description: "From large-scale productions to intimate gatherings, we design and execute events that captivate and connect. Every detail is meticulously planned to create seamless and memorable moments."
    },
    {
      icon: <Glasses className="text-[#D80074] h-8 w-8" />,
      title: "Immersive Tech",
      description: "Blending cutting-edge AR, VR, and AI, we create immersive brand interactions that push boundaries. Our tech-driven solutions redefine storytelling and engagement."
    },
    {
      icon: <ShoppingBag className="text-[#D80074] h-8 w-8" />,
      title: "Retail & Affiliate Marketing",
      description: "We drive sales through strategic in-store activations and affiliate partnerships that enhance brand visibility. Our data-driven approach ensures measurable growth and impact."
    },
    {
      icon: <FileText className="text-[#D80074] h-8 w-8" />,
      title: "Content",
      description: "We craft compelling visual and digital content that resonates with audiences across platforms. From high-quality production to storytelling, we turn ideas into impactful brand narratives."
    },
    {
      icon: <Lightbulb className="text-[#D80074] h-8 w-8" />,
      title: "Drone Light Shows",
      description: "As pioneers in drone entertainment, we create breathtaking aerial performances that mesmerize audiences. Our synchronized drone displays transform the night sky into a canvas of light and motion."
    }
  ];

  return (
    <div className="min-h-screen z-0 bg-black text-white font-unbounded">
      <div className="container mx-auto px-4 py-16">
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
              className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-medium mb-6">{service.title}</h3>
              <div className="flex-grow">
                <p className="text-gray-400 mb-6 font-satoshi">
                  {service.description}
                </p>
              </div>
              <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
                LEARN MORE
                <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
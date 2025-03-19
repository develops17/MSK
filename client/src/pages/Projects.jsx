import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Tag, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef(null);
  
  // Sample project data remains the same
  const projects = [
    {
      id: 1,
      title: "Samsung Galaxy S23 Launch Event",
      tag: "Product Launch",
      location: "Dubai, UAE",
      date: "March 2023",
      description: "An immersive product launch experience showcasing Samsung's latest flagship smartphone. The event featured interactive tech demos, celebrity appearances, and a stunning light show.",
      longDescription: "This exclusive launch event for the Samsung Galaxy S23 series transformed a Dubai convention center into a high-tech playground where guests could experience the new devices firsthand. The space featured multiple interactive zones demonstrating the phone's advanced camera capabilities, processing power, and new AI features. A central stage hosted product demonstrations, influencer panels, and a live performance by a chart-topping artist. The highlight of the evening was a synchronized drone and laser show that illuminated the night sky with the Samsung logo visible across the Dubai skyline.",
      mainImage: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
        id: 2,
        title: "Nike Air Max Day Experience",
        tag: "Brand Activation",
        location: "New York, USA",
        date: "April 2023",
        description: "A week-long celebration of Nike's iconic Air Max line with interactive installations, limited edition drops, and custom shoe design workshops.",
        longDescription: "To celebrate Air Max Day, we created a multi-sensory brand activation in the heart of SoHo, New York. The pop-up space was designed as a journey through the history of the Air Max, featuring original designs, prototypes, and rare editions. Visitors could walk through a tunnel showcasing the evolution of Air technology, participate in design workshops with renowned sneaker artists, and customize their own Air Max pairs. The space also featured a recording booth where fans could share their personal Air Max stories, which were compiled into a documentary shared across Nike's social platforms. The activation generated over 50 million social impressions and resulted in the highest single-day sales for Air Max products in the store's history.",
        mainImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop"
        ]
      },
      
      {
        id: 3,
        title: "Coca-Cola Summer Beach Tour",
        tag: "Experiential Marketing",
        location: "Multiple Cities, Spain",
        date: "Summer 2023",
        description: "A coastal tour featuring branded beach activations, games, concerts, and refreshment stations across Spain's most popular summer destinations.",
        longDescription: "The Coca-Cola Summer Beach Tour was a three-month activation that traveled to 12 of Spain's most popular coastal destinations. Each stop featured a branded beach club with cooling mist stations, beach games, DJ performances, and complimentary Coca-Cola sampling. The centerpiece was a giant Coca-Cola bottle structure made from recycled plastic that served as both an art installation and a cooling station. Visitors could participate in beach clean-ups in exchange for exclusive merchandise, reinforcing Coca-Cola's sustainability messaging. The tour engaged over 500,000 consumers directly and generated 25 million social impressions, with a 29% increase in sales across the participating regions during the campaign period.",
        mainImage: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=1974&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581385339822-5a2b91d8bf9f?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1932&auto=format&fit=crop"
        ]
      },
      
      {
        id: 4,
        title: "Global Financial Summit 2023",
        tag: "Corporate Conference",
        location: "Singapore",
        date: "September 2023",
        description: "A prestigious financial conference bringing together industry leaders, innovators, and policymakers to discuss the future of global finance.",
        longDescription: "The Global Financial Summit 2023 was a three-day event that transformed Singapore's Marina Bay Sands convention center into a hub of financial innovation and thought leadership. We designed and executed all aspects of the conference, including the main stage with its dynamic LED backdrop, 12 breakout session rooms, networking spaces, and a fintech showcase area featuring 50 exhibitors. The summit hosted 180 speakers, including finance ministers, central bank governors, and CEOs of the world's largest financial institutions. Special features included a real-time global markets data visualization installation, AI-powered networking recommendation system, and sustainable catering showcasing zero-waste practices. The event attracted 3,000 in-person delegates and 50,000 virtual attendees from 94 countries.",
        mainImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
        ]
      },
      
      {
        id: 5,
        title: "Adidas Originals Pop-up Store",
        tag: "Retail Installation",
        location: "Tokyo, Japan",
        date: "November 2023",
        description: "A limited-time retail experience combining art, technology, and fashion to launch Adidas' new originals collection in the heart of Harajuku.",
        longDescription: "Located in Tokyo's trendsetting Harajuku district, this two-week Adidas Originals pop-up store merged Japanese street culture with Adidas' heritage. The space was designed as an immersive customer journey, with each room representing a different era of Adidas history reinterpreted through a Japanese cultural lens. Features included an interactive digital wall where customers could design their own Adidas classics, a sneaker customization lab with local artists, and an AR try-on mirror that projected different styles onto customers. The installation's centerpiece was a 360-degree digital art experience portraying the evolution of street style across global cities. Limited-edition collaborations with Tokyo-based designers were released daily, creating lines around the block and completely selling out within hours of each release.",
        mainImage: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=1974&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1613240781204-32dd3fca7a3c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=2115&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1584735175315-9d5df23be605?q=80&w=2071&auto=format&fit=crop"
        ]
      },
      
      {
        id: 6,
        title: "BMW Vision iNext AR Experience",
        tag: "Immersive Tech",
        location: "Multiple Cities, Europe",
        date: "February 2024",
        description: "A cutting-edge augmented reality installation allowing consumers to explore BMW's futuristic concept vehicle through interactive holograms.",
        longDescription: "The BMW Vision iNext AR Experience was a touring installation that visited premium shopping centers in eight European cities. Using Microsoft HoloLens technology and custom-developed software, visitors could interact with a life-size hologram of BMW's futuristic concept vehicle. The experience allowed users to open doors, explore interior features, change colors and materials, and even simulate driving scenarios in an immersive environment. Engineering details were highlighted through exploded-view animations showing the innovative drive technology and sustainable materials. Participants could also customize their dream version of the vehicle and receive a personalized digital souvenir of their design. The campaign reached over 80,000 direct participants and generated valuable consumer preference data that informed BMW's product development team.",
        mainImage: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1939&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1939&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2064&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        ]
      },
      
      {
        id: 7,
        title: "HSBC Innovation Summit",
        tag: "Corporate Event",
        location: "Hong Kong",
        date: "October 2023",
        description: "A premium banking conference showcasing financial innovation and digital transformation strategies for institutional clients and partners.",
        longDescription: "The HSBC Innovation Summit transformed a Hong Kong convention center into an interactive showcase of the future of banking. The two-day invitation-only event featured keynote presentations from HSBC executives, partner panel discussions, and hands-on demonstrations of new financial technologies. We designed a central 'Innovation Hub' where attendees could experience HSBC's latest digital banking solutions, blockchain applications, and AI-powered financial tools. Custom-built interactive data visualizations displayed global financial trends in real-time across LED columns throughout the venue. A series of exclusive roundtable discussions allowed VIP clients to engage directly with HSBC's senior leadership team. Evening programming included a harbor cruise reception with spectacular multimedia projections on Hong Kong's skyline highlighting HSBC's historical presence in Asia.",
        mainImage: "https://images.unsplash.com/photo-1559223607-a43f990c095d?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1559223607-a43f990c095d?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?q=80&w=2075&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?q=80&w=2070&auto=format&fit=crop"
        ]
      },
      
      {
        id: 8,
        title: "L'Oréal Paris Beauty Festival",
        tag: "Experiential Marketing",
        location: "Paris, France",
        date: "May 2023",
        description: "A glamorous consumer event combining beauty masterclasses, product launches, influencer appearances, and immersive brand experiences.",
        longDescription: "The L'Oréal Paris Beauty Festival was a three-day celebration of beauty held in a historic Parisian venue. The festival featured 40 different experiential zones showcasing L'Oréal's diverse product lines, from skincare to cosmetics to haircare. Visitors could enjoy complimentary mini-makeovers, personalized skincare consultations using AI diagnostic tools, and virtual try-on stations for testing hundreds of products digitally. Celebrity makeup artists and L'Oréal brand ambassadors hosted hourly masterclasses on the main stage, while an influencer content creation studio allowed guests to produce professional-quality social media content with perfect lighting and backgrounds. The event's highlight was an evening runway show featuring diverse models of all ages showcasing L'Oréal's 'Beauty for All' philosophy. The festival attracted 25,000 attendees and generated content reaching over 120 million views across social platforms.",
        mainImage: "https://images.unsplash.com/photo-1674351213-78a1781ed593?q=80&w=1936&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1674351213-78a1781ed593?q=80&w=1936&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
        ]
      }

    // ... other project data remains the same
  ];

  const handleExpandProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
      setCurrentImageIndex(0);
    } else {
      setExpandedProject(projectId);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = (e, images) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    scrollToThumbnail(currentImageIndex + 1);
  };

  const handlePrevImage = (e, images) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    scrollToThumbnail(currentImageIndex - 1);
  };

  const scrollToThumbnail = (index) => {
    if (galleryRef.current) {
      const thumbnails = galleryRef.current.querySelectorAll('.thumbnail');
      if (thumbnails[index]) {
        thumbnails[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  // Scroll to the active thumbnail when expanded
  useEffect(() => {
    if (expandedProject !== null) {
      scrollToThumbnail(currentImageIndex);
    }
  }, [currentImageIndex, expandedProject]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-28">
        {/* Header with brand styling */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-900 text-[#D80074] font-unbounded text-sm mb-4 border border-[#D80074]/30">
            OUR WORK
          </div>
          <h1 className="text-4xl md:text-6xl font-unbounded font-bold bg-gradient-to-r from-white via-[#D80074] to-white bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl font-satoshi text-lg">
            Explore our portfolio of successful campaigns and events that have helped brands connect with their audiences in meaningful ways.
          </p>
        </div>
        
        {/* Vertically stacked projects */}
        <div className="space-y-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              className={`bg-gray-900 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                expandedProject === project.id ? 'shadow-xl shadow-[#D80074]/20 border border-[#D80074]/20' : 'hover:shadow-lg hover:shadow-[#D80074]/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Collapsed view */}
              <div 
                onClick={() => handleExpandProject(project.id)}
                className={`cursor-pointer ${expandedProject === project.id ? 'hidden' : 'block'}`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-72">
                    <img 
                      src={project.mainImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="px-3 py-1 bg-black/40 rounded-full text-[#D80074] text-sm flex items-center font-unbounded">
                          <Tag size={14} className="mr-1" />
                          {project.tag}
                        </span>
                        <span className="px-3 py-1 bg-black/40 rounded-full text-gray-300 text-sm flex items-center font-unbounded">
                          <MapPin size={14} className="mr-1" />
                          {project.location}
                        </span>
                        <span className="px-3 py-1 bg-black/40 rounded-full text-gray-300 text-sm flex items-center font-unbounded">
                          <Calendar size={14} className="mr-1" />
                          {project.date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-unbounded">{project.title}</h3>
                      <p className="text-gray-400 font-satoshi mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <button 
                      className="self-start px-5 py-2.5 rounded-full bg-[#D80074]/10 text-[#D80074] font-unbounded text-sm border border-[#D80074]/20 hover:bg-[#D80074]/20 transition-all flex items-center group"
                    >
                      VIEW PROJECT
                      <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded view */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div 
                    className="p-6 md:p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-black/40 rounded-full text-[#D80074] text-sm flex items-center font-unbounded">
                            <Tag size={14} className="mr-1" />
                            {project.tag}
                          </span>
                          <span className="px-3 py-1 bg-black/40 rounded-full text-gray-300 text-sm flex items-center font-unbounded">
                            <MapPin size={14} className="mr-1" />
                            {project.location}
                          </span>
                          <span className="px-3 py-1 bg-black/40 rounded-full text-gray-300 text-sm flex items-center font-unbounded">
                            <Calendar size={14} className="mr-1" />
                            {project.date}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-unbounded">{project.title}</h2>
                      </div>
                      <button 
                        onClick={() => handleExpandProject(null)}
                        className="p-3 bg-black/60 rounded-full hover:bg-[#D80074]/20 transition-colors border border-[#D80074]/30"
                        aria-label="Close project details"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* Main image display - Horizontal layout */}
                    <div className="relative w-full h-[70vh] mb-8 bg-black rounded-xl overflow-hidden">
                      <motion.img 
                        key={currentImageIndex}
                        src={project.images[currentImageIndex]} 
                        alt={`${project.title} - image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Navigation controls */}
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button 
                          onClick={(e) => handlePrevImage(e, project.images)}
                          className="p-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all transform hover:scale-110 focus:outline-none group"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={28} className="group-hover:text-[#D80074]" />
                        </button>
                        <button 
                          onClick={(e) => handleNextImage(e, project.images)}
                          className="p-3 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all transform hover:scale-110 focus:outline-none group"
                          aria-label="Next image"
                        >
                          <ChevronRight size={28} className="group-hover:text-[#D80074]" />
                        </button>
                      </div>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 px-4 py-2 rounded-full font-unbounded">
                        <span className="text-[#D80074]">{currentImageIndex + 1}</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">{project.images.length}</span>
                      </div>
                    </div>
                    
                    {/* Thumbnails - Horizontal scrolling gallery */}
                    <div className="overflow-x-auto mb-10 pb-2" ref={galleryRef}>
                      <div className="flex space-x-4">
                        {project.images.map((img, idx) => (
                          <div 
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`thumbnail w-28 h-20 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300 ${
                              currentImageIndex === idx 
                                ? 'ring-2 ring-[#D80074] scale-105 shadow-lg shadow-[#D80074]/30' 
                                : 'ring-1 ring-gray-700 opacity-60 hover:opacity-100 hover:ring-[#D80074]/50'
                            }`}
                          >
                            <img 
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project description */}
                    <div className="max-w-4xl border-t border-gray-800 pt-8">
                      <h3 className="text-xl font-bold mb-5 font-unbounded text-[#D80074]">About this Project</h3>
                      <p className="text-gray-300 leading-relaxed font-satoshi text-lg">
                        {project.longDescription}
                      </p>
                      
                      {/* Project stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-black/40 p-5 rounded-xl border border-gray-800">
                          <h4 className="text-lg font-unbounded mb-2">Attendees</h4>
                          <p className="text-3xl font-unbounded text-[#D80074]">2,500+</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border border-gray-800">
                          <h4 className="text-lg font-unbounded mb-2">Engagement</h4>
                          <p className="text-3xl font-unbounded text-[#D80074]">96%</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border border-gray-800">
                          <h4 className="text-lg font-unbounded mb-2">ROI</h4>
                          <p className="text-3xl font-unbounded text-[#D80074]">318%</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Projects;
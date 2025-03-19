import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const About = () => {
  const textRefs = useRef([]);
  const [visibleSection, setVisibleSection] = useState(null);
  const founderImgRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.dataset.section);
          
          // Add animation for founder image when in view
          if (entry.target.dataset.section === 'founder' && founderImgRef.current) {
            founderImgRef.current.classList.add('scale-in-center');
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add refs to the array
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // New paragraph content with 6 lines total
  const aboutCompanyWords = "Found in 2015, company the MSK Global is a global brand with exceptional reputation in the marketing industry. Our dedicated team of professionals works tirelessly to create impactful campaigns that resonate with target audiences worldwide. We specialize in below-the-line marketing strategies that deliver tangible results and maximize ROI for our diverse clientele. Innovation is at the heart of everything we do, allowing us to stay ahead of industry trends and provide cutting-edge solutions. With offices in major cities across three continents, we have the global reach and local expertise to serve businesses of all sizes. Our commitment to excellence and client satisfaction has earned us numerous awards and the trust of Fortune 500 companies and ambitious startups alike.".split(' ');

  return (
    <div className="about-page bg-black text-white">
      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes scale-in-center {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .scale-in-center {
          animation: scale-in-center 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #D80074, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        
        .hover-float:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(216, 0, 116, 0.4);
        }
        
        .border-gradient {
          border: 2px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(to right, #D80074, transparent);
        }
      `}</style>
    
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen pt-16">
        <div 
          className="absolute inset-0 mx-10 rounded-[30px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')",
            backgroundPositionY: "25%",
            top: "120px",
            bottom: "40px",
            height: "auto"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[30px]"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-unbounded font-bold mb-4">
            Welcome to <span className="gradient-text">MSK Global</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-satoshi font-light mt-4">
            We help our partners distinguish themselves in the market and achieve their business goals. Our innovative marketing strategies are designed to engage audiences and drive growth.
          </p>
        </div>
      </section>

      {/* About Our Company Section */}
      <section className="py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-unbounded font-bold mb-16 text-center">
            About Our <span className="text-[#D80074]">Company</span>
          </h2>
          
          
            <p className="text-white text-center font-satoshi leading-relaxed">
  With over 15 years of experience in marketing and brand strategy, Sarmad founded MSK Global with a vision to revolutionize how brands connect with their audiences. His innovative approach to marketing has helped numerous companies achieve unprecedented growth. Sarmad's expertise spans across digital marketing, experiential campaigns, and strategic brand development. Before establishing MSK Global, he held leadership positions at several renowned marketing agencies and worked with Fortune 500 companies. A frequent speaker at industry conferences and a published author on marketing trends, Sarmad remains deeply passionate about helping brands tell their stories in authentic and impactful ways. 
</p>

          
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section 
        ref={addToRefs}
        data-section="founder"
        className="py-20 md:py-28 px-4 md:px-10" 
        style={{ 
          background: "linear-gradient(to bottom, #000000, #D80074 50%, #000000)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="px-4 py-2 rounded-full bg-black/40 text-[#D80074] font-unbounded font-bold text-sm inline-block mb-4">
              LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-5xl font-unbounded font-bold">Meet the Founder</h2>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            {/* Founder Image with Pink Circle Background */}
            <div ref={founderImgRef} className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 opacity-0">
              <div className="absolute w-full h-full rounded-full bg-[#000]/30 transform -translate-x-4 translate-y-4"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-0 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Founder of MSK Global" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Founder Description */}
            <div className="md:flex-1">
              <h3 className="text-2xl md:text-3xl font-unbounded font-bold mb-2">Mouhammad Sarmad Khan</h3>
              <p className="text-[#ffe0f0] font-satoshi font-medium mb-6">CEO & Founder</p>
              
              <div className="space-y-4">
                <p className="text-white font-satoshi leading-relaxed">
                  With over 15 years of experience in marketing and brand strategy, Sarmad founded MSK Global with a vision to revolutionize how brands connect with their audiences. His innovative approach to marketing has helped numerous companies achieve unprecedented growth.
                </p>
                
                <p className="text-white font-satoshi leading-relaxed">
                  Sarmad's expertise spans across digital marketing, experiential campaigns, and strategic brand development. Before establishing MSK Global, he held leadership positions at several renowned marketing agencies and worked with Fortune 500 companies.
                </p>
                
                <p className="text-white font-satoshi leading-relaxed">
                  A frequent speaker at industry conferences and a published author on marketing trends, Sarmad remains deeply passionate about helping brands tell their stories in authentic and impactful ways.
                </p>
              </div>
              
              <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-unbounded font-medium hover:bg-black/80 transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#D80074]/20">
                Connect with Sarmad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
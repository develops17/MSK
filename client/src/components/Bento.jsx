import React, { useState, useRef, useCallback, useEffect } from 'react';

const BentoGrid = () => {
  const [elements] = useState([
    { id: 1, text: 'Reliable' },
    { id: 2, text: 'Support' },
    { id: 3, text: 'Experienced' },
    { id: 4, text: 'Innovative' },
    { id: 5, text: 'Affordable' },
    { id: 6, text: 'Quality' },
    { id: 7, text: 'Fast' },
    { id: 8, text: 'Creative' },
    { id: 9, text: 'Professional' },
    { id: 10, text: 'Strategic' }
  ]);

  const [activeElement, setActiveElement] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visibleBentos, setVisibleBentos] = useState({});
  const circleRef = useRef(null);
  const elementRefs = useRef({});
  const bentoRefs = useRef({});
  const elementPositions = useRef({});
  const elementRotations = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const calculatePositions = useCallback(() => {
    // Adjust center and radius based on mobile or desktop
    const centerX = isMobile ? 120 : 140;
    const centerY = isMobile ? 120 : 140;
    const radius = isMobile ? 85 : 100;
    const elementWidth = isMobile ? 45 : 55;

    elementPositions.current = {};

    // Shuffle the order of elements for staggered appearance
    const shuffledIndices = Array.from({ length: elements.length }, (_, i) => i);
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }

    shuffledIndices.forEach((index) => {
      const element = elements[index];
      const angle = (index / elements.length) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle) - elementWidth;
      const y = centerY + radius * Math.sin(angle) - 15;
      
      // Calculate tilt angle based on element's position around the circle
      let rotation = angle * (180 / Math.PI) + 90; // Convert angle to degrees and adjust
      rotation = rotation % 360; // Normalize angle to 0-360
      
      // Adjust rotation so that the elements are tilted towards the center
      if (rotation > 90 && rotation <= 270) {
        rotation += 180;
      }
      rotation = rotation % 360;
      rotation = rotation - 90;

      elementRotations.current[element.id] = rotation;
      elementPositions.current[element.id] = { x, y };
    });
  }, [elements, isMobile]);

  useEffect(() => {
    calculatePositions();

    // We'll trigger animation complete separately when the card comes into view
    const timeout = setTimeout(() => {
      if (visibleBentos['bottomLeft']) {
        setAnimationComplete(true);
      }
    }, elements.length * 200 + 500);

    return () => clearTimeout(timeout);
  }, [calculatePositions, elements, isMobile, visibleBentos]);

  // Add intersection observer for bento cards
  useEffect(() => {
    const bentoIds = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const observers = {};

    bentoIds.forEach(id => {
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBentos(prev => ({
              ...prev,
              [id]: true
            }));
            observers[id].unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (bentoRefs.current[id]) {
        observers[id].observe(bentoRefs.current[id]);
      }
    });

    return () => {
      bentoIds.forEach(id => {
        if (bentoRefs.current[id]) {
          observers[id]?.unobserve(bentoRefs.current[id]);
        }
      });
    };
  }, []);

  const startDrag = (element, e) => {
    if (!animationComplete) return;
    
    // For touch events, only prevent default on the target element to allow scrolling elsewhere
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }
    
    setActiveElement(element);

    const elementRef = elementRefs.current[element.id];
    if (!elementRef || !circleRef.current) return;

    const elementRect = elementRef.getBoundingClientRect();
    const circleRect = circleRef.current.getBoundingClientRect();

    // Handle both mouse and touch events
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const offsetX = clientX - elementRect.left;
    const offsetY = clientY - elementRect.top;

    const circleCenterX = circleRect.width / 2;
    const circleCenterY = circleRect.height / 2;

    // Handle both mouse and touch move events
    const handleMove = (moveEvent) => {
      const moveClientX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0] ? moveEvent.touches[0].clientX : 0);
      const moveClientY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0] ? moveEvent.touches[0].clientY : 0);
      
      // Prevent default only for the dragging element to allow scrolling elsewhere
      moveEvent.preventDefault();

      const mouseX = moveClientX - circleRect.left;
      const mouseY = moveClientY - circleRect.top;

      const deltaX = mouseX - circleCenterX;
      const deltaY = mouseY - circleCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxRadius = circleRect.width / 2 - (isMobile ? 45 : 55);

      let newX, newY;

      if (distance > maxRadius) {
        const angle = Math.atan2(deltaY, deltaX);
        newX = circleCenterX + Math.cos(angle) * maxRadius - offsetX;
        newY = circleCenterY + Math.sin(angle) * maxRadius - offsetY;
      } else {
        newX = mouseX - offsetX;
        newY = mouseY - offsetY;
      }

      elementRef.style.left = `${newX}px`;
      elementRef.style.top = `${newY}px`;
      elementRef.style.cursor = 'grabbing';
      elementRef.style.transform = 'rotate(0deg)';
      elementRef.style.zIndex = '10';
    };

    const handleEnd = () => {
      if (!elementRef) return;

      elementRef.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      const originalPos = elementPositions.current[element.id];
      elementRef.style.left = `${originalPos.x}px`;
      elementRef.style.top = `${originalPos.y}px`;
      elementRef.style.transform = `rotate(${elementRotations.current[element.id]}deg)`;
      elementRef.style.cursor = 'grab';
      elementRef.style.zIndex = '1';

      setTimeout(() => {
        if (elementRef) elementRef.style.transition = '';
      }, 500);

      setActiveElement(null);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove, { passive: false });
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  };

  return (
    <div className="bg-black text-white font-unbounded py-16 px-4 md:px-8 lg:px-16 overflow-hidden w-full">
      <style jsx global>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-200px) rotate(var(--final-rotation));
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotate(var(--final-rotation));
            opacity: 1;
          }
        }

        .element-drop-in {
          animation: dropIn 0.4s forwards;
          animation-timing-function: ease-out;
          opacity: 0;
        }
        
        /* Hidden until parent card is visible */
        .element-hidden {
          opacity: 0;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bento-fade-in {
          opacity: 0;
          transform: translateY(-30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .bento-visible {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="w-full px-0 mb-12">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <button className="px-4 py-2 rounded-full bg-gray-800 text-[#D80074] font-bold text-sm transform hover:scale-105 transition-all whitespace-nowrap">
                WHY US
              </button>
              <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left">OUR SPECIALITIES</h2>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 text-center md:text-right text-base font-satoshi font-light">
              At MSK Global, a leading BTL agency serving global clients, we deliver outstanding results that speak for themselves. Our expertise goes beyond expectations, consistently impressing clients with measurable outcomes and impactful statistics.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top Left Bento Card - wider */}
          <div 
            ref={(el) => bentoRefs.current['topLeft'] = el}
            className={`md:col-span-8 p-6 sm:p-8 rounded-2xl relative z-10 border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300 overflow-hidden min-h-[300px] sm:min-h-[350px] bento-fade-in ${visibleBentos['topLeft'] ? 'bento-visible' : ''}`}
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transitionDelay: '0s'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="flex items-center mb-3">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                  <span className="text-[#ffffff]">150%</span>
                </h2>
              </div>
              <h3 className="text-lg sm:text-xl mb-2 font-semibold text-white">CUSTOMER BASE INCREASE</h3>
              <p className="text-white mb-2 font-satoshi text-shadow text-sm sm:text-base">
                Clients choose to stay with us over the long run due to the excitement we drive our day. It's been a valuable task.
              </p>
            </div>
          </div>

          {/* Top Right Bento Card - increased width */}
          <div 
            ref={(el) => bentoRefs.current['topRight'] = el}
            className={`md:col-span-4 bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300 flex flex-col justify-between bento-fade-in ${visibleBentos['topRight'] ? 'bento-visible' : ''}`}
            style={{ 
              transitionDelay: '0.1s'
            }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#D80074]">$150M</h2>
              <h3 className="text-lg sm:text-xl mt-2 mb-4 font-semibold text-gray-200">Revenue Generated</h3>
            </div>
            <p className="text-gray-400 font-satoshi mt-auto text-sm sm:text-base">
              We help generated $150M revenue for our clients around the globe.
            </p>
          </div>

          {/* Bottom Left Bento Card */}
          <div 
            ref={(el) => bentoRefs.current['bottomLeft'] = el}
            className={`md:col-span-5 bg-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300 relative bento-fade-in ${visibleBentos['bottomLeft'] ? 'bento-visible' : ''}`}
            style={{ 
              transitionDelay: '0.2s'
            }}
          >
            {/* Enhanced glowy background effect */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] h-[340px] bg-[#D80074]/40 rounded-full blur-[60px]"></div>
            
            <div 
              ref={circleRef}
              className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full mx-auto border-2 border-gray-700 bg-gray-800/40 backdrop-blur-sm overflow-hidden z-10"
            >
              {elements.map((element, index) => {
                const originalIndex = elements.findIndex(e => e.id === element.id);
                return (
                  <div
                    key={element.id}
                    ref={(el) => elementRefs.current[element.id] = el}
                    onMouseDown={(e) => startDrag(element, e)}
                    onTouchStart={(e) => startDrag(element, e)}
                    className={`absolute w-[90px] sm:w-[110px] h-[30px] rounded-[30px] bg-[#D80074] text-white flex justify-center items-center cursor-grab shadow-lg transform ${visibleBentos['bottomLeft'] ? 'element-drop-in' : 'element-hidden'} hover:brightness-110 hover:scale-105 active:scale-95`}
                    style={{
                      left: elementPositions.current[element.id]?.x || 0,
                      top: elementPositions.current[element.id]?.y || 0,
                      animationDelay: `${originalIndex * 200}ms`,
                      '--final-rotation': `${elementRotations.current[element.id] || 0}deg`,
                      transform: `rotate(${elementRotations.current[element.id]}deg)`,
                      boxShadow: '0 4px 6px -1px rgba(199, 172, 172, 0.05), 0 2px 4px -1px rgba(153, 140, 140, 0.06)'
                    }}
                  >
                    <div className="text-xs font-medium px-3">{element.text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Right Bento Card */}
          <div 
            ref={(el) => bentoRefs.current['bottomRight'] = el}
            className={`md:col-span-7 bg-[#D80074] p-6 sm:p-8 rounded-2xl border border-[#D80074] transform hover:translate-y-[-5px] transition-all duration-300 text-white flex flex-col justify-between min-h-[250px] sm:min-h-[280px] bento-fade-in ${visibleBentos['bottomRight'] ? 'bento-visible' : ''}`}
            style={{ 
              transitionDelay: '0.3s'
            }}
          >
            <div>
              <h3 className="text-lg sm:text-xl text-right font-semibold mb-2">Enhanced Brand Visibility</h3>
              <h2 className="text-5xl sm:text-6xl md:text-8xl text-right font-bold mb-4">5X</h2>
            </div>
            <p className="text-white/80 font-satoshi mt-auto text-sm sm:text-base">
              Our agency helps brands go scaling their brands while we focus on the core things for them 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
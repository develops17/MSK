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
  const circleRef = useRef(null);
  const elementRefs = useRef({});
  const elementPositions = useRef({});
  const elementRotations = useRef({});

  const calculatePositions = useCallback(() => {
    const centerX = 140;
    const centerY = 140;
    const radius = 100;

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
      const x = centerX + radius * Math.cos(angle) - 55;
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
  }, [elements]);

  useEffect(() => {
    calculatePositions();

    const timeout = setTimeout(() => {
      setAnimationComplete(true);
    }, elements.length * 200 + 500);

    return () => clearTimeout(timeout);
  }, [calculatePositions, elements]);

  const startDrag = (element, e) => {
    if (!animationComplete) return;
    e.preventDefault();
    setActiveElement(element);

    const elementRef = elementRefs.current[element.id];
    if (!elementRef || !circleRef.current) return;

    const elementRect = elementRef.getBoundingClientRect();
    const circleRect = circleRef.current.getBoundingClientRect();

    const offsetX = e.clientX - elementRect.left;
    const offsetY = e.clientY - elementRect.top;

    const circleCenterX = circleRect.width / 2;
    const circleCenterY = circleRect.height / 2;

    const handleMouseMove = (moveEvent) => {
      const mouseX = moveEvent.clientX - circleRect.left;
      const mouseY = moveEvent.clientY - circleRect.top;

      const deltaX = mouseX - circleCenterX;
      const deltaY = mouseY - circleCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxRadius = circleRect.width / 2 - 55;

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

    const handleMouseUp = () => {
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
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="min-h-screen bg-black text-white font-unbounded py-16">
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
      `}</style>

      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-4 py-2 rounded-full bg-gray-800 text-[#D80074] font-bold text-sm transform hover:scale-105 transition-all">
            WHY US
          </button>
          <h2 className="text-4xl md:text-5xl font-bold">OUR SPECIALITIES</h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Left Bento Card - with background image */}
          <div 
            className="p-8 rounded-2xl relative z-10 border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300 overflow-hidden min-h-[280px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                
                <h2 className="text-3xl font-bold">
                  <span className="text-[#D80074]">150%</span>
                </h2>
              </div>
              <h3 className="text-xl mb-4 font-semibold text-gray-200">CUSTOMER BASE INCREASE</h3>
              <p className="text-gray-200 mb-4 font-satoshi">
                Clients choose to stay with us over the long run due to the excitement we drive our day. It's been a valuable task.
              </p>
            </div>
          </div>

          {/* Top Right Bento Card - black bg with $74M */}
          <div className="bg-black p-8 rounded-2xl border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300">
            <div className="flex items-center mb-4">
              <h2 className="text-5xl font-bold text-[#D80074]">$150M</h2>
            </div>
            <h3 className="text-xl mb-4 font-semibold text-gray-200">Revenue Generated</h3>
            <p className="text-gray-400 font-satoshi">
              We help generated $74M revenue for our clients around the globe.
            </p>
          </div>

          {/* Bottom Left Bento Card - just circle and draggable components */}
          <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800 transform hover:translate-y-[-5px] transition-all duration-300">
            <div 
              ref={circleRef}
              className="relative w-[280px] h-[280px] rounded-full mx-auto border-2 border-gray-700 bg-gray-800/40 mb-6 overflow-hidden"
            >
              {elements.map((element, index) => {
                const originalIndex = elements.findIndex(e => e.id === element.id);
                return (
                  <div
                    key={element.id}
                    ref={(el) => elementRefs.current[element.id] = el}
                    onMouseDown={(e) => startDrag(element, e)}
                    onTouchStart={(e) => {
                      const touch = e.touches[0];
                      startDrag(element, {
                        preventDefault: () => e.preventDefault(),
                        clientX: touch.clientX,
                        clientY: touch.clientY
                      });
                    }}
                    className="absolute w-[110px] h-[30px] rounded-[30px] bg-[#D80074] text-white flex justify-center items-center cursor-grab shadow-lg transform element-drop-in hover:brightness-110 hover:scale-105 active:scale-95"
                    style={{
                      left: elementPositions.current[element.id]?.x || 0,
                      top: elementPositions.current[element.id]?.y || 0,
                      animationDelay: `${originalIndex * 200}ms`,
                      '--final-rotation': `${elementRotations.current[element.id] || 0}deg`,
                      transform: `rotate(${elementRotations.current[element.id]}deg)`,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="text-xs font-medium px-3">{element.text}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center text-sm text-gray-400">
              {animationComplete ? 
                "Drag any quality to explore (they'll spring back when released)" :
                "Dropping service qualities..."
              }
            </div>
          </div>

          {/* Bottom Right Bento Card - pink background */}
          <div className="bg-[#D80074] p-8 rounded-2xl border border-[#D80074] transform hover:translate-y-[-5px] transition-all duration-300 text-white">
            <h3 className="text-xl font-semibold mb-4">Enhanced Brand Visibility</h3>
            <h2 className="text-5xl font-bold mb-4">5X</h2>
            <p className="text-white/80 font-satoshi pb-0">
              Our agency helps brands go scaling their brands while we focus on the core things for them 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
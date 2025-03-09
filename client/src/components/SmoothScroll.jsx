import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children, options = {} }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const [scrollReady, setScrollReady] = useState(false);
  
  // Save scroll position before unload
  useEffect(() => {
    const saveScrollPosition = () => {
      if (locomotiveScrollRef.current) {
        const scrollPosition = locomotiveScrollRef.current.scroll.instance.scroll.y;
        sessionStorage.setItem('scrollPosition', scrollPosition);
      }
    };
    
    window.addEventListener('beforeunload', saveScrollPosition);
    return () => window.removeEventListener('beforeunload', saveScrollPosition);
  }, [scrollReady]);

  // Initialize locomotive scroll
  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Get saved position
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    // Initialize with merged options
    try {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true, // Enable smooth scrolling on mobile
        tablet: { smooth: true }, // Enable on tablets
        smartphone: { smooth: true }, // Enable on smartphones
        multiplier: 1,
        lerp: 0.1, // Lower values = smoother scrolling
        class: 'is-inview',
        getDirection: true, // Adds direction info to scroll
        reloadOnContextChange: true,
        ...options,
      });
      
      setScrollReady(true);
      
      // Restore scroll position after initialization
      if (savedScrollPosition !== null) {
        setTimeout(() => {
          locomotiveScrollRef.current.scrollTo(parseInt(savedScrollPosition, 10), {
            duration: 0,
            disableLerp: true
          });
        }, 100);
      }
      
      // Add scroll listener for debugging if needed
      // locomotiveScrollRef.current.on('scroll', (instance) => {
      //   console.log('Scrolling', instance);
      // });
      
    } catch (error) {
      console.error('Failed to initialize Locomotive Scroll:', error);
    }
    
    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [options]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollReady]);
  
  // Update scroll when content changes
  useEffect(() => {
    if (scrollReady && locomotiveScrollRef.current) {
      // Wait for any children animations to complete
      const timer = setTimeout(() => {
        locomotiveScrollRef.current.update();
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [children, scrollReady]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
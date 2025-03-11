import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children, options = {} }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const [scrollReady, setScrollReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Save scroll position before unload - only if locomotive is active
  useEffect(() => {
    if (isMobile) return; // Skip on mobile
    
    const saveScrollPosition = () => {
      if (locomotiveScrollRef.current) {
        const scrollPosition = locomotiveScrollRef.current.scroll.instance.scroll.y;
        sessionStorage.setItem('scrollPosition', scrollPosition);
      }
    };
    
    window.addEventListener('beforeunload', saveScrollPosition);
    return () => window.removeEventListener('beforeunload', saveScrollPosition);
  }, [scrollReady, isMobile]);

  // Initialize locomotive scroll - only on desktop
  useEffect(() => {
    // Skip locomotive initialization on mobile
    if (isMobile || !scrollRef.current) return;
    
    // Get saved position
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    // Initialize with merged options
    try {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
        class: 'is-inview',
        getDirection: true,
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
    } catch (error) {
      console.error('Failed to initialize Locomotive Scroll:', error);
    }
    
    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [options, isMobile]); // Re-initialize when mobile status changes

  // Handle window resize - only if locomotive is active
  useEffect(() => {
    if (isMobile) return; // Skip on mobile
    
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollReady, isMobile]);
  
  // Update scroll when content changes - only if locomotive is active
  useEffect(() => {
    if (isMobile || !scrollReady || !locomotiveScrollRef.current) return; // Skip on mobile
    
    const timer = setTimeout(() => {
      locomotiveScrollRef.current.update();
    }, 200);
    
    return () => clearTimeout(timer);
  }, [children, scrollReady, isMobile]);

  // On mobile, just render children directly without locomotive scroll container
  if (isMobile) {
    return <>{children}</>;
  }

  // On desktop, use locomotive scroll container
  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
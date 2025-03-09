import React from 'react';
import { Star } from 'lucide-react';

const AgencyCard = ({ heading }) => {
  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-r from-black/50 to-gray-900/50 text-white p-4 sm:p-6 overflow-hidden backdrop-blur-md border border-white/10 shadow-xl font-unbounded">
      {/* Overlay gradient for the top part */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D80074]/20 to-transparent"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Headline with medium font weight */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight subpixel-antialiased">
          {heading}
        </h2>
        
        {/* Divider line */}
        <div className="h-px bg-gray-700 my-3 sm:my-4"></div>
        
        {/* Bottom section with avatars and reviews */}
        <div className="flex items-center justify-between">
          {/* Team avatars */}
          <div className="flex -space-x-2 sm:-space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 object-cover"
            />
          </div>
          
          {/* Reviews section */}
          <div className="flex flex-col items-end">
            {/* Stars */}
            <div className="flex text-[#D80074]">
              <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" strokeWidth={0} />
              <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" strokeWidth={0} />
              <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" strokeWidth={0} />
              <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" strokeWidth={0} />
              <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" strokeWidth={0} />
            </div>
            
            {/* Review count */}
            <p className="text-xs sm:text-sm font-normal mt-1">200+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgencyCards = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex justify-center md:justify-between w-full md:space-x-6">
        <div className="w-[95%] sm:w-[85%] md:w-1/3">
          <AgencyCard heading="PIONEERS OF DRONE LIGHT SHOW" />
        </div>
        <div className="hidden md:block md:w-1/3">
          <AgencyCard heading="OPERATING IN USA, UK, EUROPE & CANADA" />
        </div>
        <div className="hidden md:block md:w-1/3">
          <AgencyCard heading="TRANSFORMING BRAND EXPERIENCES GLOBALLY" />
        </div>
      </div>
    </div>
  );
};

export default AgencyCards;
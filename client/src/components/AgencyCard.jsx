import React from 'react';
import { Star } from 'lucide-react';

const AgencyCard = ({ heading }) => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-gradient-to-r from-black/50 to-gray-900/50 text-white p-4 sm:p-6 overflow-hidden backdrop-blur-md border border-white/10 shadow-xl font-unbounded">
      {/* Overlay gradient for the top part */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D80074]/20 to-transparent"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
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
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-800 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Team member" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-800 object-cover"
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
            <p className="text-xs sm:text-sm font-medium mt-1">200+ 5 Star Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgencyCards = () => {
  return (
    <div className="flex justify-center md:justify-between w-full">
      <div className="w-full md:flex-1 mx-4">
        <AgencyCard heading="Pioneers of Drone Light Show" />
      </div>
      <div className="hidden md:block md:flex-1 mx-4">
        <AgencyCard heading="Operating in USA, UK, Europe & Canada" />
      </div>
      <div className="hidden md:block md:flex-1 mx-4">
        <AgencyCard heading="Transforming Brand Experiences Globally" />
      </div>
    </div>
  );
};

export default AgencyCards;
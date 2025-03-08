import React from 'react';

const Brands = () => {
  // Array of brand logos/names to make it easier to manage
  const brands = [
    "Google",
    "Amazon",
    "Microsoft",
    "Apple",
    "Netflix",
    "Spotify",
    "Adobe",
    "Twitter"
  ];

  return (
    <div className="bg-black text-center py-16 font-unbounded">
      <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-[#D80074] font-semibold text-sm mb-4">
        COLLABORATIONS
      </div>
      <h2 className="text-3xl font-unbounded text-white mb-10">Brands that love us</h2>
      
      <div className="relative overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .ticker {
            animation: scroll 25s linear infinite;
          }
          .ticker:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* First set of logos */}
        <div className="ticker flex whitespace-nowrap">
          {brands.map((brand, index) => (
            <div 
              key={`brand-a-${index}`} 
              className="flex items-center justify-center min-w-[180px] h-16 mx-8 bg-gray-900/70 border border-gray-800 rounded-lg px-6"
            >
              <span className="text-lg font-medium text-white opacity-70 hover:opacity-100 transition-opacity">{brand}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div 
              key={`brand-b-${index}`} 
              className="flex items-center justify-center min-w-[180px] h-16 mx-8 bg-gray-900/70 border border-gray-800 rounded-lg px-6"
            >
              <span className="text-lg font-medium text-white opacity-70 hover:opacity-100 transition-opacity">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Second row going in opposite direction */}
      <div className="relative overflow-hidden mt-8">
        <style jsx>{`
          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .ticker-reverse {
            animation: scroll-reverse 30s linear infinite;
          }
          .ticker-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="ticker-reverse flex whitespace-nowrap">
          {brands.map((brand, index) => (
            <div 
              key={`brand-c-${index}`} 
              className="flex items-center justify-center min-w-[180px] h-16 mx-8 bg-gray-900/70 border border-gray-800 rounded-lg px-6"
            >
              <span className="text-lg font-medium text-white opacity-70 hover:opacity-100 transition-opacity">{brand}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div 
              key={`brand-d-${index}`} 
              className="flex items-center justify-center min-w-[180px] h-16 mx-8 bg-gray-900/70 border border-gray-800 rounded-lg px-6"
            >
              <span className="text-lg font-medium text-white opacity-70 hover:opacity-100 transition-opacity">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
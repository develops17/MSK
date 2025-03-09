import React from 'react';
import { ArrowRight, Layers, Calendar, Lightbulb, Megaphone, FileText, Glasses, ShoppingBag } from 'lucide-react';

function Services() {
  return (
    <div className="min-h-screen z-0 bg-black text-white font-unbounded">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-[#D80074] font-semibold text-sm mb-4">
              SERVICES
            </div>
            <h2 className="text-5xl font-bold">What we are offering</h2>
          </div>
          <button className="mt-6 md:mt-0 bg-[#D80074] hover:bg-[#D80074]/90 text-white px-6 py-3 rounded-full flex items-center font-semibold transition-colors">
            VIEW ALL SERVICES
            <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Megaphone className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Experiential Marketing</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                We craft unforgettable brand experiences that engage, excite, and leave a lasting impact. From interactive activations to sensory-driven campaigns, we bring brands closer to their audiences.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Calendar className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Events</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                From large-scale productions to intimate gatherings, we design and execute events that captivate and connect. Every detail is meticulously planned to create seamless and memorable moments.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Glasses className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Immersive Tech</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                Blending cutting-edge AR, VR, and AI, we create immersive brand interactions that push boundaries. Our tech-driven solutions redefine storytelling and engagement.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ShoppingBag className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Retail & Affiliate Marketing</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                We drive sales through strategic in-store activations and affiliate partnerships that enhance brand visibility. Our data-driven approach ensures measurable growth and impact.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FileText className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Content</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                We craft compelling visual and digital content that resonates with audiences across platforms. From high-quality production to storytelling, we turn ideas into impactful brand narratives.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="text-[#D80074] h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Drone Light Shows</h3>
            <div className="flex-grow">
              <p className="text-gray-400 mb-6 font-satoshi">
                As pioneers in drone entertainment, we create breathtaking aerial performances that mesmerize audiences. Our synchronized drone displays transform the night sky into a canvas of light and motion.
              </p>
            </div>
            <button className="flex items-center font-semibold text-white hover:text-[#D80074] transition-colors">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform transform hover:-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
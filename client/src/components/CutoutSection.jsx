import React from 'react'
import Marquee from 'react-fast-marquee'
import AgencyCard from './AgencyCard'

const CutoutSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-black-300 via-pink-700 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Marquee gradient={false} speed={70}>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
          <div className="text-9xl font-medium text-white font-unbounded mx-4">
            Engage - Innovate - Elevate -
          </div>
        </Marquee>
      </div>
      <div className="relative z-10">
        <img src="https://framerusercontent.com/images/tVDg230sxN3guk1uVhxlFkIu1s.png" alt="Cutout" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 z-50 mt-8">
        <AgencyCard />
      </div>
    </section>
  )
}

export default CutoutSection
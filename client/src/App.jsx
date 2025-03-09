import React from 'react'
import CutoutSection from './components/CutoutSection'
import ServicesSection from './components/ServicesSection'
import './App.css'
import Brands from './components/Brands'
import AchievementsSection from './components/Achieve'
import WorkSection from './components/Works'
import BentoGrid from './components/Bento'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import SmoothScroll from './components/SmoothScroll'


function App() {
  return (
    <div className="App">
      <SmoothScroll>
      <Navbar />
      <HeroSection />
      <CutoutSection />
      <ServicesSection />
      <Brands />
      <AchievementsSection />
      <WorkSection/>
      <BentoGrid/>
      <ContactSection/>
      <Footer />
      </SmoothScroll>
    </div>
  )
}

export default App
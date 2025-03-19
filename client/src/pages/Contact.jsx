import React from 'react'
import Navbar from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-20">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default Contacts
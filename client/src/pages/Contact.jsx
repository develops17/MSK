import React from 'react'
import Navbar from '../components/navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-20">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default Contacts
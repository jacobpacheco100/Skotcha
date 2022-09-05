import React from 'react'

// components ( home )
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import How from '../components/home/How'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const LandingPage = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* how it works */}
      <How />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </>
  )
}

export default LandingPage

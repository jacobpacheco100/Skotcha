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
    <main className='max-w-screen overflow-hidden relative'>
      <div>
        <div className='purp--glow'></div>
        <div className='green--glow'></div>
      </div>
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
    </main>
  )
}

export default LandingPage

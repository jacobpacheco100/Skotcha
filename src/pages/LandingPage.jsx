import React from 'react'
import { useRef } from 'react'

// components ( home )
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import How from '../components/home/How'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const LandingPage = () => {
  const about = useRef(null)
  const how = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <main className='max-w-screen overflow-hidden relative'>
      {/* navbar */}
      <Navbar
        about={() => scrollToSection(about)}
        how={() => scrollToSection(how)}
        contact={() => scrollToSection(contact)}
      />

      {/* hero */}
      <section ref={about}>
        <Hero />
      </section>

      {/* about */}
      <About how={() => scrollToSection(how)} />

      {/* how it works */}
      <section ref={how}>
        <How />
      </section>

      {/* contact */}
      <section ref={contact}>
        <Contact />
      </section>

      {/* footer */}
      <Footer />

      {/* background glow ( top ) */}
      <div>
        <div className='purp--glow'></div>
        <div className='green--glow'></div>
      </div>
    </main>
  )
}

export default LandingPage

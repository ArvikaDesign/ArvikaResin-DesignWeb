import { useState, useEffect } from 'react'
import { MotionConfig, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Loader, Nav, Hero, Footer } from './components/Chrome'
import { About, Services, Products, Projects } from './components/Showcase'
import { Why, Process, Testimonials, Founder, Contact } from './components/Trust'
import { MessageCircle } from 'lucide-react'
import { waLink } from './data/content'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 80,
      delay: 40
    })

    const timer = setTimeout(() => {
      setReady(true)
      AOS.refreshHard()
    }, 1100)

    const timer2 = setTimeout(() => {
      AOS.refresh()
    }, 1800)

    const handleRefresh = () => AOS.refresh()
    window.addEventListener('resize', handleRefresh)
    window.addEventListener('load', handleRefresh)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      window.removeEventListener('resize', handleRefresh)
      window.removeEventListener('load', handleRefresh)
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!ready && <Loader key="loader" />}
      </AnimatePresence>

      <Nav />
      <main id="main-content">
        <Hero go={ready} />
        <About />
        <Services />
        <Products />
        <Projects />
        <Why />
        <Process />
        <Testimonials />
        <Founder />
        <Contact />
      </main>
      <Footer />

      <a
        href={waLink('Hello Arvika, I would like to inquire about your resin services.')}
        target="_blank"
        rel="noreferrer"
        className="mobile-floating-wa"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </MotionConfig>
  )
}

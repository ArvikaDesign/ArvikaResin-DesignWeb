import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  Instagram,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react'
import { site, navItems, waLink, services, productCategories, studioStats } from '../data/content'

export const Logo = () => (
  <a href="#home" className="logo" aria-label="Arvika Resin & Design Home">
    <img
      src="/img/logo.png"
      alt="Arvika Resin & Design — Beyond Resin, Beyond Imagination"
      width="200"
      height="72"
      className="logo-img"
    />
  </a>
)

export function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="loader-inner">
        <motion.img
          src="/img/logo.png"
          alt="Arvika Resin & Design"
          width="240"
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className="loader-bar-bg">
          <motion.div
            className="loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="loader-tagline"
        >
          Beyond Resin, Beyond Imagination.
        </motion.p>
      </div>
    </motion.div>
  )
}

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 30)

      const sections = ['home', 'about', 'services', 'products', 'gallery', 'why-us', 'process', 'contact']
      const scrollPos = window.scrollY + 220
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    const handleEsc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav-bar ${solid ? 'solid' : ''}`}>
        <div className="wrap nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const secId = item.href.replace('#', '')
              const isActive = activeSection === secId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{item.name}</span>
                  {isActive && <motion.span layoutId="nav-pill" className="nav-pill" />}
                </a>
              )
            })}
          </nav>

          <div className="nav-actions">
            <a className="nav-phone" href={`tel:${site.tel}`} title="Call Arvika directly">
              <Phone size={15} />
              <span>{site.phone}</span>
            </a>
            <a
              className="btn btn-gold btn-sm"
              href="#contact"
            >
              <span>Get a Quote</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            className="burger-btn"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-header">
              <Logo />
              <button
                className="mobile-close-btn"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <nav className="mobile-links" aria-label="Mobile Navigation">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`mobile-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                >
                  <span>{item.name}</span>
                  <ArrowRight size={18} className="mobile-arrow" />
                </motion.a>
              ))}
            </nav>

            <div className="mobile-footer">
              <div className="mobile-contact-bar">
                <a
                  className="btn btn-gold btn-full btn-md"
                  href={waLink('Hello Arvika, I would like to inquire about your resin services.')}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  className="btn btn-ghost btn-full btn-md"
                  href={`tel:${site.tel}`}
                  onClick={() => setOpen(false)}
                >
                  <Phone size={17} />
                  <span>Call {site.phone}</span>
                </a>
              </div>
              <p className="mobile-location">
                <MapPin size={14} /> {site.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Hero({ go = true }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrapper">
        <div className="hero-bg-media">
          <img
            src="/img/hero_main.jpg"
            alt="Luxury modern interior with seamless ocean-teal and champagne gold metallic epoxy floor"
            className="hero-bg-img"
            fetchpriority="high"
          />
        </div>
        <div className="hero-overlay-gradient" />
        <div className="hero-vignette" />
      </div>

      <div className="wrap hero-content">
        <div
          className="hero-badge"
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <Sparkles size={14} className="badge-sparkle" />
          <span>Bespoke Epoxy & Resin Artistry · Virudhachalam, Tamil Nadu</span>
        </div>

        <h1
          className="hero-title"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="200"
        >
          <span className="hero-line-mask">
            <span className="hero-line block">
              Beyond Resin.
            </span>
          </span>
          <span className="hero-line-mask">
            <span className="hero-line hero-line-gold block italic">
              Beyond Imagination.
            </span>
          </span>
        </h1>

        <p
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="350"
        >
          {site.subheadline}
        </p>

        <div
          className="hero-actions"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="450"
        >
          <a className="btn btn-gold btn-lg" href="#gallery">
            <span>Explore Our Creations</span>
            <ArrowRight size={17} />
          </a>
          <a
            className="btn btn-ghost btn-lg"
            href={waLink('Hello Arvika, I would like to discuss a project.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            <span>Let's Talk About Your Project</span>
          </a>
        </div>

        <div
          className="hero-stats-bar"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="550"
        >
          {studioStats.map((stat) => (
            <div key={stat.label} className="hero-stat-item">
              <span className="hero-stat-val">{stat.value}</span>
              <span className="hero-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to about story">
        <span className="scroll-cue-text">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </a>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-glow" />
      <div className="wrap footer-grid">
        <div className="footer-col footer-brand" data-aos="fade-up" data-aos-duration="600">
          <Logo />
          <p className="footer-bio">
            Arvika Resin & Design transforms everyday architecture and surfaces into timeless works of art. From seamless metallic epoxy flooring across Tamil Nadu to bespoke live-edge river tables and fine art, we pioneer resin craftsmanship.
          </p>
          <div className="footer-socials">
            <a
              href={site.instaUrl}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Follow Arvika on Instagram"
            >
              <Instagram size={18} />
              <span>@{site.insta}</span>
            </a>
            <a
              href={waLink('Hello Arvika, I would like to enquire about your designs.')}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="footer-col" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <h3 className="footer-col-title">Flooring Solutions</h3>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <h3 className="footer-col-title">Handcrafted Creations</h3>
          <ul className="footer-links">
            {productCategories.filter(c => c !== 'All').map((c) => (
              <li key={c}>
                <a href="#products">{c}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact-col" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <h3 className="footer-col-title">Studio & Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={16} className="f-icon" />
              <span>{site.location}</span>
            </li>
            <li>
              <Phone size={16} className="f-icon" />
              <a href={`tel:${site.tel}`}>{site.phone}</a>
            </li>
            <li>
              <MessageCircle size={16} className="f-icon" />
              <a href={waLink()} target="_blank" rel="noreferrer">+91 {site.wa}</a>
            </li>
            <li>
              <Clock size={16} className="f-icon" />
              <span>{site.operatingHours}</span>
            </li>
            <li>
              <ShieldCheck size={16} className="f-icon" />
              <span>Statewide Tamil Nadu Installation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="footer-divider">·</span>
          <span>Virudhachalam, Cuddalore District, Tamil Nadu</span>
        </div>
        <div className="footer-craft-motto">
          <em>Beyond Resin, Beyond Imagination.</em>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Maximize2,
  X,
  Layers,
  Shield,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  Play,
  Pause
} from 'lucide-react'
import {
  services,
  products,
  productCategories,
  galleryProjects,
  site,
  waLink
} from '../data/content'

export const SectionHeader = ({ eyebrow, title, subtitle, align = 'left', light = false }) => (
  <div
    className={`sec-header ${align === 'center' ? 'text-center' : ''} ${light ? 'light-mode' : ''}`}
    data-aos="fade-up"
    data-aos-duration="700"
  >
    {eyebrow && (
      <span className="sec-eyebrow">
        <Sparkles size={13} className="eyebrow-icon" />
        {eyebrow}
      </span>
    )}
    <h2 className="sec-title">{title}</h2>
    {subtitle && <p className="sec-subtitle">{subtitle}</p>}
  </div>
)

export function About() {
  return (
    <section id="about" className="sec-about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media-col" data-aos="fade-up" data-aos-duration="850">
            <div className="about-image-primary-wrap">
              <img
                src="/img/craft_workshop.jpg"
                alt="Master resin artisan pouring crystal epoxy over seasoned live edge hardwood in the Virudhachalam studio"
                className="about-img-primary"
                loading="lazy"
              />
              <div className="about-media-badge">
                <span className="badge-num">100%</span>
                <span className="badge-text">Handcrafted in Tamil Nadu</span>
              </div>
            </div>

            <div
              className="about-image-secondary-wrap"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-delay="150"
            >
              <img
                src="/img/product_wall_art.jpg"
                alt="Intricate ocean resin art with 24K gold leaf and crystal quartz veins"
                className="about-img-secondary"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-copy-col" data-aos="fade-up" data-aos-duration="850">
            <SectionHeader
              eyebrow="Our Story & Philosophy"
              title={
                <>
                  Where Master Craftsmanship Meets <em>Architectural Alchemy</em>
                </>
              }
              subtitle="Born in Virudhachalam, Arvika Resin & Design was founded on a singular conviction: surfaces should not merely occupy space—they should evoke wonder."
            />

            <div className="about-narrative">
              <p>
                From residential and commercial epoxy floors that mirror the tranquil depth of the ocean, to one-of-a-kind live-edge river tables and glowing resin luminaires, every creation is an unrepeatable fusion of raw chemistry and artistic mastery.
              </p>
              <p>
                We reject mass-produced molds and generic presets. We hand-select seasoned Indian hardwoods, test subfloors with precision instrumentation, formulate non-yellowing UV-stable resins, and manipulate liquid metallic pigments with breath and brush to produce breathtaking organic movement.
              </p>
            </div>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Layers size={20} />
                </div>
                <div>
                  <h4>Zero-VOC & Food Safe</h4>
                  <p>Certified safe formulations for dining surfaces and residential living.</p>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Shield size={20} />
                </div>
                <div>
                  <h4>Industrial Grade Durability</h4>
                  <p>Flawless chemical, scratch, and moisture resistance engineered to last.</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a
                className="btn btn-gold"
                href={waLink('Hello Arvika, I would like to schedule a design consultation.')}
                target="_blank"
                rel="noreferrer"
              >
                <span>Consult Our Artisans</span>
                <ArrowRight size={16} />
              </a>
              <a className="btn btn-ghost" href="#why-us">
                <span>Discover Our Standards</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InteractiveCarousel({
  items,
  renderItem,
  theme = 'dark',
  sectionAriaLabel = 'Interactive carousel showcase',
  defaultView = 'carousel',
  showViewToggle = true,
  autoScroll = true,
  autoScrollInterval = 3600
}) {
  const [viewMode, setViewMode] = useState(defaultView)
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(items.length > 1)
  const [isPlaying, setIsPlaying] = useState(autoScroll)
  const [isHovered, setIsHovered] = useState(false)

  const updateScrollState = () => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    if (!card) return
    const cardWidth = card.getBoundingClientRect().width + 20
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActiveIdx(Math.min(Math.max(0, idx), items.length - 1))
    setCanScrollPrev(el.scrollLeft > 15)
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 15)
  }

  useEffect(() => {
    updateScrollState()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const handleResize = () => updateScrollState()
    window.addEventListener('resize', handleResize)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', handleResize)
    }
  }, [items, viewMode])

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      setActiveIdx(0)
      setCanScrollPrev(false)
      setCanScrollNext(items.length > 1)
    }
  }, [items])

  useEffect(() => {
    if (!autoScroll || !isPlaying || isHovered || isDragging.current || viewMode !== 'carousel' || items.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      if (!trackRef.current) return
      const el = trackRef.current
      const card = el.firstElementChild
      if (!card) return
      const cardWidth = card.getBoundingClientRect().width + 20
      const maxScroll = el.scrollWidth - el.clientWidth - 20

      if (el.scrollLeft >= maxScroll) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, autoScrollInterval)

    return () => clearInterval(timer)
  }, [autoScroll, isPlaying, isHovered, viewMode, items.length, autoScrollInterval])

  const scrollPrev = () => {
    if (!trackRef.current) return
    const el = trackRef.current
    const card = el.firstElementChild
    const cardWidth = card ? card.getBoundingClientRect().width + 20 : 320
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }

  const scrollNext = () => {
    if (!trackRef.current) return
    const el = trackRef.current
    const card = el.firstElementChild
    const cardWidth = card ? card.getBoundingClientRect().width + 20 : 320
    el.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }

  const scrollToIndex = (index) => {
    if (!trackRef.current) return
    const el = trackRef.current
    const card = el.firstElementChild
    if (!card) return
    const cardWidth = card.getBoundingClientRect().width + 20
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setActiveIdx(index)
  }

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)

  const handleMouseDown = (e) => {
    if (viewMode === 'grid' || !trackRef.current) return
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeftPos.current = trackRef.current.scrollLeft
    trackRef.current.classList.add('is-dragging')
  }

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false
    if (trackRef.current) {
      trackRef.current.classList.remove('is-dragging')
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.3
    trackRef.current.scrollLeft = scrollLeftPos.current - walk
  }

  return (
    <div
      className={`interactive-carousel-wrap theme-${theme}`}
      data-aos="fade-up"
      data-aos-duration="750"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        handleMouseLeaveOrUp()
      }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsHovered(false), 2500)
      }}
    >
      <div className="carousel-controls-bar">
        <div className="carousel-meta">
          <span className="carousel-counter" aria-label={`Item ${activeIdx + 1} of ${items.length}`}>
            <strong className="current-count">{String(activeIdx + 1).padStart(2, '0')}</strong>
            <span className="counter-sep">/</span>
            <span className="total-count">{String(items.length).padStart(2, '0')}</span>
          </span>
          <span className="carousel-swipe-hint">
            {isPlaying && !isHovered ? 'Auto-Scrolling · Pause on Hover' : 'Interactive Swipe & Scroll'}
          </span>
        </div>

        <div className="carousel-actions-group">
          {viewMode === 'carousel' && autoScroll && items.length > 1 && (
            <button
              type="button"
              className={`carousel-autoplay-btn ${isPlaying ? 'playing' : 'paused'}`}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause automatic scrolling' : 'Resume automatic scrolling'}
              title={isPlaying ? 'Pause auto-scroll' : 'Resume auto-scroll'}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span className="autoplay-status-dot" aria-hidden="true" />
            </button>
          )}

          {showViewToggle && (
            <div className="carousel-view-toggle" role="group" aria-label="Layout mode switch">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
                onClick={() => {
                  setViewMode('carousel')
                  setTimeout(() => {
                    if (typeof AOS !== 'undefined') AOS.refresh()
                  }, 60)
                }}
                aria-pressed={viewMode === 'carousel'}
                title="Switch to Interactive Carousel"
              >
                <SlidersHorizontal size={14} />
                <span className="toggle-label">Carousel</span>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => {
                  setViewMode('grid')
                  setTimeout(() => {
                    if (typeof AOS !== 'undefined') AOS.refresh()
                  }, 60)
                }}
                aria-pressed={viewMode === 'grid'}
                title="Switch to Full Catalog Grid"
              >
                <LayoutGrid size={14} />
                <span className="toggle-label">Grid</span>
              </button>
            </div>
          )}

          {viewMode === 'carousel' && (
            <div className="carousel-nav-arrows">
              <button
                type="button"
                className="carousel-arrow-btn prev"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="carousel-arrow-btn next"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {viewMode === 'carousel' ? (
        <div
          ref={trackRef}
          className="carousel-track"
          tabIndex={0}
          role="region"
          aria-label={sectionAriaLabel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`carousel-slide-item ${activeIdx === idx ? 'is-active' : ''}`}
            >
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      ) : (
        <div className={`carousel-expanded-grid ${theme === 'light' ? 'products-grid' : 'services-grid'}`}>
          {items.map((item, idx) => (
            <div key={item.id || idx} className="grid-item-wrap">
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      )}

      {viewMode === 'carousel' && items.length > 1 && (
        <div className="carousel-dots-pagination" role="tablist" aria-label="Slide indicator dots">
          {items.map((item, idx) => (
            <button
              key={item.id || idx}
              type="button"
              role="tab"
              aria-selected={activeIdx === idx}
              aria-label={`Jump to slide ${idx + 1}: ${item.name || ''}`}
              className={`carousel-dot ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Services() {
  const renderServiceCard = (svc) => (
    <article className="service-card">
      <div className="service-media">
        <img
          src={svc.image}
          alt={`${svc.name} - ${svc.summary}`}
          className="service-img"
          loading="lazy"
        />
        <span className="service-badge">{svc.tag}</span>
      </div>

      <div className="service-body">
        <h3 className="service-title">{svc.name}</h3>
        <p className="service-desc">{svc.summary}</p>

        <div className="service-specs">
          <div className="spec-item">
            <span className="spec-label">Ideal For:</span>
            <span className="spec-val">{svc.idealFor}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Finish:</span>
            <span className="spec-val">{svc.finish}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Performance:</span>
            <span className="spec-val">{svc.durability}</span>
          </div>
        </div>

        <div className="service-footer">
          <a
            className="service-inquire-link"
            href={waLink(`Hello Arvika, I would like a quote for ${svc.name}.`)}
            target="_blank"
            rel="noreferrer"
          >
            <span>Request Quote</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  )

  return (
    <section id="services" className="sec-services">
      <div className="wrap">
        <SectionHeader
          eyebrow="Architectural Solutions"
          title={
            <>
              Engineered Epoxy & <em>Protective Flooring</em>
            </>
          }
          subtitle="Continuous, joint-free resin surfaces engineered for luxury residences, commercial showrooms, and demanding industrial facilities across Tamil Nadu."
        />

        <InteractiveCarousel
          items={services}
          renderItem={renderServiceCard}
          theme="dark"
          sectionAriaLabel="Flooring services carousel"
          defaultView="carousel"
        />

        <div
          className="services-banner"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="banner-content">
            <h3>Planning a commercial showroom, villa, or industrial floor?</h3>
            <p>Our technical team performs on-site moisture testing and laser subfloor evaluation across Tamil Nadu.</p>
          </div>
          <a
            className="btn btn-gold btn-md"
            href={waLink('Hello Arvika, I need on-site flooring inspection and quotation.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            <span>Schedule On-Site Inspection</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Products() {
  const [selectedCat, setSelectedCat] = useState('All')

  const handleCategoryChange = (cat) => {
    setSelectedCat(cat)
    setTimeout(() => {
      if (typeof AOS !== 'undefined') AOS.refresh()
    }, 100)
  }

  const filteredProducts =
    selectedCat === 'All'
      ? products
      : products.filter((p) => p.category === selectedCat)

  const renderProductCard = (prod) => (
    <article className="product-card">
      <div className="product-media">
        <img
          src={prod.image}
          alt={prod.name}
          className="product-img"
          loading="lazy"
        />
        <span className="product-tag">{prod.tag}</span>
      </div>

      <div className="product-body">
        <span className="product-category">{prod.category}</span>
        <h3 className="product-title">{prod.name}</h3>
        <p className="product-desc">{prod.desc}</p>
        <p className="product-specs">{prod.specs}</p>

        <div className="product-cta">
          <a
            className="btn btn-ghost btn-sm btn-full"
            href={waLink(`Hello Arvika, I'm interested in commissioning: ${prod.name} (${prod.category}).`)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} />
            <span>Custom Commission Enquiry</span>
          </a>
        </div>
      </div>
    </article>
  )

  return (
    <section id="products" className="sec-products">
      <div className="wrap">
        <SectionHeader
          eyebrow="Handcrafted Collections"
          title={
            <>
              Resin Creations, <em>Tailored to You</em>
            </>
          }
          subtitle="Explore our bespoke handcrafted commissions—from iconic live-edge river tables to fine art, luminaires, and personalized keepsakes."
        />

        <div
          className="category-chips-wrapper"
          role="group"
          aria-label="Filter products by category"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {productCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-chip ${selectedCat === cat ? 'active' : ''}`}
              aria-pressed={selectedCat === cat}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <InteractiveCarousel
          items={filteredProducts}
          renderItem={renderProductCard}
          theme="light"
          sectionAriaLabel="Handcrafted products carousel"
          defaultView="carousel"
        />
      </div>
    </section>
  )
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const [activeItem, setActiveItem] = useState(null)

  const cats = ['All', ...Array.from(new Set(galleryProjects.map((item) => item.category)))]

  const handleFilterChange = (cat) => {
    setFilter(cat)
    setTimeout(() => {
      if (typeof AOS !== 'undefined') AOS.refresh()
    }, 100)
  }

  const filtered =
    filter === 'All'
      ? galleryProjects
      : galleryProjects.filter((item) => item.category === filter)

  return (
    <section id="gallery" className="sec-gallery">
      <div className="wrap">
        <div className="gallery-header-row">
          <SectionHeader
            eyebrow="Signature Portfolio"
            title={
              <>
                Concepts In <em>Colour & Light</em>
              </>
            }
            subtitle="A curated showcase of recent architectural installations and studio creations crafted for discerning spaces."
          />

          <div
            className="gallery-filter-chips"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {cats.map((c) => (
              <button
                key={c}
                className={`g-chip ${filter === c ? 'active' : ''}`}
                onClick={() => handleFilterChange(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-masonry">
          {filtered.map((item, idx) => (
            <figure
              key={item.id}
              className={`gallery-card ${item.tall ? 'card-tall' : ''}`}
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={(idx % 3) * 100}
              onClick={() => setActiveItem(item)}
            >
              <div className="gallery-img-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-zoom-icon" aria-hidden="true">
                    <Maximize2 size={18} />
                  </div>
                  <div className="gallery-caption">
                    <div className="gallery-cat-location">
                      <span className="g-cat">{item.category}</span>
                      <span className="g-dot">·</span>
                      <span className="g-loc">{item.location}</span>
                    </div>
                    <h3 className="g-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div
          className="gallery-bottom-cta"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <a
            className="btn btn-ghost"
            href={site.instaUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore More Creations on Instagram @{site.insta}</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="lightbox-modal"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                aria-label="Close image lightbox"
                onClick={() => setActiveItem(null)}
              >
                <X size={22} />
              </button>

              <div className="lightbox-media">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-info">
                <div className="lightbox-meta">
                  <span className="lightbox-tag">{activeItem.category}</span>
                  <span className="lightbox-loc">{activeItem.location}</span>
                </div>
                <h3 className="lightbox-title">{activeItem.title}</h3>
                <p className="lightbox-desc">{activeItem.desc}</p>

                <div className="lightbox-actions">
                  <a
                    className="btn btn-gold btn-full btn-md"
                    href={waLink(`Hello Arvika, I'm inquiring about your project: "${activeItem.title}" (${activeItem.location}).`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={17} />
                    <span>Enquire About Similar Project</span>
                  </a>
                  <button
                    className="btn btn-ghost btn-full btn-md"
                    onClick={() => setActiveItem(null)}
                  >
                    <span>Close Preview</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

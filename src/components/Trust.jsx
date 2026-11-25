import { useState, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  CheckCircle2,
  Check,
  Sparkles
} from 'lucide-react'
import {
  whyPillars,
  processSteps,
  trustAssurances,
  services,
  productCategories,
  site,
  waLink
} from '../data/content'
import { SectionHeader } from './Showcase'

export function Why() {
  return (
    <section id="why-us" className="sec-why">
      <div className="wrap">
        <SectionHeader
          eyebrow="The Arvika Standard"
          title={
            <>
              Why Discerning Clients <em>Choose Arvika</em>
            </>
          }
          subtitle="We unite chemical engineering precision with bespoke artisan craftsmanship to deliver flawless finishes that endure for decades."
        />

        <div className="why-grid">
          {whyPillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className="why-card"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="why-num-row">
                <span className="why-num">{pillar.num}</span>
                <span className="why-tag">{pillar.subtitle}</span>
              </div>
              <h3 className="why-title">{pillar.title}</h3>
              <p className="why-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 60%']
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section id="process" className="sec-process">
      <div className="wrap" ref={containerRef}>
        <SectionHeader
          eyebrow="Project Journey"
          title={
            <>
              From First Vision <em>To Final Mirror Handover</em>
            </>
          }
          subtitle="Our systematic, dust-free methodology guarantees absolute clarity, precision color matching, and structural perfection."
        />

        <div className="process-timeline">
          <motion.div className="process-progress-line" style={{ scaleY }} />

          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="process-step-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={idx * 120}
            >
              <div className="step-marker">
                <span className="step-num">{step.step}</span>
              </div>

              <div className="step-card">
                <div className="step-header">
                  <span className="step-phase">{step.phase}</span>
                  <span className="step-badge">{step.highlight}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="trust" className="sec-trust">
      <div className="wrap">
        <SectionHeader
          eyebrow="Craftsmanship Assurance"
          title={
            <>
              Authentic Standards, <em>Uncompromising Quality</em>
            </>
          }
          subtitle="We believe true trust is built through technical excellence, certified raw materials, and open consultation."
          align="center"
        />

        <div className="trust-assurances-grid">
          {trustAssurances.map((item, idx) => (
            <div
              key={item.title}
              className="trust-card"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={(idx % 2) * 100}
            >
              <div className="trust-check-icon">
                <Check size={18} />
              </div>
              <div className="trust-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="trust-social-banner"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="trust-banner-info">
            <span className="trust-sub-badge">Live From The Studio</span>
            <h3>Follow Our Daily Pours & Behind-the-Scenes</h3>
            <p>
              Watch live time-lapses of metallic floor pours, table casting, and pigment swirling directly on Instagram.
            </p>
          </div>
          <a
            className="btn btn-gold btn-md"
            href={site.instaUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} />
            <span>Join Us on Instagram @{site.insta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Founder() {
  return (
    <section id="founder" className="sec-founder">
      <div className="wrap">
        <div
          className="founder-card"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="founder-media-col">
            <div className="founder-image-frame">
              <img
                src={site.founder.image}
                alt={`${site.founder.name} — ${site.founder.role}, ${site.name}`}
                className="founder-img"
                loading="lazy"
              />
              <div className="founder-frame-accent" />
            </div>
          </div>

          <div className="founder-info-col">
            <div className="founder-badge">
              <Sparkles size={13} className="badge-sparkle" />
              <span>{site.founder.role}</span>
            </div>

            <h2 className="founder-name">
              {site.founder.name}
            </h2>

            <p className="founder-company">
              {site.name}
            </p>

            <div className="founder-signature-line" />

            <div className="founder-actions">
              <a
                className="btn btn-gold btn-sm"
                href={waLink(`Hello Anand Raj, I would like to consult with you on an Arvika Resin & Design project.`)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} />
                <span>Connect With Founder</span>
              </a>
              <a
                className="btn btn-ghost btn-sm"
                href={`tel:${site.tel}`}
              >
                <Phone size={15} />
                <span>Direct Studio Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    estimatedArea: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.'
    }
    const cleanPhone = formData.phone.replace(/[\s+-]/g, '').replace(/^91/, '')
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.'
    }
    if (!formData.service) {
      errs.service = 'Please choose a service or product of interest.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details about your space or vision (10+ characters).'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const summary = `Hello Arvika Resin & Design!
My Name: ${formData.name}
Phone: ${formData.phone}
Interested In: ${formData.service}
${formData.estimatedArea ? `Estimated Dimensions/Area: ${formData.estimatedArea}\n` : ''}Project Details: ${formData.message}`

    window.open(waLink(summary), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const allOptions = [
    ...services.map((s) => `Flooring: ${s.name}`),
    ...productCategories.filter((c) => c !== 'All').map((c) => `Creation: ${c}`),
    'Other / Custom Project'
  ]

  return (
    <section id="contact" className="sec-contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-details-col" data-aos="fade-up" data-aos-duration="800">
            <SectionHeader
              eyebrow="Initiate A Commission"
              title={
                <>
                  Let's Bring Your <em>Vision To Life</em>
                </>
              }
              subtitle="Whether transforming a villa floor, an automotive showroom, or commissioning a bespoke river table, our master artisans are ready."
            />

            <ul className="contact-info-list">
              <li className="contact-info-item">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-info-label">Direct Studio Phone</span>
                  <a href={`tel:${site.tel}`} className="contact-info-val">
                    {site.phone}
                  </a>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon-box">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="contact-info-label">Instant WhatsApp Chat</span>
                  <a
                    href={waLink('Hello Arvika, I would like to consult on a project.')}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info-val"
                  >
                    +91 {site.wa}
                  </a>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-info-label">Direct Email</span>
                  <a href={`mailto:${site.email}`} className="contact-info-val">
                    {site.email}
                  </a>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-info-label">Studio Workshop Location</span>
                  <span className="contact-info-val">{site.location}</span>
                </div>
              </li>
            </ul>

            <div className="quick-action-pills">
              <a
                className="btn btn-gold btn-sm"
                href={waLink('Hello Arvika, I would like to schedule a consultation.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
              <a className="btn btn-ghost btn-sm" href={`tel:${site.tel}`}>
                <Phone size={15} />
                <span>Call Directly</span>
              </a>
              <a className="btn btn-ghost btn-sm" href={`mailto:${site.email}`}>
                <Mail size={15} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="contact-form-col" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            {submitted ? (
              <motion.div
                className="form-success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You, {formData.name}</h3>
                <p>
                  Your consultation details have been formatted and WhatsApp has opened in a new tab. Simply tap "Send" in WhatsApp to connect directly with our studio!
                </p>
                <p className="privacy-note">
                  <em>No data is stored on remote servers; all communications are end-to-end direct with Arvika Resin & Design.</em>
                </p>
                <button
                  className="btn btn-ghost btn-md"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      phone: '',
                      service: '',
                      estimatedArea: '',
                      message: ''
                    })
                  }}
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form-card">
                <div className="form-card-header">
                  <h3>Project Consultation Form</h3>
                  <p>Receive a tailored recommendation and direct estimate.</p>
                </div>

                <div className="form-group">
                  <label htmlFor="client-name">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="e.g. Ramesh Kumar"
                    autoComplete="name"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <small className="field-error">{errors.name}</small>}
                </div>

                <div className="form-group">
                  <label htmlFor="client-phone">
                    WhatsApp / Phone Number <span className="req">*</span>
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="e.g. 98765 43210"
                    autoComplete="tel"
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <small className="field-error">{errors.phone}</small>}
                </div>

                <div className="form-group">
                  <label htmlFor="client-service">
                    Service or Product of Interest <span className="req">*</span>
                  </label>
                  <select
                    id="client-service"
                    value={formData.service}
                    onChange={handleChange('service')}
                    className={errors.service ? 'input-error' : ''}
                  >
                    <option value="">Select a service or creation...</option>
                    {allOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && <small className="field-error">{errors.service}</small>}
                </div>

                <div className="form-group">
                  <label htmlFor="client-area">
                    Estimated Area / Dimensions <span className="opt">(Optional)</span>
                  </label>
                  <input
                    id="client-area"
                    type="text"
                    value={formData.estimatedArea}
                    onChange={handleChange('estimatedArea')}
                    placeholder="e.g. 1,200 sq.ft floor, or 6x3 ft dining table"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="client-message">
                    Project Vision or Questions <span className="req">*</span>
                  </label>
                  <textarea
                    id="client-message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="Describe your space, timeline, preferred color palette, or requirements..."
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <small className="field-error">{errors.message}</small>}
                </div>

                <button type="submit" className="btn btn-gold btn-full btn-lg">
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

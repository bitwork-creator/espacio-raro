import { useEffect, useRef, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const logoRef = useRef(null)
  const bgRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 28
      const ry = (e.clientY / window.innerHeight - 0.5) * 18
      if (logoRef.current) {
        logoRef.current.style.transform = `translate(${rx * 0.4}px, ${ry * 0.4}px)`
      }
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${rx * -0.25}px, ${ry * -0.25}px) scale(1.06)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <section className="hero" id="hero">
      <div className="grain" aria-hidden="true" />

      <div className="hero-bg" ref={bgRef} style={{ backgroundImage: 'url(/hero-bg.jpg)' }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <nav className="nav" role="navigation">
        <a href="#hero" className="nav-brand" aria-label="Espacio RARO – Inicio">
          <span className="nav-brand-sub">ESPACIO</span>
          <span className="nav-brand-main">RARO</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Lookbook</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>The Lab</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Reservar
          </a>
        </div>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="hero-content">
        <div className="hero-tag">
          <span>EST. 2024</span>
          <span className="tag-sep" aria-hidden="true">—</span>
          <span>VALENCIA, ES</span>
        </div>

        <h1 className="hero-title" ref={logoRef}>
          <span className="raro-letter" aria-hidden="true">R</span>
          <span className="raro-letter" aria-hidden="true">A</span>
          <span className="raro-letter" aria-hidden="true">R</span>
          <span className="raro-letter" aria-hidden="true">O</span>
          <span className="sr-only">Espacio RARO Hairlab — Peluquería Creativa en Valencia</span>
        </h1>

        <p className="hero-subtitle">No venimos a gustarle a todxs.</p>

        <div className="hero-actions">
          <a href="#gallery" className="btn-primary">Ver el trabajo</a>
          <a
            href="https://wa.me/34602737920?text=Hola%2C%20quisiera%20reservar%20una%20cita%20en%20Espacio%20RARO%20Hairlab."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Reservar cita
          </a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-bar" />
      </div>

      <div className="side-label side-label--left">
        <span aria-hidden="true">CORTES — COLOR — RITUAL</span>
        <span className="sr-only">Servicios: Cortes, Color y Ritual</span>
      </div>
      <div className="side-label side-label--right" aria-hidden="true">
        ALEJANDRA SOLER 13
      </div>
    </section>
  )
}

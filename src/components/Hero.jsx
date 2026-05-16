import { useEffect, useRef, useState } from 'react'
import raro13 from '../assets/RARO_13.png'
import './Hero.css'

export default function Hero() {
  const logoRef = useRef(null)
  const bgRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
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

      <div className="hero-bg" ref={bgRef} style={{ backgroundImage: `url(${raro13})` }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <nav className="nav" role="navigation">
        <a href="#hero" className="nav-brand" aria-label="Espacio RARO – Inicio">
          <span className="nav-brand-sub">ESPACIO</span>
          <span className="nav-brand-main">RARO</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`} role="menubar">
          <a href="#gallery" role="menuitem" onClick={() => setMenuOpen(false)}>Lookbook</a>
          <a href="#location" role="menuitem" onClick={() => setMenuOpen(false)}>The Lab</a>
          <a href="#contact" role="menuitem" onClick={() => setMenuOpen(false)}>Contacto</a>
          <a href="#contact" className="nav-cta" role="menuitem" onClick={() => setMenuOpen(false)}>
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

        <h1 className="hero-title" ref={logoRef} aria-label="RARO">
          <span className="raro-letter">R</span>
          <span className="raro-letter">A</span>
          <span className="raro-letter">R</span>
          <span className="raro-letter">O</span>
        </h1>

        <p className="hero-subtitle">Not your average haircut.</p>

        <div className="hero-actions">
          <a href="#gallery" className="btn-primary">Ver el trabajo</a>
          <a href="#contact" className="btn-ghost">Reservar cita</a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-bar" />
      </div>

      <div className="side-label side-label--left" aria-hidden="true">
        CORTES — COLOR — RITUAL
      </div>
      <div className="side-label side-label--right" aria-hidden="true">
        ALEJANDRA SOLER 13
      </div>
    </section>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import raro12 from '../assets/RARO_12.png'
import './Footer.css'

export default function Footer() {
  const sectionRef = useScrollReveal()

  return (
    <footer className="footer" id="contact" ref={sectionRef}>
      <div className="footer-cta-block" style={{ backgroundImage: `url(${raro12})` }}>
        <div className="footer-cta-bg-overlay" aria-hidden="true" />
        <div className="section-label reveal">04 — CONTACTO</div>
        <h2 className="footer-headline reveal reveal-delay-1">
          ¿Listo para<br />el cambio?
        </h2>
        <p className="footer-sub reveal reveal-delay-2">
          Reservá tu cita directo por Instagram.
        </p>
        <a
          href="https://www.instagram.com/espacioraro.hairlab/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-book reveal reveal-delay-3"
        >
          <span>Reservar en Instagram</span>
          <span className="btn-book-arrow" aria-hidden="true">→</span>
        </a>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-bottom">
        <div className="footer-brand">
          <span className="footer-brand-sub">ESPACIO</span>
          <span className="footer-brand-main">RARO</span>
        </div>

        <address className="footer-address">
          Calle Alejandra Soler 13<br />
          Valencia, España
        </address>

        <nav className="footer-links" aria-label="Enlaces externos">
          <a
            href="https://www.instagram.com/espacioraro.hairlab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://maps.google.com/?q=C.+de+Alejandra+Soler,+13,+Ciutat+Vella,+46003+Val%C3%A8ncia,+Valencia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </nav>

        <p className="footer-copy">© 2024 Espacio RARO</p>
      </div>
    </footer>
  )
}

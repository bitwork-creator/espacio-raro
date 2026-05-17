import { useScrollReveal } from '../hooks/useScrollReveal'
import raro9 from '../assets/RARO_9.jpg'
import './Location.css'

export default function Location() {
  const sectionRef = useScrollReveal()

  return (
    <section className="location" id="location" ref={sectionRef}>
      <div className="location-inner">
        <div className="location-text">
          <div className="section-label reveal">05 — THE LAB</div>
          <h2 className="location-title reveal reveal-delay-1">El Espacio</h2>

          <div className="location-desc reveal reveal-delay-2">
            <p>
              No es un salón. Es un taller. Un espacio donde todo está permitido.
            </p>
            <p>Work in progress, siempre.</p>
          </div>

          <div className="location-meta reveal reveal-delay-3">
            <div className="meta-row">
              <span className="meta-key">Dirección</span>
              <span className="meta-val">Calle Alejandra Soler 13, Valencia</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Horario</span>
              <span className="meta-val">Mar — Sáb &nbsp; 10:00–20:00</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Reservas</span>
              <span className="meta-val">Instagram DM</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=C.+de+Alejandra+Soler,+13,+Ciutat+Vella,+46003+Val%C3%A8ncia,+Valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-map reveal reveal-delay-4"
          >
            <span>Ver en Google Maps</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="location-visual reveal reveal-delay-2">
          <div className="location-img-frame">
            <img
              src={raro9}
              alt="Interior Espacio RARO – Valencia"
              loading="lazy"
            />
            <div className="location-img-overlay" aria-hidden="true" />
            <div className="location-img-label" aria-hidden="true">
              ESPACIO RARO — VALENCIA
            </div>
          </div>

          <div className="location-badge" aria-hidden="true">
            <span>WORK</span>
            <span>IN</span>
            <span>PROGRESS</span>
          </div>
        </div>
      </div>

      <div className="location-ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>CORTE &nbsp;·&nbsp; COLOR &nbsp;·&nbsp; RITUAL &nbsp;·&nbsp; RARO &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  )
}

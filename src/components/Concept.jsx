import { useScrollReveal } from '../hooks/useScrollReveal'
import './Concept.css'

export default function Concept() {
  const sectionRef = useScrollReveal()

  return (
    <section className="concept" id="concept" ref={sectionRef}>
      <div className="concept-inner">
        <div className="section-label reveal">03 — MANIFIESTO</div>

        <div className="concept-body">
          <h2 className="concept-headline reveal reveal-delay-1">
            Un acto<br />
            creativo,<br />
            personal<br />
            y colectivo.
          </h2>

          <div className="concept-text-col">
            <p className="concept-text reveal reveal-delay-2">
              Espacio RARO Hairlab nace como un proyecto que entiende la peluquería
              como un acto creativo, personal y colectivo. No es solo un lugar donde
              venir a cortarse el pelo, sino un espacio pensado para expresarse,
              compartir y sentirse parte de algo.
            </p>
            <p className="concept-welcome reveal reveal-delay-3">Todes son bienvenides.</p>
          </div>
        </div>

        <div className="concept-tags reveal reveal-delay-4">
          <span>Corte</span>
          <span className="concept-tag-sep" aria-hidden="true">·</span>
          <span>Color</span>
          <span className="concept-tag-sep" aria-hidden="true">·</span>
          <span>Ritual</span>
        </div>
      </div>
    </section>
  )
}

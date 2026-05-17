import { useScrollReveal } from '../hooks/useScrollReveal'
import './Testimonials.css'

const REVIEWS = [
  {
    id: 1,
    name: 'Maika Calzada',
    text: 'Vine buscando algo diferente y lo encontré. El corte perfecto, el ambiente increíble y una atención que no parece de peluquería normal. Ya he vuelto tres veces.',
  },
  {
    id: 2,
    name: 'Katarina Luistro',
    text: 'Llevaba tiempo buscando un sitio así. Te escuchan de verdad, el resultado habla por sí solo y el espacio tiene una vibra única. No lo cambiaría por nada.',
  },
  {
    id: 3,
    name: 'Rosana Gambino',
    text: 'El mejor corte que me han hecho en Valencia. Lo que consiguen aquí es artístico. Recomendadísimo.',
  },
  {
    id: 4,
    name: 'Umman Turkoglu',
    text: 'Un espacio donde te sentís completamente bienvenide. El equipo es muy creativo y el trato excelente. Es de esos sitios que se convierten en tu sitio.',
  },
]

export default function Testimonials() {
  const sectionRef = useScrollReveal()

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testimonials-inner">
        <div className="section-label reveal">04 — RESEÑAS</div>
        <h2 className="testimonials-title reveal reveal-delay-1">
          Lo que dice<br />nuestra gente.
        </h2>

        <div className="testimonials-grid">
          {REVIEWS.map((review, i) => (
            <figure
              key={review.id}
              className={`review-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="review-stars" aria-label="5 estrellas de 5">
                <span aria-hidden="true">★★★★★</span>
              </div>
              <blockquote className="review-text">
                <p>"{review.text}"</p>
              </blockquote>
              <figcaption className="review-name">{review.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials-aggregate reveal">
          <span className="aggregate-score">4.9</span>
          <span className="aggregate-stars" aria-hidden="true">★★★★★</span>
          <span className="aggregate-label">106 reseñas en Google</span>
        </div>
      </div>
    </section>
  )
}

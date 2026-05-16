import { useScrollReveal } from '../hooks/useScrollReveal'
import './Gallery.css'

import raro1 from '../assets/RARO_1.jpg'
import raro2 from '../assets/RARO_2.jpg'
import raro3 from '../assets/RARO_3.jpg'
import raro4 from '../assets/RARO_4.jpg'
import raro5 from '../assets/RARO_5.jpg'
import raro6 from '../assets/RARO_6.jpg'
import raro7 from '../assets/RARO_11.jpg'
import raro8 from '../assets/RARO_8.jpg'

const ITEMS = [
  { id: 1, img: raro1, w: 600, h: 900, span: 1, label: 'Mullet Neo-Berlin', tag: 'CORTE' },
  { id: 2, img: raro2, w: 600, h: 900, span: 1, label: 'Color Fantasía', tag: 'COLOR' },
  { id: 3, img: raro3, w: 600, h: 900, span: 1, label: 'Raw Texture', tag: 'TEXTURA' },
  { id: 4, img: raro4, w: 1200, h: 700, span: 2, label: 'The Cut', tag: 'CORTE' },
  { id: 5, img: raro5, w: 600, h: 900, span: 1, label: 'Neon Roots', tag: 'COLOR' },
  { id: 6, img: raro6, w: 600, h: 900, span: 1, label: 'Undercut Industrial', tag: 'CORTE' },
  { id: 11, img: raro11, w: 600, h: 900, span: 1, label: 'Dark Wave', tag: 'ESPACIO' },
  { id: 8, img: raro8, w: 600, h: 900, span: 1, label: 'Brutalista', tag: 'TEXTURA' },
]

function GalleryItem({ item, index }) {
  return (
    <div
      className={`gallery-item reveal reveal-delay-${(index % 3) + 1}`}
      data-span={item.span}
      style={{ '--span': item.span }}
    >
      <div className="gallery-img-wrap">
        <img
          src={item.img}
          alt={item.label}
          loading="lazy"
          width={item.w}
          height={item.h}
        />
        <div className="gallery-img-overlay" aria-hidden="true" />
      </div>
      <div className="gallery-item-meta">
        <span className="gallery-item-tag">{item.tag}</span>
        <span className="gallery-item-label">{item.label}</span>
        <span className="gallery-item-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const sectionRef = useScrollReveal()

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="gallery-header reveal">
        <div className="section-label">02 — LOOKBOOK</div>
        <h2 className="gallery-title">El Trabajo</h2>
        <p className="gallery-desc">Cada corte es un manifiesto.</p>
      </div>

      <div className="gallery-grid">
        {ITEMS.map((item, i) => (
          <GalleryItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

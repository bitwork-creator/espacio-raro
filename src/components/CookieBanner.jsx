import './CookieBanner.css'

const STORAGE_KEY = 'raro-cookie-consent'

export default function CookieBanner({ onDismiss }) {
  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    onDismiss()
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    onDismiss()
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <div className="cookie-inner">
        <p className="cookie-text">
          Usamos cookies para mejorar tu experiencia. Nada raro.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn--reject" onClick={reject}>
            Solo esenciales
          </button>
          <button className="cookie-btn cookie-btn--accept" onClick={accept}>
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  )
}

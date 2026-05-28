import { useRef, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <footer id="contact" className="footer" ref={ref}>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-left">
            <h2>
              Let's build<br />
              something <span className="italic">extraordinary.</span>
            </h2>
          </div>
          <div className="footer-right">
            <a href="mailto:contact@andicleopatra.dev" className="footer-email">
              contact@andicleopatra.dev
            </a>
            <div className="social-links">
              <a href="https://linkedin.com/in/andicleopatramaryamjamila/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Andi Cleopatra. All rights reserved.</p>
          <button
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  )
}

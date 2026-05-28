import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-left">
        <h1>
          UI/UX Designer &amp;<br />
          <span className="italic">Frontend Developer</span>
        </h1>
        <p className="hero-desc">
          Fresh graduate from Telkom University with a passion for crafting seamless digital experiences. Specializing in UI/UX design and frontend development with tools like Figma and Flutter to build beautiful, user-centric applications.
        </p>
        <a
          href="#work"
          className="explore-link"
          onClick={e => {
            e.preventDefault()
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          EXPLORE SELECTED WORKS &rarr;
        </a>
      </div>

      <div className="hero-right">
        <div className="image-container">
          <div className="swirl" />
          <div className="status-badge">
            <p>Based in Jakarta</p>
            <p>Available for freelance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

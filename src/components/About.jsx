import { useRef, useEffect } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={ref}>
      <p className="about-statement">
        "I craft digital experiences where{' '}
        <span className="italic">usability</span> meets{' '}
        <span className="italic">elegant aesthetic</span>. My approach centers
        on thoughtful UI/UX design and solid frontend development."
      </p>
    </section>
  )
}

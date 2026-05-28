import { useRef, useEffect } from 'react'
import './Curation.css'

const categories = [
  {
    heading: 'Development',
    items: ['Frontend Development', 'Flutter', 'Frontend Coding', 'Responsive Web Design'],
  },
  {
    heading: 'Design & UI/UX',
    items: ['User Interface Design', 'User Experience (UX)', 'Figma (Software)', 'Usability Principles'],
  },
  {
    heading: 'Certifications',
    items: ['IBM: Intro to UI/UX Design', 'Sololearn: UX/UI Fundamentals'],
  },
]

export default function Curation() {
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
    <section id="curation" className="curation-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Curation</h2>
        <span className="section-counter">Expertise</span>
      </div>

      <div className="curation-grid">
        {categories.map((cat, i) => (
          <div className="curation-col" key={i}>
            <h4>{cat.heading}</h4>
            <ul>
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

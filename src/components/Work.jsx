import { useRef, useEffect } from 'react'
import './Work.css'

const projects = [
  {
    year: '2024',
    category: 'Internship / Mobile',
    title: 'Mobile App Developer',
    brief: 'Frontend coding and Flutter development during an 8-month internship at PT Indonesia Satu Tuju Group.',
  },
  {
    year: '2023',
    category: 'Academic / UI/UX',
    title: 'Graduation Project',
    brief: 'Comprehensive UI/UX design and frontend development for an academic project at Universitas Telkom.',
  },
]

export default function Work() {
  const listRef = useRef(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.work-item')
    if (!items) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
        <span className="section-counter">01 — 0{projects.length}</span>
      </div>

      <div className="work-list" ref={listRef}>
        {projects.map((p, i) => (
          <a href="#" className="work-item" key={i}>
            <div className="work-meta">
              <span className="work-year">{p.year}</span>
              <span className="work-cat">{p.category}</span>
            </div>
            <div className="work-info">
              <h3 className="work-name">{p.title}</h3>
              <p className="work-brief">{p.brief}</p>
            </div>
            <span className="work-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

import { useRef, useEffect } from 'react'
import './Archive.css'

const records = [
  { year: '2024', role: 'Mobile Application Developer', company: 'PT Indonesia Satu Tuju Group', location: 'Jakarta' },
  { year: '2023', role: 'Graduation Project', company: 'Universitas Telkom', location: 'Bandung' },
  { year: '2021–2025', role: 'Undergraduate Student', company: 'Telkom University', location: 'Bandung' },
]

export default function Archive() {
  const ref = useRef(null)

  useEffect(() => {
    const rows = ref.current?.querySelectorAll('.archive-row')
    if (!rows) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    rows.forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="archive" className="archive-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Archive</h2>
        <span className="section-counter">Experience</span>
      </div>

      <div className="archive-table">
        {records.map((r, i) => (
          <div className="archive-row" key={i}>
            <span className="col-year">{r.year}</span>
            <span className="col-role">{r.role}</span>
            <span className="col-company">{r.company}</span>
            <span className="col-location">{r.location}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

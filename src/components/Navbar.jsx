import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Curation', href: '#curation' },
  { label: 'Archive', href: '#archive' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [active, setActive] = useState('Work')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // scrollspy
      const sections = navItems.map(n => document.querySelector(n.href)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 200) {
          setActive(navItems[i].label)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, item) => {
    e.preventDefault()
    setActive(item.label)
    setMenuOpen(false)
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          andi<br />cleopatra
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className={active === item.label ? 'active' : ''}
                onClick={e => handleClick(e, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-contact" onClick={e => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}>Contact</a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

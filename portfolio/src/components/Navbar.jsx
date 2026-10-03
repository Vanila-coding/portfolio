import { useEffect, useRef, useState } from 'react'
import logoMark from '../assets/logo-mark.webp'
import { profile } from '../data/profile.js'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#journey', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isOpen ? 'is-open' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" onClick={closeMenu}>
          <img src={logoMark} alt="" width="56" height="31" />
          <span>{profile.name}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar__burger" aria-hidden="true" />
        </button>

        <nav aria-label="Navigation principale">
          <ul id="site-menu" className="navbar__menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="navbar__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

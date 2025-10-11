'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <span className="logo-text">Shalin</span>
          <span className="logo-dot">.</span>
          <span className="logo-subtext">dev</span>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" className="nav-link" onClick={(e) => handleLinkClick(e, '#hero')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
          <li><a href="#skills" className="nav-link" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
          <li><a href="#education" className="nav-link" onClick={(e) => handleLinkClick(e, '#education')}>Education</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

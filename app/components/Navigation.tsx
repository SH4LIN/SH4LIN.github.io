'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
        >
          <span className="logo-text">Shalin</span>
        </a>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#hero"
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('hero')
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('education')
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <div
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

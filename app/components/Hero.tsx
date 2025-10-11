'use client'

import { useEffect, useState } from 'react'

interface ProfileData {
  name: string
  roles: string[]
}

export default function Hero({ profile }: { profile: ProfileData }) {
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!profile) return

    const roles = profile.roles
    const currentText = roles[roleIndex]

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentRole(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)

          if (charIndex === 0) {
            setIsDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
          }
        } else {
          setCurrentRole(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)

          if (charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [profile, roleIndex, charIndex, isDeleting])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-name">{profile?.name || 'Shalin Shah'}</h1>
        <div className="typing-container">
          <span className="typing-prefix">I'm a </span>
          <span className="typing-text">{currentRole}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-description">Building exceptional digital experiences through code</p>
        <div className="hero-buttons">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
          >
            <span>Get In Touch</span>
            <div className="btn-particles"></div>
          </a>
          <a
            href="#experience"
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('experience')
            }}
          >
            <span>View My Work</span>
            <div className="btn-particles"></div>
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-container">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  )
}

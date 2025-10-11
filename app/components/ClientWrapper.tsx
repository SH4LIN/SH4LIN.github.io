'use client'

import { useEffect } from 'react'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate')
        }
      })
    }, observerOptions)

    // Observe all elements with data-aos attribute after a short delay
    setTimeout(() => {
      document.querySelectorAll('[data-aos]').forEach((element) => {
        observer.observe(element)
      })
    }, 100)

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}

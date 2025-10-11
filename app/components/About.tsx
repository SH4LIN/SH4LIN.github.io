'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProfileData {
    location: string
    email: string
    phone: string
    summary: string
}

export default function About({ profile }: { profile: ProfileData }) {
    const statsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(statsRef, { once: true, amount: 0.5 })

    useEffect(() => {
        if (!isInView) return

        const stats = statsRef.current?.querySelectorAll('.stat-number')
        stats?.forEach((stat) => {
            const target = parseInt((stat as HTMLElement).getAttribute('data-target') || '0')
            animateCounter(stat as HTMLElement, target)
        })
    }, [isInView])

    const animateCounter = (element: HTMLElement, target: number) => {
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0

        const updateCounter = () => {
            current += step
            if (current < target) {
                element.textContent = Math.floor(current).toString()
                requestAnimationFrame(updateCounter)
            } else {
                element.textContent = target + '+'
            }
        }

        updateCounter()
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">01.</span>
          <span className="title-text">About Me</span>
          <span className="title-line"></span>
        </motion.h2>
        <div className="about-content">
          <div className="about-text">
            <motion.div 
              className="profile-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="profile-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="profile-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>{profile.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <span>{profile.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📱</span>
                  <span>{profile.phone}</span>
                </div>
              </div>
              <p className="about-description">
                {profile.summary}</p>
            </motion.div>
              <motion.div 
                className="stats-container" 
                ref={statsRef}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { target: 5, label: 'Years Experience' },
                  { target: 30, label: 'Projects Completed' },
                  { target: 20, label: 'Technologies' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-number" data-target={stat.target}>0</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
    </section>
    )
}

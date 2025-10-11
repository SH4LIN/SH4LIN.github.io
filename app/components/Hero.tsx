'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [profile, roleIndex, charIndex, isDeleting])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const
      }
    }
  }

  return (
    <section id="hero" className="hero-section">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          Hello, I'm
        </motion.div>
        <motion.h1 variants={itemVariants} className="hero-name">
          {profile?.name || 'Shalin Shah'}
        </motion.h1>
        <motion.div variants={itemVariants} className="typing-container">
          <span className="typing-prefix">I'm a </span>
          <span className="typing-text">{currentRole}</span>
          <motion.span 
            className="cursor"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ 
              duration: 0.7, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            |
          </motion.span>
        </motion.div>
        <motion.p variants={itemVariants} className="hero-description">
          Building exceptional digital experiences through code
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ 
              y: -3, 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get In Touch</span>
          </motion.a>
          <motion.a 
            href="#experience" 
            className="btn btn-secondary"
            whileHover={{ 
              y: -3, 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View My Work</span>
          </motion.a>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="scroll-indicator"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="mouse">
            <motion.div 
              className="wheel"
              animate={{ 
                y: [10, 30],
                opacity: [1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
          <div className="arrow-container">
            {[0, 1, 2].map((i) => (
              <motion.span 
                key={i}
                className="arrow"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className="floating-shapes">
        {[0, 1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            className={`shape shape-${i + 1}`}
            initial={{ opacity: 0 }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              rotate: [0, 120, 240, 360],
              opacity: [0, 0.3, 0.3, 0.3, 0.3],
            }}
            transition={{
              duration: 20,
              delay: i * 5,
              repeat: Infinity,
              ease: 'linear',
              opacity: { duration: 2, ease: 'easeIn' }
            }}
          />
        ))}
      </div>
    </section>
  )
}

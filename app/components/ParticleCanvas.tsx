'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  xMovement: number
  yMovement: number
}

export default function ParticleCanvas() {
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    const generateParticles = (count: number): Particle[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 20,
        delay: Math.random() * 5,
        xMovement: Math.random() * 100 - 50,
        yMovement: Math.random() * 100 - 50,
      }))
    }
    
    const particleCount = window.innerWidth < 768 ? 30 : 60
    setParticles(generateParticles(particleCount))
    
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 30 : 60
      if ((newCount === 30 && particles.length > 30) || (newCount === 60 && particles.length < 60)) {
        setParticles(generateParticles(newCount))
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (particles.length === 0) {
    return null
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, particle.xMovement, 0],
            y: [0, particle.yMovement, 0],
            opacity: [0, 0.2, 0.5, 0.2, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0,
          }}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.4)',
          }}
        />
      ))}
    </div>
  )
}

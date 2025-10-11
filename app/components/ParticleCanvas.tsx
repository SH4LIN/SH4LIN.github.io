'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

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
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
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
    setMounted(true)
    
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 30 : 60
      if ((newCount === 30 && particles.length > 30) || (newCount === 60 && particles.length < 60)) {
        setParticles(generateParticles(newCount))
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!mounted || particles.length === 0) {
    return null
  }

  return (
    <div 
      ref={containerRef}
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
        <Particle 
          key={particle.id} 
          particle={particle} 
          mouseX={mouseX} 
          mouseY={mouseY}
        />
      ))}
    </div>
  )
}

function Particle({ 
  particle, 
  mouseX, 
  mouseY 
}: { 
  particle: Particle
  mouseX: any
  mouseY: any
}) {
  const particleX = useMotionValue(0)
  const particleY = useMotionValue(0)
  
  // Calculate position in pixels
  const baseX = (particle.x / 100) * (typeof window !== 'undefined' ? window.innerWidth : 1920)
  const baseY = (particle.y / 100) * (typeof window !== 'undefined' ? window.innerHeight : 1080)
  
  // Mouse interaction - particles move away from cursor
  const distanceX = useTransform(
    mouseX,
    (x: number) => {
      const dx = x - baseX
      const dy = mouseY.get() - baseY
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 150 && distance > 0) {
        return -dx * ((150 - distance) / 150) * 30
      }
      return 0
    }
  )
  
  const distanceY = useTransform(
    mouseY,
    (y: number) => {
      const dx = mouseX.get() - baseX
      const dy = y - baseY
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 150 && distance > 0) {
        return -dy * ((150 - distance) / 150) * 30
      }
      return 0
    }
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.3, 0.6, 0.3, 0],
        scale: [0.8, 1, 1, 1, 0.8],
        x: [0, particle.xMovement, 0],
        y: [0, particle.yMovement, 0],
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
        background: 'rgba(99, 102, 241, 0.6)',
        boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
        x: distanceX,
        y: distanceY,
      }}
    />
  )
}

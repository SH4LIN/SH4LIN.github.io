'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.nav 
      className={`nav-container ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="logo-text">Shalin</span>
          <motion.span 
            className="logo-dot"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            .
          </motion.span>
          <span className="logo-subtext">dev</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <ul className="nav-menu">
          {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className="nav-link" 
                onClick={(e) => handleLinkClick(e, `#${item === 'Home' ? 'hero' : item.toLowerCase()}`)}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            className="nav-menu active"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="nav-link" 
                  onClick={(e) => handleLinkClick(e, `#${item === 'Home' ? 'hero' : item.toLowerCase()}`)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

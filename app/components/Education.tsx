'use client'

import { motion } from 'framer-motion'

export default function Education({ education }: { education: any[] }) {
  const icons = ['🎓', '📚']
  
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
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">04.</span>
          <span className="title-text">Education</span>
          <span className="title-line"></span>
        </motion.h2>
        <motion.div 
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className="education-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="education-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {icons[index] || '🎓'}
              </motion.div>
              <h3>{edu.degree}</h3>
              <p className="degree">{edu.field}</p>
              <p className="institution">{edu.institution}</p>
              <p className="location">{edu.location}</p>
              <p className="duration">{edu.startYear} - {edu.endYear}</p>
              <p className="education-description">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

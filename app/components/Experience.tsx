'use client'

import { motion } from 'framer-motion'

export default function Experience({ experience }: { experience: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">02.</span>
          <span className="title-text">Work Experience</span>
          <span className="title-line"></span>
        </motion.h2>
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experience.map((job) => (
            <motion.div 
              key={job.id} 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-dot"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(99, 102, 241, 0.4)',
                    '0 0 40px rgba(99, 102, 241, 0.4)',
                    '0 0 20px rgba(99, 102, 241, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="timeline-content"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="job-header">
                  <h3>{job.position}</h3>
                  <span className="company">{job.company}</span>
                </div>
                <div className="job-meta">
                  <span className="location">📍 {job.location}</span>
                  <span className="date">🗓️ {job.startDate} - {job.endDate}</span>
                </div>
                <ul className="job-description">
                  {job.description.map((desc: string, i: number) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="job-tech">
                  {job.technologies.map((tech: string, i: number) => (
                    <motion.span 
                      key={i} 
                      className="tech-tag"
                      whileHover={{ y: -2, scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

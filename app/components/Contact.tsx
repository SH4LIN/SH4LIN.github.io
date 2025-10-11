'use client'

import { motion } from 'framer-motion'

export default function Contact({ profile }: { profile: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">05.</span>
          <span className="title-text">Get In Touch</span>
          <span className="title-line"></span>
        </motion.h2>
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-intro">
            I'm currently open to new opportunities and interesting projects. Whether you have a question, 
            want to collaborate, or just want to say hi, feel free to reach out!
          </p>
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href={`mailto:${profile.email}`} 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <span className="contact-icon">📧</span>
              <span>{profile.email}</span>
            </motion.a>
            <motion.a 
              href={`tel:${profile.phone.replace(/\s/g, '')}`} 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <span className="contact-icon">📱</span>
              <span>{profile.phone}</span>
            </motion.a>
            <motion.a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <span className="contact-icon">💼</span>
              <span>LinkedIn Profile</span>
            </motion.a>
            <motion.a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <span className="contact-icon">💻</span>
              <span>GitHub Profile</span>
            </motion.a>
            <motion.div 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <span className="contact-icon">📍</span>
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

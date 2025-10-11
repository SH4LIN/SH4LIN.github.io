'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills({ skills }: { skills: any }) {
  if (!skills) return null

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">03.</span>
          <span className="title-text">Skills & Technologies</span>
          <span className="title-line"></span>
        </motion.h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.categories.map((category: any, index: number) => (
            <SkillCategory key={index} category={category} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillCategory({ category, variants }: { category: any, variants: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div 
      ref={ref}
      className="skill-category"
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      <h3>{category.name}</h3>
      <div className="skills-list">
        {category.skills.map((skill: any, i: number) => (
          <div key={i} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <motion.div 
                className="skill-progress"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

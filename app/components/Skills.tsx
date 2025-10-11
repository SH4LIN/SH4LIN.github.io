'use client'
import { useEffect } from 'react'

const skillIcons: { [key: string]: string } = {
  'Frontend': '🎨',
  'Backend': '⚙️',
  'DevOps': '🚀',
  'Database': '💾',
  'Tools': '🛠️',
  'Cloud': '☁️'
}

export default function Skills({ skills }: { skills: any }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.skill-progress')
          progressBars.forEach(bar => {
            const progress = (bar as HTMLElement).getAttribute('data-progress')
            ;(bar as HTMLElement).style.width = progress + '%'
          })
        }
      })
    }, { threshold: 0.3 })

    document.querySelectorAll('.skill-category').forEach(category => {
      observer.observe(category)
    })

    return () => observer.disconnect()
  }, [skills])

  if (!skills) return null

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-number">03.</span>
          <span className="title-text">Skills & Technologies</span>
          <span className="title-line"></span>
        </h2>
        <div className="skills-grid">
          {skills.categories.map((category: any, index: number) => (
            <div key={index} className="skill-category" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="skill-category-header">
                <span className="skill-icon">{skillIcons[category.name] || '💡'}</span>
                <h3>{category.name}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill: any, i: number) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-progress={skill.level}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

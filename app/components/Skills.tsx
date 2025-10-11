'use client'
import { useEffect, useState } from 'react'

const categoryData: { [key: string]: { icon: string } } = {
  'Frontend Development': { icon: '⚛️' },
  'Mobile Development': { icon: '📱' },
  'Backend & CMS': { icon: '⚙️' },
  'Tools & Technologies': { icon: '🛠️' },
}

const skillLogos: { [key: string]: { logo: string; color: string } } = {
  React: { logo: 'react', color: '61DAFB' },
  JavaScript: { logo: 'javascript', color: 'F7DF1E' },
  HTML5: { logo: 'html5', color: 'E34F26' },
  CSS3: { logo: 'css3', color: '1572B6' },
  TypeScript: { logo: 'typescript', color: '3178C6' },
  Android: { logo: 'android', color: '3DDC84' },
  Kotlin: { logo: 'kotlin', color: '7F52FF' },
  Flutter: { logo: 'flutter', color: '02569B' },
  Dart: { logo: 'dart', color: '0175C2' },
  Java: { logo: 'java', color: '007396' },
  WordPress: { logo: 'wordpress', color: '21759B' },
  PHP: { logo: 'php', color: '777BB4' },
  Firebase: { logo: 'firebase', color: 'FFCA28' },
  'Spring Boot': { logo: 'spring', color: '6DB33F' },
  'Node.js': { logo: 'nodedotjs', color: '339933' },
  Git: { logo: 'git', color: 'F05032' },
  GitHub: { logo: 'github', color: '181717' },
  Jira: { logo: 'jira', color: '0052CC' },
  'REST APIs': { logo: 'fastapi', color: '009688' },
  Databases: { logo: 'mysql', color: '4479A1' },
}

interface Skill {
  name: string
  level: number
}

interface Category {
  name: string
  skills: Skill[]
}

interface SkillsData {
  categories: Category[]
}

export default function Skills({ skills }: { skills: SkillsData }) {
  const [selectedCategory, setSelectedCategory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 80)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.skills-container')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [selectedCategory])

  if (!skills) {
    return null
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-number">03.</span>
          <span className="title-text">Skills & Technologies</span>
          <span className="title-line"></span>
        </h2>

        <div className="skills-container">
          {/* Category Tabs */}
          <div className="skills-tabs" data-aos="fade-up">
            {skills.categories.map((category: Category, index: number) => (
              <button
                key={index}
                className={`skill-tab ${selectedCategory === index ? 'active' : ''}`}
                onClick={() => setSelectedCategory(index)}
              >
                <span className="tab-icon">{categoryData[category.name]?.icon || '💡'}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="skills-display">
            {skills.categories.map((category: Category, catIndex: number) => (
              <div
                key={catIndex}
                className={`skills-content ${selectedCategory === catIndex ? 'active' : ''}`}
              >
                <div className="skills-cards">
                  {category.skills.map((skill: Skill, skillIndex: number) => {
                    const skillInfo = skillLogos[skill.name] || { logo: 'code', color: '6366f1' }
                    return (
                      <div key={skillIndex} className="skill-card">
                        <div className="skill-card-inner">
                          <div className="skill-card-front">
                            <div className="skill-icon-large">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skillInfo.logo}/${skillInfo.logo}-original.svg`}
                                alt={skill.name}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.onerror = null
                                  target.src = `https://cdn.simpleicons.org/${skillInfo.logo}/${skillInfo.color}`
                                }}
                              />
                            </div>
                            <div className="skill-name-large">{skill.name}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

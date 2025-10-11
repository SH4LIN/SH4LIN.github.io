'use client'
import { useEffect, useState } from 'react'

const categoryData: { [key: string]: { icon: string; color: string; gradient: string } } = {
  'Frontend Development': { 
    icon: '⚛️', 
    color: '#61dafb',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  'Mobile Development': { 
    icon: '📱', 
    color: '#3ddc84',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  'Backend & CMS': { 
    icon: '⚙️', 
    color: '#68a063',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  'Tools & Technologies': { 
    icon: '🛠️', 
    color: '#f0db4f',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
}

export default function Skills({ skills }: { skills: any }) {
  const [selectedCategory, setSelectedCategory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.skill-card')
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible')
            }, index * 80)
          })
        }
      })
    }, { threshold: 0.2 })

    const section = document.querySelector('.skills-container')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [selectedCategory, skills])

  const getSkillLogo = (skillName: string) => {
    const logoMap: { [key: string]: string } = {
      'React': 'react',
      'JavaScript': 'javascript',
      'HTML5': 'html5',
      'CSS3': 'css3',
      'TypeScript': 'typescript',
      'Android': 'android',
      'Kotlin': 'kotlin',
      'Flutter': 'flutter',
      'Dart': 'dart',
      'Java': 'openjdk',
      'WordPress': 'wordpress',
      'PHP': 'php',
      'Firebase': 'firebase',
      'Spring Boot': 'springboot',
      'Node.js': 'nodedotjs',
      'Git': 'git',
      'GitHub': 'github',
      'Jira': 'jira',
      'REST APIs': 'fastapi',
      'Databases': 'mysql'
    }
    
    return logoMap[skillName] || 'code'
  }

  const getSkillColor = (skillName: string) => {
    const colorMap: { [key: string]: string } = {
      'React': '#61DAFB',
      'JavaScript': '#F7DF1E',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'TypeScript': '#3178C6',
      'Android': '#3DDC84',
      'Kotlin': '#7F52FF',
      'Flutter': '#02569B',
      'Dart': '#0175C2',
      'Java': '#007396',
      'WordPress': '#21759B',
      'PHP': '#777BB4',
      'Firebase': '#FFCA28',
      'Spring Boot': '#6DB33F',
      'Node.js': '#339933',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Jira': '#0052CC',
      'REST APIs': '#009688',
      'Databases': '#4479A1'
    }
    
    return colorMap[skillName] || '#6366f1'
  }

  if (!skills) return null

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
            {skills.categories.map((category: any, index: number) => (
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
            {skills.categories.map((category: any, catIndex: number) => (
              <div
                key={catIndex}
                className={`skills-content ${selectedCategory === catIndex ? 'active' : ''}`}
              >
                <div className="skills-cards">
                  {category.skills.map((skill: any, skillIndex: number) => (
                    <div key={skillIndex} className="skill-card">
                      <div className="skill-card-inner">
                        <div className="skill-card-front">
                          <div className="skill-icon-large">
                            <img 
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${getSkillLogo(skill.name)}/${getSkillLogo(skill.name)}-original.svg`}
                              alt={skill.name}
                              style={{ 
                                width: '60px', 
                                height: '60px',
                                filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))'
                              }}
                              onError={(e) => {
                                // Fallback to simple icons if devicon fails
                                (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/${getSkillLogo(skill.name)}/${getSkillColor(skill.name).replace('#', '')}`
                              }}
                            />
                          </div>
                          <div className="skill-name-large">{skill.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface EducationItem {
  id?: string | number
  institution: string
  degree: string
  duration: string
  cgpa?: string
  description?: string
}

export default function Education({ education }: { education: EducationItem[] }) {
  const icons = ['🎓', '📚']

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-number">04.</span>
          <span className="title-text">Education</span>
          <span className="title-line"></span>
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div
              key={edu.id || index}
              className="education-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="education-icon">{icons[index] || '🎓'}</div>
              <h3>{edu.degree}</h3>
              <p className="degree">{edu.field}</p>
              <p className="institution">{edu.institution}</p>
              <p className="location">{edu.location}</p>
              <p className="duration">
                {edu.startYear} - {edu.endYear}
              </p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

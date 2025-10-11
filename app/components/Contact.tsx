export default function Contact({ profile }: { profile: any }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-number">05.</span>
          <span className="title-text">Get In Touch</span>
          <span className="title-line"></span>
        </h2>
        <div className="contact-content" data-aos="fade-up">
          <p className="contact-intro">
            I'm currently open to new opportunities and interesting projects. Whether you have a question, 
            want to collaborate, or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-item">
              <span className="contact-icon">📧</span>
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-item">
              <span className="contact-icon">📱</span>
              <span>{profile.phone}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💼</span>
              <span>LinkedIn Profile</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span>GitHub Profile</span>
            </a>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

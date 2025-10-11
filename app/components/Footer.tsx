interface ProfileData {
  github?: string
  linkedin?: string
  twitter?: string
}

export default function Footer({ profile }: { profile: ProfileData }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Shalin Shah. Designed & Built with passion.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

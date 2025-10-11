import ParticleCanvas from './components/ParticleCanvas'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ClientWrapper from './components/ClientWrapper'

import profileData from '../public/data/profile.json'
import experienceData from '../public/data/experience.json'
import skillsData from '../public/data/skills.json'
import educationData from '../public/data/education.json'

export default function Home() {
  return (
    <ClientWrapper>
      <ParticleCanvas />
      <Navigation />
      <main>
        <Hero profile={profileData} />
        <About profile={profileData} />
        <Experience experience={experienceData} />
        <Skills skills={skillsData} />
        <Education education={educationData} />
        <Contact profile={profileData} />
      </main>
      <Footer profile={profileData} />
    </ClientWrapper>
  )
}

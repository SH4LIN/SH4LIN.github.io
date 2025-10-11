'use client'

import { useEffect, useState } from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

interface ProfileData {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  summary: string
  roles: string[]
}

interface ExperienceData {
  id: number
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  technologies: string[]
}

interface SkillsData {
  categories: Array<{
    name: string
    skills: Array<{
      name: string
      level: number
    }>
  }>
}

interface EducationData {
  id: number
  degree: string
  field: string
  institution: string
  location: string
  startYear: number
  endYear: number
  description: string
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [experience, setExperience] = useState<ExperienceData[]>([])
  const [skills, setSkills] = useState<SkillsData | null>(null)
  const [education, setEducation] = useState<EducationData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [profileRes, expRes, skillsRes, eduRes] = await Promise.all([
          fetch('/data/profile.json'),
          fetch('/data/experience.json'),
          fetch('/data/skills.json'),
          fetch('/data/education.json'),
        ])

        const profileData = await profileRes.json()
        const expData = await expRes.json()
        const skillsData = await skillsRes.json()
        const eduData = await eduRes.json()

        setProfile(profileData)
        setExperience(expData)
        setSkills(skillsData)
        setEducation(eduData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      <ParticleCanvas />
      <Navigation />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

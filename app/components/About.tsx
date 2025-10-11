'use client'

import { useEffect, useRef } from 'react'

interface ProfileData {
    location: string
    email: string
    phone: string
    summary: string
}

export default function About({ profile }: { profile: ProfileData }) {
    const statsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stats = entry.target.querySelectorAll('.stat-number')
                        stats.forEach((stat) => {
                            const target = parseInt(
                                (stat as HTMLElement).getAttribute('data-target') || '0'
                            )
                            animateCounter(stat as HTMLElement, target)
                        })
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const animateCounter = (element: HTMLElement, target: number) => {
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0

        const updateCounter = () => {
            current += step
            if (current < target) {
                element.textContent = Math.floor(current).toString()
                requestAnimationFrame(updateCounter)
            } else {
                element.textContent = target + '+'
            }
        }

        updateCounter()
    }

    return (
        <section id='about' className='about-section'>
            <div className='container'>
                <h2 className='section-title' data-aos='fade-up'>
                    <span className='title-number'>01.</span>
                    <span className='title-text'>About Me</span>
                    <span className='title-line'></span>
                </h2>
                <div className='about-content'>
                    <div className='about-text' data-aos='fade-right'>
                        <div className='profile-card'>
                            <div className='profile-glow'></div>
                            <div className='profile-info'>
                                <div className='info-item'>
                                    <span className='info-icon'>📍</span>
                                    <span>{profile.location}</span>
                                </div>
                                <div className='info-item'>
                                    <span className='info-icon'>📧</span>
                                    <span>{profile.email}</span>
                                </div>
                                <div className='info-item'>
                                    <span className='info-icon'>📱</span>
                                    <span>{profile.phone}</span>
                                </div>
                            </div>
                            <p className='about-description'>{profile.summary}</p>
                        </div>
                        <div className='stats-container' ref={statsRef}>
                            <div className='stat-item'>
                                <div className='stat-number' data-target='5'>
                                    0
                                </div>
                                <div className='stat-label'>Years Experience</div>
                            </div>
                            <div className='stat-item'>
                                <div className='stat-number' data-target='30'>
                                    0
                                </div>
                                <div className='stat-label'>Projects Completed</div>
                            </div>
                            <div className='stat-item'>
                                <div className='stat-number' data-target='20'>
                                    0
                                </div>
                                <div className='stat-label'>Technologies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

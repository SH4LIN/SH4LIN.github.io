'use client'

interface ExperienceItem {
    id: number
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string[]
    technologies?: string[]
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
    return (
        <section id='experience' className='experience-section'>
            <div className='container'>
                <h2 className='section-title' data-aos='fade-up'>
                    <span className='title-number'>02.</span>
                    <span className='title-text'>Work Experience</span>
                    <span className='title-line'></span>
                </h2>
                <div className='timeline'>
                    {experience.map((job) => (
                        <div key={job.id} className='timeline-item' data-aos='fade-up'>
                            <div className='timeline-dot'></div>
                            <div className='timeline-content'>
                                <div className='job-header'>
                                    <h3>{job.position}</h3>
                                    <span className='company'>{job.company}</span>
                                </div>
                                <div className='job-meta'>
                                    <span className='location'>📍 {job.location}</span>
                                    <span className='date'>
                                        🗓️ {job.startDate} - {job.endDate}
                                    </span>
                                </div>
                                <ul className='job-description'>
                                    {job.description.map((desc: string, i: number) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                <div className='job-tech'>
                                    {job.technologies?.map((tech: string, i: number) => (
                                        <span key={i} className='tech-tag'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

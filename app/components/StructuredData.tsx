export default function StructuredData() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Shalin Shah',
        jobTitle: 'Full Stack Developer',
        url: 'https://sh4lin.me',
        sameAs: ['https://in.linkedin.com/in/shalin-shah-838530190', 'https://github.com/SH4LIN'],
        email: 'shalinshh723@gmail.com',
        telephone: '+918320224014',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
        },
        knowsAbout: [
            'React Development',
            'WordPress Development',
            'Android Development',
            'Flutter Development',
            'Full Stack Development',
            'JavaScript',
            'TypeScript',
            'Kotlin',
            'PHP',
            'Firebase',
            'Spring Boot',
        ],
        hasOccupation: {
            '@type': 'Occupation',
            name: 'Full Stack Developer',
            occupationLocation: {
                '@type': 'City',
                name: 'Ahmedabad',
            },
            skills: [
                'React',
                'WordPress',
                'Android Development',
                'Flutter',
                'JavaScript',
                'TypeScript',
                'Kotlin',
                'PHP',
            ],
        },
    }

    const professionalServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Shalin Shah - Full Stack Development Services',
        image: 'https://sh4lin.me/og-image.svg',
        url: 'https://sh4lin.me',
        telephone: '+918320224014',
        email: 'shalinshh723@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '23.0225',
            longitude: '72.5714',
        },
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Development Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'React Development',
                        description:
                            'Modern React application development with TypeScript, Next.js, and state management solutions',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'WordPress Development',
                        description:
                            'Custom WordPress theme and plugin development, Gutenberg blocks, and CMS solutions',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Android Development',
                        description:
                            'Native Android app development using Kotlin with modern architecture patterns',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Flutter Development',
                        description:
                            'Cross-platform mobile application development with Flutter and Dart',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Full Stack Development',
                        description:
                            'End-to-end web and mobile application development with modern technologies',
                    },
                },
            ],
        },
    }

    const webSiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Shalin Shah - Full Stack Developer Portfolio',
        url: 'https://sh4lin.me',
        description:
            'Professional portfolio of Shalin Shah, an experienced Full Stack Developer specializing in React, WordPress, Android, and Flutter development',
        author: {
            '@type': 'Person',
            name: 'Shalin Shah',
        },
        inLanguage: 'en-US',
    }

    const profilePageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        dateCreated: '2024-01-01T00:00:00+00:00',
        dateModified: new Date().toISOString(),
        mainEntity: {
            '@type': 'Person',
            name: 'Shalin Shah',
            alternateName: 'SH4LIN',
            identifier: 'sh4lin',
            description:
                'Experienced Full Stack Developer specializing in Android, WordPress, and React development with expertise in Firebase, Spring Boot, PHP, and modern web technologies',
            image: 'https://sh4lin.me/og-image.svg',
        },
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://sh4lin.me',
            },
        ],
    }

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    )
}

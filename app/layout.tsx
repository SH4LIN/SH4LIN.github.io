import type { Metadata } from 'next'
import './globals.css'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
    metadataBase: new URL('https://sh4lin.me'),
    title: {
        default: 'Shalin Shah - Full Stack Developer | React, WordPress, Android & Flutter',
        template: '%s | Shalin Shah',
    },
    description:
        'Full Stack Developer in Ahmedabad specializing in React, WordPress, Android & Flutter. Expert in JavaScript, TypeScript, Kotlin, PHP. Available for projects.',
    keywords: [
        'Shalin Shah',
        'Full Stack Developer',
        'React Developer',
        'WordPress Developer',
        'Android Developer',
        'Flutter Developer',
        'Ahmedabad Developer',
        'JavaScript Developer',
        'TypeScript Developer',
        'Kotlin Developer',
        'PHP Developer',
        'Firebase Expert',
        'Frontend Developer',
        'Backend Developer',
        'Mobile App Developer',
        'Web Developer',
        'Gutenberg Block Development',
        'WordPress Plugin Development',
        'React Native',
        'Next.js Developer',
        'Spring Boot',
        'REST API Development',
        'Freelance Developer India',
    ],
    authors: [{ name: 'Shalin Shah', url: 'https://sh4lin.me' }],
    creator: 'Shalin Shah',
    publisher: 'Shalin Shah',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [{ url: '/favicon.ico' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
        apple: [{ url: '/apple-touch-icon.svg' }],
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://sh4lin.me',
        siteName: 'Shalin Shah - Full Stack Developer Portfolio',
        title: 'Shalin Shah - Full Stack Developer | React, WordPress, Android & Flutter',
        description:
            'Experienced Full Stack Developer specializing in React, WordPress, Android, and Flutter development. Expert in modern web and mobile technologies.',
        images: [
            {
                url: '/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Shalin Shah - Full Stack Developer',
                type: 'image/svg+xml',
            },
            {
                url: '/linkedin-image.svg',
                width: 1200,
                height: 627,
                alt: 'Shalin Shah - Full Stack Developer',
                type: 'image/svg+xml',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shalin Shah - Full Stack Developer | React, WordPress, Android & Flutter',
        description:
            'Experienced Full Stack Developer specializing in React, WordPress, Android, and Flutter development.',
        creator: '@SH4LIN',
        images: ['/twitter-image.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://sh4lin.me',
    },
    verification: {
        google: 'google-site-verification-code', // Add your verification code
    },
    category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <StructuredData />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap'
                    rel='stylesheet'
                />
                <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
                <link rel='manifest' href='/manifest.json' />
                <meta name='theme-color' content='#667eea' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Shalin Shah' />
            </head>
            <body>{children}</body>
        </html>
    )
}

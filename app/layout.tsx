import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shalin Shah - Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in React, WordPress, and Android development. Portfolio showcasing professional work experience and technical skills.',
  keywords: ['Shalin Shah', 'Full Stack Developer', 'React Developer', 'WordPress Developer', 'Android Developer', 'Flutter Developer'],
  authors: [{ name: 'Shalin Shah' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg' },
    ],
  },
  openGraph: {
    title: 'Shalin Shah - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in React, WordPress, and Android development.',
    url: 'https://sh4lin.me',
    siteName: 'Shalin Shah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}

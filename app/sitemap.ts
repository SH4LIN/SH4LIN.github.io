import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sh4lin.me'
  
  return [
    {
      url: baseUrl,
      lastModified: '2025-10-11',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: '/preview.png',
      },
    ],
    sitemap: ['https://samuelmteixeira.dev/en/sitemap.xml', 'https://samuelmteixeira.dev/pt/sitemap.xml'],
  }
}

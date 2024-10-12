import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://samuelmteixeira.dev',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://samuelmteixeira.dev/en',
          pt: 'https://samuelmteixeira.dev/pt',
        },
      },
    },
  ]
}

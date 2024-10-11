import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://samuelmteixeira.dev',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://samuelmteixeira.dev/en',
          de: 'https://samuelmteixeira.dev/pt',
        },
      },
    },
  ]
}

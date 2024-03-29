import Providers from './providers'

// Meta dados
import jsonLd from '@/data/metadata.json'
import { inter } from './fonts'

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: 'Samuel Molendolff Teixeira',
  description: "A Software Developer's Portofio",
  authors: {
    name: 'Samuel Molendolff Teixeira',
    url: 'https://www.linkedin.com/in/samuelmteixeira/',
  },
  keywords: [
    'Portfolio',
    'Developer',
    'Software Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Software Engineer',
    'Desenvolvedor',
    'Front-End',
    'Back-End',
    'Engenheiro de software',
  ],
  alternates: {
    canonical: 'https://samuelmteixeira.dev',
  },
  openGraph: {
    images: {
      url: '/logo.png',
      alt: 'Yellow letter S, used as the representative logo of the website',
      type: 'image/png',
    },
    title: 'Samuel Molendolff Teixeira',
    type: 'website',
    description:
      'Check out my software development portfolio, where I share my projects and experiences in the area.',
    url: 'https://samuelmteixeira.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import './globals.css'
import Providers from './providers'
import jsonLd from '@/data/metadata.json'
import { bricolageGrotesque, manrope } from './fonts'
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Samuel Molendolff Teixeira | Software Engineer & Architect',
  description: 'Software Engineer and Architect specialized in creating robust and scalable solutions. Transforming complex challenges into efficient systems.',
  authors: {
    name: 'Samuel Molendolff Teixeira',
    url: 'https://www.linkedin.com/in/samuelmteixeira/',
  },
  keywords: [
    'Portfolio',
    'Software Developer',
    'Software Engineer',
    'Software Architect',
    'Full Stack Developer',
    'Web Development',
    'React Developer',
    'Node.js Developer',
    'TypeScript',
    'JavaScript',
    'Java',
    'System Design',
    'Cloud Architecture',
    'Frontend Development',
    'Backend Development',
    'API Development',
    'Performance Optimization',
    'Scalable Systems',
    'Technical Architecture',
    'Software Solutions',
    'Code Quality',
  ],
  alternates: {
    canonical: 'https://samuelmteixeira.dev',
  },
  openGraph: {
    images: [{
      url: '/logo.webp',
      alt: 'Orange letter S, used as the representative logo of the website',
      type: 'image/webp',
      width: 1200,
      height: 630,
    }],
    title: 'Samuel Molendolff Teixeira | Software Engineer & Architect',
    type: 'website',
    description: 'Software Engineer and Architect specialized in creating robust and scalable solutions. Transforming complex challenges into efficient systems.',
    url: 'https://molendolff.dev',
    locale: 'en_US',
    siteName: 'Samuel Molendolff Teixeira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Molendolff Teixeira | Software Engineer & Architect',
    description: 'Software Engineer and Architect specialized in creating robust and scalable solutions. Transforming complex challenges into efficient systems.',
    images: [{
      url: '/logo.webp',
      alt: 'Orange letter S, used as the representative logo of the website',
    }],
    site: '@molendolff_',
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
  category: 'technology',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {

  return (
    <html
      lang={((await params).locale)}
      className={`${manrope.variable} ${bricolageGrotesque.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-manrope">
        <Providers>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}

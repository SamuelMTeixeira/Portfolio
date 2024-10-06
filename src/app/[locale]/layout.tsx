import './globals.css'
import Providers from './providers'
import jsonLd from '@/data/metadata.json'
import { bricolageGrotesque, manrope } from './fonts'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import ReactQueryProvider from '@/providers/reactQueryProvider'
import { Toaster } from '@/components/ui/sonner'

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${bricolageGrotesque.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={'font-manrope'}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </NextIntlClientProvider>
        </Providers>

        <Toaster />
      </body>
    </html>
  )
}

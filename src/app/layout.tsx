// Meta dados
import ThemeProvider from '@assets/theme/ThemeProvider'
import jsonLd from '@/data/metadata.json'

export const metadata = {
  title: "Samuel Molendolff Teixeira",
  description: "A Software Developer's Portofio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
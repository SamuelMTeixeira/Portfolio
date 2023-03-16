// Meta dados
import ThemeProvider from '@assets/theme/ThemeProvider'

export const metadata = {
  title: 'Samuel Molendolff Teixeira',
  description: 'A software developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
'use client'

import { ReactQueryProvider } from '@/providers/react-query-provider';
import { ThemeProvider } from '@/providers/theme-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

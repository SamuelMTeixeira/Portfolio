'use client'

// React Query provider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Chakra Provider
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@assets/theme'
import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

const SystemTheme = extendTheme({ ...theme })

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={SystemTheme}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}

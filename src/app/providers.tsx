'use client'

// React Query provider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Chakra Provider
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@assets/theme'
import { useState } from 'react'

const SystemTheme = extendTheme({ ...theme })

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={SystemTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}

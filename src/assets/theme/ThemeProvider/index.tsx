'use client'

import React from 'react'

// Provider
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

// Theme
import { extendTheme } from '@chakra-ui/react'
import theme from '@assets/theme'

const SystemTheme = extendTheme({ ...theme })

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <CacheProvider>
            <ChakraProvider theme={SystemTheme}>{children}</ChakraProvider>
        </CacheProvider>
    )
}
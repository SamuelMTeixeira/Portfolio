'use client'

import { Inter } from 'next/font/google'
import Home from '@components/templates/Home'
import { Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (<Home />)
}

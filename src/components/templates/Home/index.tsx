'use client'

import { Flex } from '@chakra-ui/react'
import {
  Aside,
  Footer,
  Header,
  Introduction,
  Skills,
  Projects,
  Contact,
} from '@components/organisms'

// Data
import menuOptions from '@/data/menuOptions'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Header menuOptions={menuOptions} />

      <Aside />

      <Flex
        as="main"
        direction={'column'}
        maxWidth="100%"
        ps={{ base: 6, md: 32 }}
        px={{ base: 6, sm: 10 }}
      >
        <Introduction />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      </Flex>
    </QueryClientProvider>
  )
}

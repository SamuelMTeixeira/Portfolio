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

export default function Home() {
  return (
    <>
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
    </>
  )
}

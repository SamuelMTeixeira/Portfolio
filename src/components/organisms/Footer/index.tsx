import { Flex } from '@chakra-ui/react'
import { IconLink, Text } from '@components/atoms'
import { Logo, Section } from '@components/molecules'
import { GitHub, Linkedin, FileText } from 'react-feather'

export default function Footer() {
  return (
    <Section id={'footer'} as={'footer'} p={5} mt={10}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.600',
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.600',
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Logo />
      </Flex>

      <Flex
        gap={2}
        direction={'column-reverse'}
        align={'center'}
        justify={'space-between'}
        mt={3}
      >
        <Text textAlign={'center'} fontSize={'sm'}>
          © 2022 - 2023 | Coded with 💛 by SamuelMTeixeira
        </Text>

        <Flex gap={3} display={{ base: 'flex', md: 'none' }}>
          <IconLink
            href="https://github.com/SamuelMTeixeira"
            icon={<GitHub size={20} />}
            label={'github'}
          />

          <IconLink
            href="https://www.linkedin.com/in/SamuelMTeixeira"
            icon={<Linkedin size={20} />}
            label={'Linkedin'}
          />

          <IconLink
            href="/cv.pdf"
            target="_blank"
            icon={<FileText size={20} />}
            label={'CV'}
          />
        </Flex>
      </Flex>
    </Section>
  )
}

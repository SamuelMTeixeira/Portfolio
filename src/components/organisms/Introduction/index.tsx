import { Flex } from '@chakra-ui/react'
import { Title, Text, Link } from '@components/atoms'
import { Section } from '@components/molecules'
import { Send } from 'react-feather'
import './transitions.css'

export default function Introduction() {
  return (
    <Section id="home" fullSize justify={'center'}>
      <Flex justify={{ base: 'center', md: 'flex-start' }} gap={1}>
        <Title
          className="emoji"
          as={'h2'}
          position={'relative'}
          fontSize={{ base: 'md', sm: 'lg', md: '2xl' }}
        >
          👋
        </Title>

        <Title
          as={'h2'}
          color={'golden.500'}
          textDecoration={'underline'}
          fontSize={{ base: 'sm', sm: 'lg', md: '2xl' }}
          textUnderlineOffset={{ base: 4, md: 8, lg: 9 }}
        >
          Olá! meu nome é Samuel Teixeira
        </Title>
      </Flex>

      <Title
        as={'h1'}
        fontSize={{ base: '2xl', sm: '2xl', md: '4xl', lg: '6xl' }}
        mt={2}
        maxW={'5xl'}
        textAlign={{ base: 'center', md: 'start' }}
        lineHeight={'initial'}
      >
        Transformo ideias em soluções tecnológicas disruptivas
      </Title>

      <Text
        maxW={'2xl'}
        textAlign={{ base: 'justify', md: 'start' }}
        mt={4}
        color={'gray.400'}
      >
        Sou um engenheiro de software com foco em arquitetura de software e no
        desenvolvimento de aplicações web. Para mim, o café é uma fonte de
        inspiração, e acredito que uma boa música é a chave para elevar a
        produtividade e a criatividade.
      </Text>
      <Flex mt={4} direction={{ base: 'column', md: 'row' }}>
        <Link
          display={'flex'}
          gap={3}
          justifyContent={'center'}
          alignItems={'center'}
          variant={'catchy'}
          href="#contact"
        >
          <Send size={20} />
          Entrar em contato
        </Link>
      </Flex>
    </Section>
  )
}

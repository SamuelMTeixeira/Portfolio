import { ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import { Title, Text } from '@components/atoms'

interface ISection extends FlexProps {
  children: ReactNode
  id: string
  fullSize?: boolean
  title?: string
  subtitle?: string
}

export default function Section({
  children,
  id,
  fullSize,
  title,
  subtitle,
  ...props
}: ISection) {
  return (
    <Flex
      as="section"
      minHeight={fullSize ? '100vh' : 'auto'}
      direction={'column'}
      id={id}
      {...props}
    >
      {/* Implementa um subtitulo para a section, caso precise */}
      {subtitle ? (
        <Text textAlign={'center'} fontSize={'lg'} color={'golden.500'}>
          {subtitle}
        </Text>
      ) : null}

      {/* Implementa um titulo para a section, caso precise */}
      {title ? (
        <Title lineHeight={'normal'} textAlign={'center'} fontSize={'4xl'}>
          {title}
        </Title>
      ) : null}

      {children}
    </Flex>
  )
}

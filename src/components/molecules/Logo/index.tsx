import { Flex } from '@chakra-ui/react'
import { Image, Link } from '@components/atoms'

import logo from 'public/logo.png'

export default function Logo() {
  return (
    <Flex alignItems={'center'}>
      <Link href="#">
        <Image
          priority={true}
          src={logo}
          alt="Letra S - Inicial do nome do autor do portfolio"
          height={48}
          width={48}
        />
      </Link>
    </Flex>
  )
}

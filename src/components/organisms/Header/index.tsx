// React
import { useEffect, useState } from 'react'

// Chakra UI
import { Box, Flex, IconButton, Stack, useDisclosure } from '@chakra-ui/react'

import { Menu as HamburgerIcon } from 'react-feather'

// Atoms
import { Link } from '@components/atoms'
import NavLink from './NavLink'

// Molecules
import { Logo } from '@components/molecules'
import Menu from './Menu'

export interface NavItemProps {
  children: string
  href: string
}

export default function Header({
  menuOptions,
}: {
  menuOptions: Array<NavItemProps>
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      as={'header'}
      position={'fixed'}
      w={'100%'}
      backgroundColor={'dark_blue.900'}
      boxShadow={scrolled ? 'md' : 'none'}
      zIndex={'docked'}
    >
      <Flex
        as={'nav'}
        minH={'60px'}
        py={{ base: scrolled ? 4 : 6 }}
        px={{ base: 8 }}
        align={'center'}
      >
        <Flex flex={{ base: 1 }}>
          <Logo />
        </Flex>

        <Stack justify={'flex-end'} direction={'row'} spacing={6}>
          {/* Btn hamburguer */}
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon size={32} color={'#FFFFFF'} />}
            bg={'transparent'}
            _hover={{
              bg: 'dark_blue.800',
            }}
            _active={{
              bg: 'dark_blue.700',
            }}
            display={{ base: 'inline-flex', md: 'none' }}
            aria-label={'Abrir barra lateral de navegação'}
          />

          {/* Nav options */}
          <NavItens data={menuOptions} />
        </Stack>
      </Flex>

      <Menu isOpen={isOpen} onClose={onClose} data={menuOptions}>
        Menu de navegação
      </Menu>
    </Box>
  )
}

const NavItens = ({ data }: { data: Array<NavItemProps> }) => {
  return (
    <Flex align={'center'} display={{ base: 'none', md: 'inline-flex' }}>
      {data.map((item, index) => (
        <NavLink href={item.href} key={index}>
          {item.children}
        </NavLink>
      ))}

      <Link href="#contact" variant={'button'}>
        Contato
      </Link>
    </Flex>
  )
}

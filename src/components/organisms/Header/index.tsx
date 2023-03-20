

// Chakra UI
import {
    Box,
    Flex,
    IconButton,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'

import {
    HamburgerIcon,
} from '@chakra-ui/icons'

// Atoms
import { Link, Button } from "@components/atoms"
import NavLink from "./NavLink"

// Molecules
import { Logo } from "@components/molecules"
import Menu from './Menu'

export interface NavItemProps {
    children: string;
    href: string;
}

export default function Header({ menuOptions }: { menuOptions: Array<NavItemProps> }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box as={"header"}>
            <Flex
                as={"nav"}
                minH={'60px'}
                py={{ base: 6 }}
                px={{ base: 8 }}
                align={'center'}>

                <Flex flex={{ base: 1 }}>
                    <Logo />
                </Flex>

                <Stack
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>


                    {/* Btn hamburguer */}
                    <IconButton
                        onClick={onOpen}
                        icon={<HamburgerIcon w={8} h={8} />}
                        bg={'transparent'}
                        _hover={{
                            bg: 'dark_blue.800'
                        }}
                        _active={{
                            bg: 'dark_blue.700'
                        }}
                        display={{ base: 'inline-flex', md: 'none' }}
                        aria-label={'Abrir barra lateral de navegação'}
                    />


                    {/* Nav options*/}
                    <NavItens data={menuOptions} />

                </Stack>
            </Flex>

            <Menu isOpen={isOpen} onClose={onClose} data={menuOptions}>Menu de navegação</Menu>

        </Box>
    );
}



const NavItens = ({ data }: { data: Array<NavItemProps> }) => {

    return (
        <Flex align={'center'} display={{ base: 'none', md: 'inline-flex' }}>
            {data.map((item, index) => <NavLink href={item.href} key={index}>{item.children}</NavLink>)}

            <Button size={'md'} variant={'outline'}>
                <Link href='#contact' _hover={{
                    textDecoration: 'none'
                }}> Contato</Link>
            </Button>

        </Flex>
    )
}
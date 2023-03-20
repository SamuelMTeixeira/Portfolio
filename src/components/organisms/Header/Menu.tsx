// Drawer
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    DrawerProps,
    Flex,
} from "@chakra-ui/react"

import { useRouter } from 'next/navigation';

// Atoms
import { Button, Link } from "@components/atoms"
import NavLink from "./NavLink"

// Interfaces
import { NavItemProps } from "."


interface IMenu extends DrawerProps {
    data: Array<NavItemProps>;
}

export default function Menu({ children, isOpen, onClose, data }: IMenu) {
    const router = useRouter()

    const goTo = (sectionName: string) => {
        router.push(sectionName)
        onClose()
    }

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay opacity={"0.4"} />
            <DrawerContent backgroundColor={'dark_blue.900'}>
                <DrawerCloseButton size={'lg'} />
                <DrawerHeader fontSize={'lg'}>{children}</DrawerHeader>
                <DrawerBody>

                    <Flex direction={'column'} gap={3}>
                        {data.map((item, index) => <NavLink onClick={() => goTo(item.href)} href={item.href} key={index}>{item.children}</NavLink>)}

                        <Button mx={6} size={'md'} variant={'outline'} onClick={() => goTo('#contact')}>
                            Contato
                        </Button>
                    </Flex>


                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

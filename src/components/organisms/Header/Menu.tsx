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

    const goTo = () => {
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
                        {data.map((item, index) => <NavLink onClick={goTo} href={item.href} key={index}>{item.children}</NavLink>)}

                        <Link
                            onClick={goTo}
                            href={"#contact"}
                            textAlign={"center"}
                            mx={4}
                            variant={"button"}>
                            Contato
                        </Link>
                    </Flex>


                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

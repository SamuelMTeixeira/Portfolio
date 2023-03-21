import { Link } from "@components/atoms"
import { Flex, IconButton } from "@chakra-ui/react"
import { GitHub, Linkedin } from 'react-feather'

export default function Aside() {
    return (
        <Flex
            as="aside"
            position={'fixed'} left={9} bottom={"50%"} zIndex={"docked"}
            direction={"column"} gap={4}>

            <Link href="https://github.com/SamuelMTeixeira">
                <IconButton
                    bg={"transparent"}
                    _hover={{
                        bg: "transparent",
                        color: "golden.500"
                    }}
                    icon={<GitHub size={20} />}
                    aria-label={'Icone do github'} />
            </Link>

            <Link href="https://www.linkedin.com/in/SamuelMTeixeira">
                <IconButton
                    bg={"transparent"}
                    _hover={{
                        bg: "transparent",
                        color: "golden.500",

                    }}
                    icon={<Linkedin size={20} />}
                    aria-label={'Icone do Linkedin'} />
            </Link>

        </Flex>
    )
}
import { Link } from "@components/atoms"
import { Flex, IconButton, Tooltip } from "@chakra-ui/react"
import { GitHub, Linkedin } from 'react-feather'

export default function Aside() {
    return (
        <Flex
            as="aside"
            position={'fixed'} left={9} bottom={"40%"} zIndex={"docked"}
            direction={"column"} gap={4}
            display={{ base: "none", md: "flex" }}>

            <Link href="https://github.com/SamuelMTeixeira">
                <Tooltip label="Github" aria-label='Tooltip da rede social Github'  placement='right'>
                    <IconButton
                        bg={"transparent"}
                        _hover={{
                            bg: "transparent",
                            color: "golden.500"
                        }}
                        icon={<GitHub size={20} />}
                        aria-label={'Icone do github'} />
                </Tooltip>
            </Link>


            <Link href="https://www.linkedin.com/in/SamuelMTeixeira">
                <Tooltip label="Linkedin" aria-label='Tooltip da rede social Linkedin'  placement='right'>
                    <IconButton
                        bg={"transparent"}
                        _hover={{
                            bg: "transparent",
                            color: "golden.500",

                        }}
                        icon={<Linkedin size={20} />}
                        aria-label={'Icone do Linkedin'} />
                </Tooltip>
            </Link>

        </Flex>
    )
}
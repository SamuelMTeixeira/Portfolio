import { Flex } from "@chakra-ui/react"
import {
    Aside,
    Footer,
    Header,
    Introduction,
    Skills,
    Projects,
    Contact
} from "@components/organisms"

export default function Home() {

    const menuOptions = [
        {
            children: "Home",
            href: "#"
        },
        {
            children: "Habilidades",
            href: "#skills"
        },
        {
            children: "Projetos",
            href: "#projects"
        }
    ]

    return (
        <>
            <Header menuOptions={menuOptions} />

            <Aside />

            <Flex
                as="main"
                direction={'column'}
                maxWidth="100%"
                ps={{ base: 6, md: 32 }}
                px={{ base: 6, sm: 10 }}>

                <Introduction />

                <Projects />

                <Contact />
                
                <Footer />
            </Flex>


        </>
    )
}
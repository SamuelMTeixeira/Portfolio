
import { Box } from "@chakra-ui/react"
import { Header } from "@components/organisms"

export default function Home() {

    const menuOptions = [
        {
            children: "Home",
            href: "#"
        },
        {
            children: "Skills",
            href: "#skills"
        },
        {
            children: "Projects",
            href: "#projects"
        }
    ]

    return (
        <>
            <Header menuOptions={menuOptions} />

            <Box as="main">
                <h1>Welcome to my portfolio</h1>
            </Box>

            <Box as={"footer"}>
                Footer not yet implemented
            </Box>
        </>
    )
}
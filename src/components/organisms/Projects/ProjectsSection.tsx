import { Container } from "@chakra-ui/react";
import { Section } from '@components/molecules'
import { ReactNode } from "react";


export default function ProjectsSection({ children }: { children: ReactNode }) {
    return (
        <Section
            id="projects"
            title="Explorando minhas criações"
            subtitle="Projetos recentes">

            <Container maxWidth={'full'} mt={10}>
                {children}
            </Container>

        </Section>
    )
}
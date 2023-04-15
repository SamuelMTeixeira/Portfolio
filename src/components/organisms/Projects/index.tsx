import { Container, Flex } from "@chakra-ui/react";
import { Section } from '@components/molecules'
import Card from "./Card";
import projects from "@/data/projects";

export default function Projects() {

    return (
        <Section
            id="projects"
            title="Explorando minhas criações"
            subtitle="Projetos recentes">

            <Container maxWidth={'full'} mt={10}>
                <Flex flexWrap="wrap" gridGap={{ base: 4, lg: 6 }} align={'center'} justify={{ base: 'center' }}>
                    {
                        projects.map(({ title, description, image, repo, preview }, index) => (
                            <Card
                                key={index}
                                title={title}
                                description={description}
                                image={image}
                                preview={preview}
                                repo={repo}
                            />
                        ))
                    }
                </Flex>
            </Container>




        </Section>
    )
}
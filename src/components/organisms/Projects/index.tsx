import { Container, Flex } from "@chakra-ui/react";
import { Section } from '@components/molecules'
import Card from "./Card";

export default function Projects() {

    const projects = [
        {
            id: '0',
            title: 'PingCast',
            description: 'Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            preview: 'https://pingcast.vercel.app',
            repo: 'https://github.com/IFNMG-teo-Development-team/pingcast-client'
        },
        {
            id: '1',
            title: 'Teste 2',
            description: 'Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            preview: 'https://pingcast.vercel.app',
            repo: 'https://github.com/IFNMG-teo-Development-team/pingcast-client'
        },
        {
            id: '2',
            title: 'Teste 3',
            description: 'Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
        {
            id: '2',
            title: 'Teste 3',
            description: 'Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
        {
            id: '2',
            title: 'Teste 3',
            description: 'Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
    ]

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
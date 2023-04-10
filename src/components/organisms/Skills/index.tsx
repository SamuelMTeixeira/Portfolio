import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Text, Title } from "@components/atoms";
import { SkillCard, Section } from "@components/molecules";
import { Grid } from "react-feather";
import { Card as CardBase, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Code } from "react-feather";


export function Skills() {

    const skills = [
        {
            "id": "dev-web",
            "name": "Desenvolvimento Web",
            "description": "Desenvolvimento de aplicações web com React.js e frameworks como Next.js, entre outros."
        },
        {
            "id": "mobile",
            "name": "Desenvolvimento Mobile",
            "description": "Desenvolvimento de aplicativos mobile com React Native e Java."
        },
        {
            "id": "api",
            "name": "Desenvolvimento de APIs",
            "description": "Desenvolvimento de APIs em Node.js, utilizando o framework Express.js, entre outros."
        },
        {
            "id": "banco-de-dados",
            "name": "Banco de Dados",
            "description": "Conhecimento em bancos de dados relacionais e não-relacionais, como MySQL, MongoDB, entre outros."
        }
    ]



    return (
        <Section id="skills">
            <Title textAlign={'center'} fontSize={'4xl'}>Minhas Especialidades</Title>

            <Text textAlign={'center'} fontSize={'lg'} color={'gray.400'}>
                Uma breve pincelada sobre minhas principais especialidades
            </Text>


            <SimpleGrid
                mt={10}
                columns={{ base: 1, md: 2 }}
                justifyItems="center"
                justifyContent="space-evenly"
                gap={5}
            >
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.name}
                        description={skill.description} />
                ))}
            </SimpleGrid>




        </Section>
    )
}


interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <CardBase bg={'#03030E'}>
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </CardBase>
    );
};

export default function gridListWith() {
    return (
        <Box p={4}>
            <Stack as={Container} maxW={'3xl'} textAlign={'center'}>

                <Title textAlign={'center'} fontSize={'4xl'}>Minhas Especialidades</Title>

                <Text textAlign={'center'} fontSize={'lg'} color={'gray.400'}>
                    Uma breve pincelada sobre minhas principais especialidades
                </Text>

            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={Code} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={Code} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={Code} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={Code} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={Code} w={10} h={10} />}
                        description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                        }
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    );
}